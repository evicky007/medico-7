
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = 'gemini-2.5-flash';
const systemInstruction = `You are an AI medical assistant. Your role is to provide helpful, general medical information based on user queries. You must not provide diagnoses, prescribe treatments, or offer any form of professional medical advice. Always conclude your responses with a clear disclaimer in a new paragraph: 'Disclaimer: I am an AI assistant and not a medical professional. This information is for educational purposes only. Please consult with a qualified healthcare provider for any medical concerns or before making any health decisions.'`;

export async function sendMessageToGemini(message: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
        model: model,
        contents: message,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.5,
          topP: 0.95,
          topK: 64,
        }
    });

    const text = response.text;
    if (!text) {
        throw new Error("Received an empty response from the API.");
    }
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
}
