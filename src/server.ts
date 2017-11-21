import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as path from 'path';
import errorhandler = require('errorhandler');
import methodOverride = require('method-override');

export class Server {

    private _app: express.Application;

    public bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this._app = express();
        this.config();
        this.routes();
        this.api();
    }

    public api() {
        // empty for now
    }

    public config() {
        // empty for now
    }

    public routes() {
        // empty for now
    }

    get app(): express.Application {
        return this._app;
    }
}
