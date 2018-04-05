import { NextFunction, Request, Response } from 'express';
import * as path from 'path';


export class AssetsController {

    constructor() {
        console.log('AssetsController constructor');
    }

    public index = (req: Request, res: Response, next: NextFunction) => {
        console.log('AssetsController: sending root page');
        res.sendFile(path.join(__dirname + '/../../web_app/index.html'));
    }

    public get = (req: Request, res: Response, next: NextFunction) => {
        const url = req.url.substr(1);
        const filename = path.join(__dirname + '/../../web_app/' + url);
        console.log('AssetsController: querying ' + filename);
        res.sendFile(filename, (error: Error) => {
            if (error) {
                console.error(error.message);
                res.status(404).end();
            }
        });
    }

}
