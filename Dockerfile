FROM oven/bun
# source image info: https://hub.docker.com/r/oven/bun

USER bun
COPY --chown=bun:bun . /usr/app
WORKDIR /usr/app

RUN bun install

ENTRYPOINT ["bun", "."]