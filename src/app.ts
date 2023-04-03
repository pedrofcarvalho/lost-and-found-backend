import { type TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import fastify, {
    type FastifyBaseLogger,
    type FastifyServerOptions,
    type FastifyInstance,
    type RawServerDefault,
} from "fastify";
import { UserRoutes } from "./routes/user.js";
import documentation from "./plugins/documentation.js";
import fastifyPostgres from "@fastify/postgres";
import { type IncomingMessage, type ServerResponse } from "http";

const buildApp = async (
    opts: FastifyServerOptions
): Promise<
    FastifyInstance<
        RawServerDefault,
        IncomingMessage,
        ServerResponse<IncomingMessage>,
        FastifyBaseLogger,
        TypeBoxTypeProvider
    >
> => {
    const app = fastify({
        logger: opts.logger,
    }).withTypeProvider<TypeBoxTypeProvider>();

    await app.register(documentation);

    void app.register(UserRoutes, { prefix: "/user" });

    void app.register(fastifyPostgres, {
        connectionString: "postgres://postgres@localhost/postgres",
    });

    app.route({
        method: "GET",
        url: "/health",
        handler: (request, reply) => {
            return "Ok!";
        },
    });

    return app;
};

export default buildApp;
