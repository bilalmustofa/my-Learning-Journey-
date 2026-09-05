
export async function createConservationService(question) {
    try {

        // Validation
        if(!question.trim()){
            const error = new Error(' Question is required');
            error.status = 400;
            throw error;
        }

        return `chat saved to db with question: ${question}`;
    } catch (error) {
        throw error;
    }
}