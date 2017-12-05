import { NextFunction, Request, Response } from 'express';
import { UserInterface } from '../../interfaces/UserInterface';
import { userService } from '../../services';


export class UserController {

    constructor() {
    }

    public getAll = (req: Request, res: Response, next: NextFunction) => {
        console.log('UserController: getAll');
        userService.listAsync()
            .then((userList: UserInterface[]) => {
                res.locals.users = userList;
                next();
            })
            .catch((error) => {
                console.error(error);
                next(error);
            });

    }

    public get = (req: Request, res: Response, next: NextFunction) => {
        console.log('UserController: get');
        res.end('fetching 1 user with id=' + req.params.userId);
    }

    public endResponse = (req: Request, res: Response, next: NextFunction) => {
        const users: UserInterface[] = res.locals.users;
        console.log('end request');
        res.json(users);
        res.end();
    }

}
