import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as path from 'path';
import * as mongoose from 'mongoose';
import errorhandler = require('errorhandler');
import methodOverride = require('method-override');
import { bindRoutes } from './routes';

export class Server {

    private app: express.Application;
    public mongoDbUrl: string;

    constructor() {
        this.init();
    }

    private init(): void {
        this.app = express();
        this.app.use(bodyParser.json());
        bindRoutes(this.app);


        (<any>mongoose).Promise = global.Promise;

        this.mongoDbUrl = 'mongodb://localhost:27017/clean-master';


        mongoose.connection.on('error', (error) => {
            console.error(error);
            throw new Error('no DB connection');
        });

        mongoose.connection.on('connected', () => {
            console.log('mongoDB connected');
        });

        mongoose.connection.on('disconnected', () => {
            console.log('mongoDB  disconnected!');
        });

        mongoose.connect(this.mongoDbUrl, { useMongoClient: true });
    }

    public start(): void {

        this.app.listen('3000', () => {
            console.log('listening on 3000');
        });
    }
}
