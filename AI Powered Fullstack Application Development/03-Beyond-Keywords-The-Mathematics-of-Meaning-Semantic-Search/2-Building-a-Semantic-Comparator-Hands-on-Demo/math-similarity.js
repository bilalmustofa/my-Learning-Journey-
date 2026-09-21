import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_EMBEDDING_MODEL = process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';

if(!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required')
}

const vec1 = [1, 2];
const vec2 = [2, 4];

//cosign similarity (formula = (A . B ) / ( ||A|| * ||B|| )

function cosignSimilarity(vec1, vec2){
    
    // validation for vector length
    if(vec1.length !== vec2.length){
        throw new Error('vectors must have same length')
    }

    // Dot product 
    let dotProduct = 0;
    for(let i = 0; i < vec1.length; i++){
        dotProduct += vec1[i] * vec2[i];
    }
    // console.log(dotProduct)
}

cosignSimilarity(vec1, vec2);