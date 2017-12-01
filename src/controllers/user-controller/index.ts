import { NextFunction, Response, Request } from 'express';
import { User } from '../../models';

export class UserController {

    constructor() {
    }

    public getAll = (req: Request, res: Response, next: NextFunction) => {
        console.log('UserController: getAll');
        User.find({}, (err, docs) => {
            res.send(docs);
            res.end();
        });
        // res.end('fetching all users');
    }

    public get = (req: Request, res: Response, next: NextFunction) => {
        console.log('UserController: get');
        res.end('fetching 1 user with id=' + req.params.userId);
    }

}
