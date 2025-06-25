
import { GoogleGenAI, GenerateContentResponse, GenerateContentParameters } from "@google/genai";
import { GEMINI_TEXT_MODEL, BRAND_INFO } from "../constants";
import { GeminiResponseExtension } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn(
    "API_KEY environment variable not set. Gemini API functionality will be disabled."
  );
}

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

const BASE_SYSTEM_INSTRUCTION = `You are an AI Health Assistant from ${BRAND_INFO.organizationShortName}. Your goal is to provide helpful and informative responses to health-related questions.
You should:
- Provide general information, not medical advice.
- Always encourage users to consult with a qualified healthcare professional for diagnosis, treatment, or personal medical concerns.
- If a question is outside the scope of general health information (e.g., asking for a diagnosis, treatment plan, or emergency help), politely decline and reiterate the importance of consulting a doctor.
- If asked about medications, you can provide general information (e.g., common uses, general side effects) but stress that specifics should be discussed with a doctor or pharmacist.
- You can use Google Search grounding to find up-to-date information if the query suggests it. If you use search, try to cite sources.
- Keep responses concise and easy to understand.
- Do not make up information. If you don't know something, say so.
- Be empathetic and supportive.
Example of declining medical advice: "As an AI assistant from ${BRAND_INFO.organizationShortName}, I can provide general information about [topic], but I can't give medical advice or diagnose conditions. It's best to discuss your specific symptoms and concerns with a healthcare professional."
Example of emergency: "If you are experiencing a medical emergency, please call your local emergency number or go to the nearest emergency room immediately."
`;


export const askGemini = async (
  prompt: string, 
  useSearchGrounding: boolean = false,
  targetLanguageName?: string // e.g., "French", "Spanish"
): Promise<GenerateContentResponse & GeminiResponseExtension> => {
  if (!ai) {
    throw new Error(
      "Gemini API client is not initialized. Check API_KEY configuration."
    );
  }

  let finalSystemInstruction = BASE_SYSTEM_INSTRUCTION;
  if (targetLanguageName && targetLanguageName.toLowerCase() !== 'english (us)' && targetLanguageName.toLowerCase() !== 'english (uk)' && targetLanguageName.toLowerCase() !== 'english') {
    finalSystemInstruction += `\nImportant: Please respond entirely in ${targetLanguageName}.`;
  }

  const requestParams: GenerateContentParameters = {
    model: GEMINI_TEXT_MODEL,
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    config: {
      systemInstruction: finalSystemInstruction,
      temperature: 0.7, 
      topK: 40,
      topP: 0.95,
    },
  };

  if (useSearchGrounding) {
    requestParams.config = {
      ...requestParams.config,
      tools: [{ googleSearch: {} }],
    };
    if (requestParams.config && 'responseMimeType' in requestParams.config) {
        delete requestParams.config.responseMimeType;
    }
  }


  try {
    const response: GenerateContentResponse = await ai.models.generateContent(requestParams);
    
    const extendedResponse = response as GenerateContentResponse & GeminiResponseExtension;
    
    return extendedResponse;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        if (error.message.includes("API key not valid")) {
             throw new Error("Invalid API Key. Please check your configuration.");
        }
         throw new Error(`Gemini API error: ${error.message}`);
    }
    throw new Error("An unknown error occurred with the Gemini API.");
  }
};