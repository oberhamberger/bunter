const result = await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './dist'
});

if (!result.success) {
    console.error('Build failed');
    for (const message of result.logs) {
      console.error(message);
    }
} else {
    console.info('Build successful');
}