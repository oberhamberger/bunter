# bunter

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Docker

build Docker-Container:

```
docker build --tag bun-docker .
```

run as Docker-Container:

```
docker run -d -p 3030:3030 bun-docker
```

