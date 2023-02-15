import fastify, { FastifyRequest, FastifyServerOptions } from "fastify";
import { FastifyRequestType } from "fastify/types/type-provider.js";

const buildApp = async (opts: FastifyServerOptions) => {
    const app = fastify({
        logger: opts.logger,
    });

    interface IBody {
        hello: string;
    }

    app.route<{ Body: IBody }>({
        method: "GET",
        url: "/",
        handler: async (request, reply) => {
            console.log(request.body);

            // const { hello } = request.body;

            reply.send({ hello: "wolrd" });
        },
    });

    return app;
};

export default buildApp;
