import { type FastifyRequest, type FastifyReply, type FastifyInstance } from "fastify";
import { type DBFillType } from "../schemas/dbFill.schema.js";
import { readFileSync } from "fs";

const dbFillHandlers = {
    createTables: async function (
        this: FastifyInstance,
        request: FastifyRequest<{ Body: DBFillType }>,
        reply: FastifyReply
    ) {
        // try {

        const createdArray = [];

        // employee table
        let filePath = "src\\files\\db\\employees.sql";
        let queryContent = readFileSync(filePath).toString();
        await this.pg.query(queryContent);
        createdArray.push(filePath.substring(filePath.lastIndexOf("\\") + 1)); // add file name that was created

        // items table
        filePath = "src\\files\\db\\items.sql";
        queryContent = readFileSync(filePath).toString();
        await this.pg.query(queryContent);
        createdArray.push(filePath.substring(filePath.lastIndexOf("\\") + 1)); // add file name that was created

        // // locations table
        filePath = "src\\files\\db\\locations.sql";
        queryContent = readFileSync(filePath).toString();
        await this.pg.query(queryContent);
        createdArray.push(filePath.substring(filePath.lastIndexOf("\\") + 1)); // add file name that was created

        // } catch (ex: unknown) {
        //     console.error(ex);
        //     return { error: ex };
        // }

        return { created: createdArray };
    },

    insertData: async function (
        this: FastifyInstance,
        request: FastifyRequest<{ Body: DBFillType }>,
        reply: FastifyReply
    ) {
        const createdArray = [];

        // employee data
        let filePath = "src\\files\\db\\employees_data.sql";
        let queryContent = readFileSync(filePath).toString();
        await this.pg.query(queryContent);
        createdArray.push(filePath.substring(filePath.lastIndexOf("\\") + 1)); // add file name that was created

        // items data
        filePath = "src\\files\\db\\items_data.sql";
        queryContent = readFileSync(filePath).toString();
        await this.pg.query(queryContent);
        createdArray.push(filePath.substring(filePath.lastIndexOf("\\") + 1)); // add file name that was created

        // locations data
        filePath = "src\\files\\db\\locations_data.sql";
        queryContent = readFileSync(filePath).toString();
        await this.pg.query(queryContent);
        createdArray.push(filePath.substring(filePath.lastIndexOf("\\") + 1)); // add file name that was created

        return { created: createdArray };
    },
};

export default dbFillHandlers;
