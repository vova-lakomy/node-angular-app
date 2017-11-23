import { Server } from './server';
import { bindRoutes } from './routes/routes';

const app =  new Server().bootstrap().app;
bindRoutes(app);
app.listen('3000', () => {
    console.log('listening on 3000');
});
