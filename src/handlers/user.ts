import { type FastifyRequest, type FastifyReply, type FastifyInstance } from "fastify";
import { type UserType } from "../schemas/user.schema.js";

const userHandlers = {
    loginHandler: async function (
        this: FastifyInstance,
        request: FastifyRequest<{ Body: UserType }>,
        reply: FastifyReply
    ) {
        const { username, password } = request.body;

        return { username, password };
    },
};

export default userHandlers;
