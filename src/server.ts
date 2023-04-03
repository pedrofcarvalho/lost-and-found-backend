import buildApp from "./app.js";

const appOptions = {
    logger: true,
};

const server = await buildApp(appOptions);

// same return type as from app.ts
const startServer = async (): Promise<void> => {
    try {
        await server.listen({ port: 3000, host: "localhost" });
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

await startServer();
