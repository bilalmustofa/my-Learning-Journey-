import dbConfig from "../../../../db/db.config.js";

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

        return historyRows;
        
    } catch (error) {
        throw error;
    }
}