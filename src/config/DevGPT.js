import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const MODEL_NAME = 'gemini-1.5-flash';
const API_KEY = 'AIzaSyAw1Q0NT8Wy_Z2_YBd7U92ByL_W_uaz_hY'

async function run(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });



  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return response.text();
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

export default run;