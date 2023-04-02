import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import fastify, { FastifyServerOptions } from "fastify";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { UserRoutes } from "./routes/user.js";
import {} from "./plugins/s3.js"
import documentation from "./plugins/documentation.js";

const buildApp = async (opts: FastifyServerOptions) => {
    const app = fastify({
        logger: opts.logger,
    }).withTypeProvider<TypeBoxTypeProvider>();

    await app.register(documentation);

    app.register(UserRoutes, { prefix: "/user" });

    app.route({
        method: "GET",
        url: "/health",
        handler: (request, reply) => {
            return "Ok!"
        }
    });

    return app;
};

export default buildApp;
