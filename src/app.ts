import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import fastify, { FastifyRequest, FastifyServerOptions } from "fastify";
import { FastifyRequestType } from "fastify/types/type-provider.js";
import { UserRoutes } from "./routes/user.js";

const buildApp = async (opts: FastifyServerOptions) => {
    const app = fastify({
        logger: opts.logger,
    }).withTypeProvider<TypeBoxTypeProvider>();

    app.register(UserRoutes, { prefix: "/user" });










    return app;
};

export default buildApp;
