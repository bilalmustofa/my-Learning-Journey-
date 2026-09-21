import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY =  process.env.GEMINI_API_KEY;
const GEMINI_EMBEDDING_MODEL = process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';

if(!GEMINI_API_KEY){
    throw new Error('GEMINI_API_KEY environment variable is required')
}

// initialize the gemini AI
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function generateEmbedding(){
    const text = 'Aselamu Alykum This is test for generative embedding.'

    try {

        const result = await ai.models.embedContent({
            model: GEMINI_EMBEDDING_MODEL,
            contents: text,
            config: {
                outputDimensionality: 64
            }
        })
        console.log(result.embeddings[0].values.slice(0, 5))
        
    } catch (error) {
        console.error(error)
    }
}

generateEmbedding();