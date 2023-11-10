import Server from './src/server';

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
    Server();
}
