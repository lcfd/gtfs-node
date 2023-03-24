import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import { file_route } from "./routes/file_route";

export const APP_ROOT = process.env.PWD || __dirname;

const server: FastifyInstance = Fastify({
  logger: true,
});

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          pong: {
            type: "string",
          },
        },
      },
    },
  },
};

server.get("/gtfs/:filename/:id", file_route);
server.get("/gtfs/:filename", file_route);

const start = async () => {
  try {
    await server.listen({ port: 3000 });

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
