import Server from './src/server';

const result = await Bun.build({
    entrypoints: ['./src/client/index.tsx'],
    outdir: './dist',
    target: 'browser',
});

if (result.success) {
    console.info('Client Build successful');
    Server();
}
