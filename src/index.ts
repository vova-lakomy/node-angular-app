import * as server from './server';

const app = server.Server.bootstrap().app;
app.listen('3000', () => {
    console.log('listening on 3000');
});
