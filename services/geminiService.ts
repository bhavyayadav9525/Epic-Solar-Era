
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSolarAnalysis = async (monthlyBill: number, roofArea: number, location: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a detailed solar energy analysis for a property in ${location} with a monthly electricity bill of $${monthlyBill} and a roof area of ${roofArea} sq ft. Provide potential monthly savings, estimated number of panels needed, carbon footprint reduction, and a professional recommendation.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedSavings: { type: Type.NUMBER },
            panelCount: { type: Type.INTEGER },
            co2Reduction: { type: Type.NUMBER, description: "CO2 reduction in tons per year" },
            paybackYears: { type: Type.NUMBER },
            recommendation: { type: Type.STRING }
          },
          required: ["estimatedSavings", "panelCount", "co2Reduction", "paybackYears", "recommendation"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    // Return fallback logic
    return {
      estimatedSavings: monthlyBill * 0.8,
      panelCount: Math.ceil(monthlyBill / 10),
      co2Reduction: 2.5,
      paybackYears: 6.5,
      recommendation: "Switching to solar could significantly reduce your carbon footprint and energy costs. We recommend a high-efficiency monofacial panel setup for your roof size."
    };
  }
};
