import { NextFunction, Request, Response } from 'express';
import { UserInterface } from '../../interfaces/UserInterface';
import { userService } from '../../services';
import { User } from '../../interfaces/impl/User';


export class UserController {

    constructor() {
        console.log('UserController constructor');
    }

    public list = (req: Request, res: Response, next: NextFunction) => {
        const offset: number = Number(req.query['offset'] || 0);
        const count: number = Number(req.query['count'] || 10);
        userService.list(offset, count)
            .then((userList: UserInterface[]) => {
                res.json(User.fromList(userList));
                res.end();
            })
            .catch((error) => {
                console.error(error);
                next(error);
            });

    }

    public get = (req: Request, res: Response, next: NextFunction) => {
        console.log('UserController: get ');
        const id = req.params['userId'];
        userService.get(id).then((user: UserInterface) => {
            res.json(User.fromUser(user));
            res.end();
        }).catch((error) => {
            console.error(error);
            next(error);
        });
    }

    public save = (req: Request, res: Response, next: NextFunction) => {
        console.log('UserController: save ');
        const { email, password, role, ownerId } = req.body;
        const user: UserInterface = {
            email,
            password,
            role,
            ownerId,
        };
        userService.save(user)
            .then((result) => {
                res.send(result._id);
                res.end('saved...');
            })
            .catch((error) => {
                res.end(error);
            });
    }

    public update = (req: Request, res: Response, next: NextFunction) => {
        console.log('UserController: update ');
        const { id, email, password, role, ownerId } = req.body;
        const user: UserInterface = {
            id,
            email,
            password,
            role,
            ownerId,
        };
        userService.update(user)
            .then((updatedUser: User) => {
                res.send(updatedUser);
                res.end();
            })
            .catch((error) => {
                res.end(error);
            });
    }

    public remove = (req: Request, res: Response, next: NextFunction) => {
        console.log('UserController: remove ');
        const { id } = req.body;
        userService.remove(id).then(() => {
            res.end('removed');
        }).catch((error) => {
            console.error(error);
            res.end('error');
        });
    }

}
