import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify"
import { UserType } from "../schemas/user.js";

const userHandlers = {
    loginHandler: async function(this: FastifyInstance, request: FastifyRequest<{ Body: UserType }>, reply: FastifyReply) {
        const { username, password } = request.body;
        request.body
        return request.body;
    },
};

export default userHandlers;
