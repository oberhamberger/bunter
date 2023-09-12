const serverResult = await Bun.build({
    entrypoints: ['./src/server/index.ts'],
    outdir: './dist/server',
    target: 'bun',
    sourcemap: 'external'
});

const clientResult = await Bun.build({
    entrypoints: ['./src/client/index.tsx'],
    outdir: './dist/client',
    target: 'browser',
    sourcemap: 'none'
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