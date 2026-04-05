import { GoogleGenAI } from "@google/genai";

export async function generateShirishLogo() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: "A professional and vibrant logo for 'SHIRISH'. The logo features the letters 'SR' intertwined in a modern, clean style. The letter 'S' is a vibrant green and the letter 'R' is a professional blue. The 'SR' mark is placed inside a rounded rectangular box with a clean, white background. To the right of the logo mark, the text 'SHIRISH' is written in a bold, modern, sans-serif font. The overall design is sleek, high-quality, and suitable for a corporate website header.",
        },
      ],
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
