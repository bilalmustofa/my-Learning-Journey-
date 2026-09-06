import { createConservationService, getRecentConversationRows } from '../service/chat.service.js'


// POST
export async function createConversationController(req, res) {
    try {

        const { question } = req.body;
        
        const result = await createConservationService(question);
        res.status(201).json({
            success: true,
            message: 'conversation posted successfully',
            data: result
        })

    } catch (error) {
        throw error;
    }
}

// GET
export async function getConversationController(req, res) {
    try {
        const result = await getRecentConversationRows(100);
        res.status(200).json({
            success: true,
            message: 'conversation fetched successfully.',
            data: result
        })
    } catch (error) {
        throw error;
    }
   
}