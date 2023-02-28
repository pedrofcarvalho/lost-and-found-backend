import { FastifyRequest, FastifyReply } from "fastify"
import { UserType } from "../schemas/user.js";

const userHandlers = {
    loginHandler: async (request: FastifyRequest<{ Body: UserType, Reply: UserType }>, reply: FastifyReply) => {
        const { username, password } = request.body;
        return reply.send(request.body);
    },
};

export default userHandlers;
