
export const errorHandler = (err, req, res, next) => {
    console.error(err.message)
    return res.status(err.status || 500).json({
        status: false,
        message: err.message || 'Something want wrong try again later'
    })
}