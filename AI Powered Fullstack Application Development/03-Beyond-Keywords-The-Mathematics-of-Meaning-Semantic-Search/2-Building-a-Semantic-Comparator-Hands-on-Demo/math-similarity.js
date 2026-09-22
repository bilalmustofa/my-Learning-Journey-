import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_EMBEDDING_MODEL = process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';

if(!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required')
}

// initialize the gemini AI
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const vec1 = [1, 2];
const vec2 = [2, 4];

//cosign similarity 

function cosignSimilarity(vec1, vec2){
    
    // validation for vector length
    if(vec1.length !== vec2.length){
        throw new Error('vectors must have same length')
    }

    // // Dot product 
    // let dotProduct = 0;
    // for(let i = 0; i < vec1.length; i++){
    //     dotProduct += vec1[i] * vec2[i];
    // }
    // // console.log(dotProduct)

    // // Magnitude for vectors
    // let magnitudeVec1 = 0;
    // let magnitudeVec2 = 0;

    // // magnitude Vec1
    // for(let i = 0; i < vec1.length; i++) {
    //     magnitudeVec1 += vec1[i] * vec1[i];
    // }
    // // Square root 
    // magnitudeVec1 = Math.sqrt(magnitudeVec1)
    // // console.log(magnitudeVec1);

    // // magnitude Vec2
    // for(let i = 0; i < vec2.length; i++) {
    //     magnitudeVec2 += vec2[i] * vec2[i];
    // }
    // // Square root
    // magnitudeVec2 = Math.sqrt(magnitudeVec2)
    // // console.log(magnitudeVec2);




    // Dot product 
    let dotProduct = 0;

    // Magnitude for vectors
    let magnitudeVec1 = 0;
    let magnitudeVec2 = 0;

    for(let i = 0; i < vec1.length; i++){
        dotProduct += vec1[i] * vec2[i];
        magnitudeVec1 += vec1[i] * vec1[i];
        magnitudeVec2 += vec2[i] * vec2[i];
    }

    // // Square root
    magnitudeVec1 = Math.sqrt(magnitudeVec1)
    magnitudeVec2 = Math.sqrt(magnitudeVec2)

    // console.log(dotProduct, magnitudeVec1, magnitudeVec2)

    // formula = (A . B ) / ( ||A|| * ||B|| ) 

    return dotProduct / (magnitudeVec1 * magnitudeVec2)

}
// let result = cosignSimilarity(vec1, vec2);
// console.log(result)

async function compareText() {

    const text1 = 'my name is bilal'
    const text2 = 'i want to build mosque by name of my mom'
    const text3 = 'Addis ababa is the capital city of ethiopia'

    // generate Embedding

    const result1 = await ai.models.embedContent({
        model: GEMINI_EMBEDDING_MODEL,
        contents: text1,
        config: {
            taskType: 'SEMANTIC_SIMILARITY'
        }
    })
    const result2 = await ai.models.embedContent({
        model: GEMINI_EMBEDDING_MODEL,
        contents: text2,
        config: {
            taskType: 'SEMANTIC_SIMILARITY'
        }
    })
    const result3 = await ai.models.embedContent({
        model: GEMINI_EMBEDDING_MODEL,
        contents: text3,
        config: {
            taskType: 'SEMANTIC_SIMILARITY'
        }
    })

    const v1 = result1.embeddings[0].values;
    const v2 = result2.embeddings[0].values;
    const v3 = result3.embeddings[0].values;

    const V1AndV2 = cosignSimilarity(v1, v2);
    console.log("V1AndV2 Similarity", V1AndV2);

    const V1AndV3 = cosignSimilarity(v1, v3);
    console.log("V1AndV3 Similarity", V1AndV3);

    const V2AndV3 = cosignSimilarity(v2, v3);
    console.log("V2AndV3 Similarity", V2AndV3);
}
compareText()