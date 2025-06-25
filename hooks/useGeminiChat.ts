
import { useState, useCallback } from 'react';
import { ChatMessage, Candidate } from '../types';
import { askGemini } from '../services/geminiService';
import { GenerateContentResponse } from '@google/genai';

export const useGeminiChat = (initialMessages: ChatMessage[] = []) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (text: string, languageName?: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString() + '-user',
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    const lowerText = text.toLowerCase();
    const shouldUseSearch = lowerText.includes("latest") || 
                            lowerText.includes("recent") || 
                            lowerText.includes("current events") ||
                            lowerText.includes("news about") ||
                            lowerText.includes("what is the update on") ||
                            /\d{4}/.test(lowerText);


    try {
      const response: GenerateContentResponse & { candidates?: Candidate[] } = await askGemini(text, shouldUseSearch, languageName);
      const aiResponseText = response.text;
      
      const aiMessage: ChatMessage = {
        id: Date.now().toString() + '-ai',
        text: aiResponseText || "I'm sorry, I couldn't generate a response.",
        sender: 'ai',
        timestamp: new Date(),
        metadata: {
            candidates: response.candidates 
        }
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (err: any) {
      console.error("Error in useGeminiChat:", err);
      const errorMessage = err.message || "An error occurred while communicating with the AI.";
      setError(errorMessage);
      const errorAiMessage: ChatMessage = {
        id: Date.now().toString() + '-ai-error',
        text: `Error: ${errorMessage}`,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorAiMessage]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { messages, sendMessage, isLoading, error };
};