import dbConfig from "../../../../db/db.config.js";
import { GoogleGenAI } from '@google/genai';

// get recent conversation row from db
const getRecentConversationRows = async (limit = 5) => {
    const normalizedLimit = Number.parseInt(limit, 10);
    const safeLimit = Number.isNaN(normalizedLimit) || normalizedLimit <= 0 ? 20 : normalizedLimit;

    const [rows] = await dbConfig.execute(
        `SELECT id, role, content, created_at
        FROM conversations
        ORDER BY id DESC
        LIMIT ${safeLimit}`
    );
    return rows.reverse();
}

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.6-flash";
const geminiClient = new GoogleGenAI({ apiKey:process.env.GEMINI_API_KEY });

const generateAssistantAnswer = async({historyRows, question})=>{

  const formattedHistory = historyRows.map(row=>({
    role: row.role === 'assistant' ? 'model'  :'user',
    parts: [{ text:row.content }]
  }));

  const chat = geminiClient.chats.create({
    model : GEMINI_MODEL,
    config: {
            maxOutputTokens: 1024,
        },
    history : formattedHistory
  });

  const result = await chat.sendMessage({
    message: question,
  });

   return {
    text: result.text,
    totalTokens: result.usageMetadata.totalTokenCount
   }
}

const getMessageById = async (messageId) => {
    const [rows] = await dbConfig.execute(
        'SELECT id, role, content, token_content, created_at FROM conversations WHERE id = ? LIMIT 1',
        [messageId],
    )
    if (!rows[0]) return null;
    return {
        id: rows[0].id,
        role: rows[0].role,
        content: rows[0].content,
        tokenCount: Number(rows[0].token_content || 0),
        createdAt: rows[0].created_at,
    }
}

export async function createConservationService(question) {
    try {

        // Validation
        if(!question.trim()){
            const error = new Error(' Question is required');
            error.status = 400;
            throw error;
        }

        // get recent conversations
        const historyRows = await getRecentConversationRows(5)
        
         // save to Database
        const query = `INSERT INTO conversations (content, role) VALUES (?, 'user')`
        const [result] = await dbConfig.query(query, [question])

        const { text, totalTokens } = await generateAssistantAnswer({ historyRows, question })
        const [createAssistantMessageResult] = await dbConfig.execute(
            'INSERT INTO conversations (role, content, token_content) VALUES (?, ?, ?)',
            ['assistant', text, totalTokens]
        )

        const userConversation = await getMessageById(result.insertId);
        const assistantConversation = await getMessageById(createAssistantMessageResult.insertId);

        return {
            userConversation,
            assistantConversation,
        }
        
    } catch (error) {
        throw error;
    }
}