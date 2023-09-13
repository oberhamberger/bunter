const serverResult = await Bun.build({
    entrypoints: ['./src/server/index.tsx'],
    outdir: './dist/server',
    target: 'bun',
    sourcemap: 'external',
    external: ['react']
});

const clientResult = await Bun.build({
    entrypoints: ['./src/client/index.tsx'],
    outdir: './dist/client',
    target: 'browser',
    sourcemap: 'none',
    minify: {
        whitespace: true,
        identifiers: true,
        syntax: true,
    },
});

if (!serverResult.success) {
    console.error('Build failed');
    for (const message of serverResult.logs) {
      console.error(message);
    }
} else {
    console.info('Server Build successful');
}

if (!clientResult.success) {
    console.error('Build failed');
    for (const message of clientResult.logs) {
      console.error(message);
    }
} else {
    console.info('Client Build successful');
}