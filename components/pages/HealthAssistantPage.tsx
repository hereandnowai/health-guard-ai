
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useGeminiChat } from '../../hooks/useGeminiChat';
import Button from '../common/Button';
import LoadingSpinner from '../common/LoadingSpinner';
import { PaperAirplaneIcon, UserCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, MicrophoneIcon, LanguageIcon } from '../icons';
import { ChatMessage, GroundingChunkWeb, LanguageOption } from '../../types';
import { BRAND_INFO, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE_CODE } from '../../constants';

// Attempt to get the SpeechRecognition object
const SpeechRecognitionGlobal = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
let recognition: any | null = null; // Changed SpeechRecognition to any for the instance type
if (SpeechRecognitionGlobal) {
    recognition = new SpeechRecognitionGlobal();
    if (recognition) {
        recognition.continuous = false;
        recognition.interimResults = false;
    }
}

const HealthAssistantPage: React.FC = () => {
  const [inputMessage, setInputMessage] = useState<string>('');
  const [selectedLanguageCode, setSelectedLanguageCode] = useState<string>(DEFAULT_LANGUAGE_CODE);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [speechError, setSpeechError] = useState<string | null>(null);

  const selectedLanguageName = SUPPORTED_LANGUAGES.find(lang => lang.code === selectedLanguageCode)?.name || 'English (US)';

  const { messages, sendMessage, isLoading, error: chatError } = useGeminiChat();
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguageCode(event.target.value);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputMessage.trim()) {
      sendMessage(inputMessage.trim(), selectedLanguageName);
      setInputMessage('');
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Speech Recognition Logic
  useEffect(() => {
    if (!recognition) return;

    recognition.lang = selectedLanguageCode;

    recognition.onresult = (event: any) => { // Changed SpeechRecognitionEvent to any
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      setInputMessage(transcript);
      setSpeechError(null);
    };

    recognition.onerror = (event: any) => { // Changed SpeechRecognitionErrorEvent to any
      console.error('Speech recognition error:', event.error);
      let errorMessage = 'Speech recognition error. Please try again.';
      if (event.error === 'no-speech') {
        errorMessage = 'No speech detected. Please try again.';
      } else if (event.error === 'audio-capture') {
        errorMessage = 'Microphone error. Please check your microphone settings.';
      } else if (event.error === 'not-allowed') {
        errorMessage = 'Microphone access denied. Please allow microphone access in your browser settings.';
      }
      setSpeechError(errorMessage);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      // Automatically send message after speech ends if there's content
      // Debounce or add a small delay if needed to allow quick edits
      // For now, direct send if inputMessage has content from speech
      if(inputMessage.trim() && isListening) { // isListening check prevents sending on manual stop
         // handleSubmit(); // Removed auto-submit for better UX, user can review then send
      }
    };
  }, [selectedLanguageCode, inputMessage, isListening]); // Added inputMessage and isListening

  const toggleListening = () => {
    if (!recognition) {
        setSpeechError("Speech recognition is not supported by your browser.");
        return;
    }
    if (isListening) {
      recognition.stop();
    } else {
      setInputMessage(''); // Clear input before starting new speech
      setSpeechError(null);
      try {
        recognition.start();
        setIsListening(true);
      } catch (e) {
        console.error("Error starting speech recognition:", e);
        setSpeechError("Could not start speech recognition. Ensure microphone is connected and permissions are granted.");
        setIsListening(false);
      }
    }
  };


  const renderMessageContent = (message: ChatMessage) => {
    let text = message.text;
    const sources: GroundingChunkWeb[] = [];

    if (message.sender === 'ai' && message.metadata?.candidates?.[0]?.groundingMetadata?.groundingChunks) {
        message.metadata.candidates[0].groundingMetadata.groundingChunks.forEach(chunk => {
            if (chunk.web) {
                sources.push(chunk.web);
            }
        });
    }
    
    text = text.replace(/\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[var(--brand-primary)] hover:underline">$1</a>');
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); 
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>'); 
    text = text.replace(/\n/g, '<br />');

    return (
        <>
            <p dangerouslySetInnerHTML={{ __html: text }} />
            {sources.length > 0 && (
                <div className="mt-2 pt-2 border-t border-[var(--brand-primary)]/50"> 
                    <p className="text-xs font-semibold text-[var(--brand-secondary-text)]/80 mb-1">Sources:</p>
                    <ul className="list-disc list-inside space-y-1">
                        {sources.map((source, index) => (
                            <li key={index} className="text-xs">
                                <a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-[var(--brand-primary)] hover:underline">
                                    {source.title || source.uri}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] max-h-[700px] bg-[var(--brand-card-background)] rounded-xl shadow-2xl border border-[var(--brand-border)] overflow-hidden">
      <header className="p-4 border-b border-[var(--brand-border)] bg-[var(--theme-bg-accent)]">
        <h2 className="text-xl font-semibold text-center text-[var(--brand-primary)]">
          AI Health Assistant
        </h2>
        <p className="text-xs text-[var(--brand-text-dim)] text-center mt-1">Ask health-related questions in your preferred language. Powered by {BRAND_INFO.organizationShortName}. For informational purposes only.</p>
      </header>

      <div className="flex-grow p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-xl shadow ${
              msg.sender === 'user' 
                ? 'bg-[var(--brand-primary)] text-[var(--brand-primary-text)] rounded-br-none' 
                : 'bg-[var(--theme-bg-accent)] text-[var(--brand-secondary-text)] rounded-bl-none'
            }`}>
              <div className="flex items-start text-sm">
                {msg.sender === 'user' ? 
                  <UserCircleIcon className="h-8 w-8 mr-2 shrink-0 text-[var(--brand-primary-text)]/70" /> : 
                  <img src={BRAND_INFO.chatbot.avatar} alt="AI Avatar" className="h-8 w-8 mr-2 shrink-0 rounded-full object-cover border-2 border-[var(--brand-primary)]" />
                }
                <div className="flex-grow whitespace-pre-wrap break-words">
                  {renderMessageContent(msg)}
                </div>
              </div>
              <p className="text-xs text-right mt-1 opacity-70">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && messages.length > 0 && messages[messages.length-1].sender === 'user' && (
           <div className="flex justify-start">
             <div className="max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg shadow bg-[var(--theme-bg-accent)] text-[var(--brand-secondary-text)] rounded-bl-none">
                <LoadingSpinner size="sm" text={`AI is thinking in ${selectedLanguageName}...`} className="text-[var(--brand-secondary-text)]" spinnerClassName="border-t-[var(--brand-primary)]" />
             </div>
           </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {(chatError || speechError) && (
        <div className="p-3 border-t border-[var(--brand-border)] text-sm text-red-400 bg-red-900/40 flex items-center">
          <ExclamationTriangleIcon className="h-5 w-5 mr-2 shrink-0 text-red-500"/> {chatError || speechError}
        </div>
      )}
       {!process.env.API_KEY && (
        <div className="p-3 border-t border-[var(--brand-border)] text-sm text-yellow-400 bg-yellow-900/40 flex items-center">
          <InformationCircleIcon className="h-5 w-5 mr-2 shrink-0 text-yellow-500"/> API Key not configured. AI Assistant is disabled.
        </div>
      )}
      {!SpeechRecognitionGlobal && (
         <div className="p-3 border-t border-[var(--brand-border)] text-sm text-yellow-400 bg-yellow-900/40 flex items-center">
          <InformationCircleIcon className="h-5 w-5 mr-2 shrink-0 text-yellow-500"/> Speech recognition is not supported by your browser.
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-4 border-t border-[var(--brand-border)] bg-[var(--theme-bg-accent)]">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <select
              value={selectedLanguageCode}
              onChange={handleLanguageChange}
              className="pl-8 pr-2 py-3 bg-[var(--brand-card-background)] border border-[var(--brand-border)] rounded-lg text-[var(--brand-text-light)] focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-[var(--brand-primary)] transition-colors appearance-none text-xs"
              aria-label="Select language"
              title="Select language"
              disabled={isLoading || isListening}
            >
              {SUPPORTED_LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code} className="bg-[var(--brand-card-background)] text-[var(--brand-text-light)]">
                  {lang.nativeName}
                </option>
              ))}
            </select>
            <LanguageIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--brand-text-dim)] pointer-events-none" />
          </div>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={!process.env.API_KEY ? "AI Assistant disabled" : `Type or speak in ${selectedLanguageName}...`}
            className="flex-grow p-3 bg-[var(--brand-card-background)] border border-[var(--brand-border)] rounded-lg text-[var(--brand-text-light)] focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-[var(--brand-primary)] transition-colors placeholder-[var(--brand-text-dim)]"
            disabled={isLoading || !process.env.API_KEY || isListening}
          />
          {SpeechRecognitionGlobal && (
            <Button 
                type="button" 
                onClick={toggleListening} 
                disabled={isLoading || !process.env.API_KEY} 
                className={`h-12 w-12 p-0 flex items-center justify-center shrink-0 transition-colors ${
                    isListening ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-[var(--brand-primary)] hover:bg-yellow-300 text-[var(--brand-primary-text)]'
                }`}
                aria-label={isListening ? "Stop listening" : "Start listening"}
                title={isListening ? "Stop listening" : "Start listening"}
            >
                <MicrophoneIcon className="h-5 w-5" />
            </Button>
          )}
          <Button type="submit" disabled={isLoading || !inputMessage.trim() || !process.env.API_KEY || isListening} className="h-12 w-12 p-0 flex items-center justify-center shrink-0">
            <PaperAirplaneIcon className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HealthAssistantPage;
