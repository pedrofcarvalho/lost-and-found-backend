import { FastifyRequest, FastifyReply } from "fastify"

const userHandlers = {
    loginHandler: async (request: FastifyRequestType, reply: FastifyReplyType) => {
        const { username, password } = request.body;
        return reply.send(request);





    },


};

export default userHandlers;
