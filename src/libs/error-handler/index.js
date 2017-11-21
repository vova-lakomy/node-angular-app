class ErrorHandler {

    constructor() {
    }
    handleError (err, req, res) {
        console.log('Handling error');
        res.status(500).json({code: 500, message : 'Internal Server Error'})
    }
}

export default ErrorHandler