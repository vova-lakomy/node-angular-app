import { routes } from './v1.0';
import { Application } from  'express';

export const routesMap =  (app : any) => {
    routes.forEach((route) => {
        app[route.method.toLowerCase()](route.path, route.middleware);
        // const args = [route.path].concat(route.middleware);
        // switch (route.method.toUpperCase()) {
        //     case 'GET':
        //         app.get.apply(app.args);
        //         break;
        //     case 'POST':
        //         app.post.apply(app.args);
        //         break;
        //     case 'PUT':
        //         app.put.apply(app.args);
        //         break;
        //     case 'DELETE':
        //         app.delete.apply(app.args);
        //         break;
        //     default:
        //         throw new Error('Invalid HTTP method specified for route ' + route.path);
        // }
    });
};
