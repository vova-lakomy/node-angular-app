import { Server } from './server';

const app =  new Server().bootstrap().app;
app.listen('3000', () => {
    console.log('listening on 3000');
});
