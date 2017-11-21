import { routes } from './v1.0';

export const routesMap =  (app : any) => {
    routes.forEach(({ method, path, middleware }) => {
        app[method.toLowerCase()](path, ...middleware);
    });
};
