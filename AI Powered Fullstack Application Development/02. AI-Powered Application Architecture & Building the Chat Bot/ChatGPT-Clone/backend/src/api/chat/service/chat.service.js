
export async function createConservationService(question) {
    try {
        return `chat saved to db with question: ${question}`;
    } catch (error) {
        throw error;
    }
}