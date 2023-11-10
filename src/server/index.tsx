import express from 'express';
import { renderToString } from 'react-dom/server';
import Index from './template/Index.html';

export default () => {
    const app = express();

    app.use(express.static('dist'));
    app.get('/', (req, res) => {
        const markup = renderToString(<Index />);
        console.info(`Rendered App for ${req.url}`);

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.status(200);
        res.send(markup);
    });
    app.use((req, res) => {
        console.error(`Didn't find anything for: ${req.url}`);
        res.status(404);
        res.send(`Didn't find anything for you here`);
    });

    const server = app.listen(3030, () => console.info(`Server started at http://localhost:3030`));

    const closeGracefully = async () => {
        await server.close();
        console.info(`Server closed.`);
        process.exit();
    };
    process.on('SIGTERM', closeGracefully);
    process.on('SIGINT', closeGracefully);
    
    return;
};