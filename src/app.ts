import fastify, { FastifyRequest, FastifyServerOptions } from "fastify";
import { FastifyRequestType } from "fastify/types/type-provider.js";

const buildApp = async (opts: FastifyServerOptions) => {
    const app = fastify({
        logger: opts.logger,
    });

    interface IBody {
        "hello": string
    }

    app.post<{ Body: IBody }>("/", async (request, reply) => {
        //console.log(request.server);
        console.log(request.body);

        reply.send({ hello: "world" });
    }
    );

    return app;
};

export default buildApp;
