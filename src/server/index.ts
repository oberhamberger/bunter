import express from 'express';

const defaultPort = 3030;
const port = process.env.PORT || defaultPort;
const staticPath = 'static';
const clientPath = 'dist/client';

const app = express();
app.use(express.static(staticPath));
app.use(express.static(clientPath));

const server = app.listen(port, () => {
    console.info(
        `Server started at http://localhost:${port}`,
    );
});

// stopping the server
const closeGracefully = async () => {
    await server.close();
    console.info(`Server closed.`);
    process.exit();
};
process.on('SIGTERM', closeGracefully);
process.on('SIGINT', closeGracefully);

