import express from 'express';
import { renderToString } from 'react-dom/server';
import Index from './src/server/template/Index.html';

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
    app.use(express.static('dist'));
    app.use((req, res) => {
        const markup = renderToString(<Index />);
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.status(200);
        res.send(markup);
    });

    const server = app.listen(3030, () => console.info(`Server started at http://localhost:3030`));
    const closeGracefully = async () => {
        await server.close();
        console.info(`Server closed.`);
        process.exit();
    };
    process.on('SIGTERM', closeGracefully);
    process.on('SIGINT', closeGracefully);
}
