import { createConservationService } from '../service/chat.service.js'

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
        res.send('get conversation api')
    } catch (error) {
        throw error;
    }
   
}