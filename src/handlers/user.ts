import { FastifyRequest, FastifyReply } from "fastify";
import { FastifyReplyType, FastifyRequestType } from "fastify/types/type-provider.js";
import { UserType } from "../schemas/user.js";

const userHandlers = {
    loginHandler: async (request: FastifyRequest<{ Body: UserType }>, reply: FastifyReply) => {
        const { username, password } = request.body;
        return reply.send(request);
    },
};

export default userHandlers;
