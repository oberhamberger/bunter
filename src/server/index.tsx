import express from 'express';
import { renderToString } from 'react-dom/server';
import Index from './template/Index.html';

const defaultPort = 3030;
const port = process.env.PORT || defaultPort;
const clientPath = 'dist/client';
const app = express();

app.use(express.static(clientPath));
app.use((req, res) => {
    const markup = renderToString(
        <Index/>,
    );
    res.setHeader(
        'Content-Type',
        'text/html; charset=utf-8',
    );
    res.status(200);
    res.send(markup);
})

const server = app.listen(port, () => {
    console.info(
        `Server started at http://localhost:${port}`,
    );
});
const closeGracefully = async () => {
    await server.close();
    console.info(`Server closed.`);
    process.exit();
};
process.on('SIGTERM', closeGracefully);
process.on('SIGINT', closeGracefully);

