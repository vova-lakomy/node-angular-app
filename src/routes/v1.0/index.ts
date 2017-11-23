import { NextFunction, Response, Request } from 'express';


const handler1 = (req: Request, res: Response, next: NextFunction) => {
    console.log('handler 1');
    res.end('handler_1');
};

const handler2 = (req: Request, res: Response, next: NextFunction) => {
    console.log('handler 2');
    res.end('handler_2');
};


export const routes = [
    {
        path : '/api/list',
        method : 'GET',
        middleware : [handler1],
    },
    {
        path : '/api/login',
        method : 'GET',
        middleware : [handler2],
    },
];

