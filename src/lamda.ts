import awsLambdaFastify from '@fastify/aws-lambda';
import { FastifyInstance, FastifyServerOptions } from 'fastify';
import buildApp from './app.js';

const options: FastifyServerOptions = {
    logger: true
}

const app: FastifyInstance = await buildApp(options);

export const handler = awsLambdaFastify(app);
await app.ready();