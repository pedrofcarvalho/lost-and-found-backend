/**
 * Plugin that wraps registering swagger and swaggerUI plugins to
 * the application, along with their corresponding settings.
 */

import fastifyPlugin from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui"

export default fastifyPlugin(async (app) => {
    /**
     * Registers fastify-swagger to the FastifyInstance, which dynamically generates an
     * OpenAPIv3 schema of the TypeBox route schemas
     * 
     * Documentation: https://github.com/fastify/fastify-swagger
     */
    await app.register(swagger, {
        openapi: {
            info: {
                title: "UCF Lost and Found API",
                description: "The best API documentation known to man",
                version: "0.0.1"
            },
            tags: [
                { name: "user", description: "user related endpoints" },
            ] 
        }});

    /**
     * Registes fastify-swagger-ui to the FastifyInstance, which creates an endpoint
     * which serves the generated OpenAPIv3 schema to be viewed at a given route
     * prefix (/documentaion in this case)
     * 
     * Documentation: https://github.com/fastify/fastify-swagger-ui
     */

    await app.register(swaggerUi, {
        routePrefix: '/documentation',
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false
        },
        uiHooks: {
            onRequest: function (request, reply, next) { next() },
            preHandler: function (request, reply, next) { next() }
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
        transformSpecificationClone: true
    });
});