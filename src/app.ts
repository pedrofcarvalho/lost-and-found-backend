import { type TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { UserRoutes } from "./routes/user.js";
import documentation from "./plugins/documentation.js";
import fastifyPostgres from "@fastify/postgres";
import fastify, { type FastifyInstance, type FastifyServerOptions } from "fastify";
import { env, loadEnv } from "./schemas/env.schema.js";
import { DBFillRoutes } from "./routes/dbFill.js";

const buildApp = async (opts: FastifyServerOptions): Promise<FastifyInstance> => {
    const app = fastify({
        logger: opts.logger,
    }).withTypeProvider<TypeBoxTypeProvider>();

    await app.register(documentation);
    void app.register(UserRoutes, { prefix: "/user" });
    void app.register(DBFillRoutes, { prefix: "/dbFill" });

    loadEnv();
    void app.register(fastifyPostgres, {
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        host: env.DB_HOST,
        port: env.DB_PORT,
        database: env.DB_NAME,
    });

    return app;
};

export default buildApp;
