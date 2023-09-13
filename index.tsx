import express from 'express';
import { renderToString } from 'react-dom/server';
import Index from './src/server/template/Index.html';

const defaultPort = 3030;
const port = process.env.PORT || defaultPort;
const clientPath = 'dist';

const result = await Bun.build({
    entrypoints: ['./src/client/index.tsx'],
    outdir: './dist',
    target: 'browser',
    sourcemap: 'none',
    minify: {
        whitespace: true,
        identifiers: true,
        syntax: true,
    },
});

if (!result.success) {
    console.error('Build failed');
    for (const message of result.logs) {
      console.error(message);
    }
} else {
    console.info('Client Build successful');
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
}