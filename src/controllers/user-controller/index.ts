import { NextFunction, Response, Request } from 'express';

export class UserController {

    constructor() {
    }

    public getAll = (req: Request, res: Response, next: NextFunction) => {
        console.log('UserController: getAll');
        res.end('fetching all users');
    }

    public get = (req: Request, res: Response, next: NextFunction) => {
        console.log('UserController: get');
        res.end('fetching 1 user with id=' + req.params.userId);
    }

}
