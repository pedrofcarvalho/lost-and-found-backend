import buildApp from "./app.js";

const server = await buildApp({
    logger: true,
});

const startServer = async () => {
    try {
        await server.listen({ port: 3000, host: "localhost" });
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

startServer();
