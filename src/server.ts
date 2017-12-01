import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';
import errorhandler = require('errorhandler');
import methodOverride = require('method-override');
import { userSchema } from './schemas/userSchema';
import { UserModelInterface } from './interfaces/mixin/UserModelInterface';
import { bindRoutes } from './routes';
import { UserInterface } from './interfaces/UserInterface';
import { User } from './models';

// import {UserModelInterface} from "./interfaces/UserModelInterface";

export class Server {

    private app: express.Application;

    constructor() {
        this.init();
        this.config();
        this.routes();
    }

    private init() {
        this.app = express();
    }

    private config() {
        const mongoDbUrl: string = 'mongodb://localhost:27017/cleanmaster';
        mongoose.connect(mongoDbUrl, { useMongoClient: true });

        // const userObj: UserInterface = {
        //     email: 'foo@bar.com',
        //     firstName: 'Johny',
        //     lastName: 'Doe',
        // };
        // new User(userObj).save();
    }

    private routes() {
        bindRoutes(this.app);
    }

    public start() {
        this.app.listen('3000', () => {
            console.log('listening on 3000');
        });
    }
}
