import { Request, Response } from 'express';

export class ErrorHandler {

    constructor() {
    }
    
    public handleError (err :Error, req :Request, res :Response) {
        console.log('Handling error');
        res.status(500).json({ code: 500, message : 'Internal Server Error' });
    }
}
