import fastify from "fastify";

const buildApp = async (opts: {}) => {
    const app = fastify({
        logger: true,
    });

    app.route({
        method: "GET",
        url: "/",
        handler: async (request, reply) => {
            return { hello: "world" };
        }
    });


    return app;
}

export default buildApp;




