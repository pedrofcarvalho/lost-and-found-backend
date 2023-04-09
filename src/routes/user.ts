import { type FastifyPluginAsync } from "fastify";
import userHandlers from "../handlers/user.js";
import { type UserType, User } from "../schemas/user.schema.js";

export const UserRoutes: FastifyPluginAsync = async (fastify, opts) => {
    /*
    User corresponds to the JSON Schema
    User = {
        type: 'object',
        required: ['username', 'password']
        properties: {
            username: { type: 'string' },
            password: { type: 'string' }
        }
    }
    UserType is a type implementation
    type UserType = {
        username: string
        password: string
    }  
    */
    fastify.route<{ Body: UserType; Reply: UserType }>({
        url: "/",
        method: "POST",
        schema: {
            tags: ["user"],
            body: User,
            response: {
                200: User,
            },
        },
        handler: userHandlers.loginHandler,
    });
};
