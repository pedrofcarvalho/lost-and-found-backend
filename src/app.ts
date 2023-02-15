import fastify, { FastifyServerOptions } from "fastify";

const buildApp = async (opts: FastifyServerOptions) => {
    const app = fastify({
        logger: opts.logger,
    });

    app.route({
        method: "GET",
        url: "/",
        handler: async (request, reply) => {
            reply.send({ hello: "world" });
        },
    });

    return app;
};

export default buildApp;
