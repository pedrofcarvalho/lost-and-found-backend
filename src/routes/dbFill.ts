import { type FastifyPluginAsync } from "fastify";
import dbFillHandlers from "../handlers/dbFilll.handler.js";
import {
    DBFill,
    DBFillResponse,
    type DBFillType,
    type DBFillResponseType,
} from "../schemas/dbFill.schema.js";

export const DBFillRoutes: FastifyPluginAsync = async (fastify, opts) => {
    fastify.route<{ Body: DBFillType; Reply: DBFillResponseType }>({
        url: "/createTables",
        method: "POST",
        schema: {
            tags: ["DB Dummy Data Fill"],
            body: DBFill,
            response: {
                200: DBFillResponse,
            },
        },
        handler: dbFillHandlers.createTables,
    });

    fastify.route<{ Body: DBFillType; Reply: DBFillResponseType }>({
        url: "/insertData",
        method: "POST",
        schema: {
            tags: ["DB Dummy Data Fill"],
            body: DBFill,
            response: {
                200: DBFillResponse,
            },
        },
        handler: dbFillHandlers.insertData,
    });
};
