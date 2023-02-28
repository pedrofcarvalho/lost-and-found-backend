import { FastifyPluginAsync } from "fastify";
import userHandlers from "../handlers/user.js";
import { UserType, User } from "../schemas/user.js";

export const UserRoutes: FastifyPluginAsync = async (fastify, opts) => {
    fastify.route<{ Body: UserType; Reply: UserType }>({
        method: "POST",
        url: "/user",
        schema: {
            body: User,
        },
        handler: userHandlers.loginHandler,
    });
};
