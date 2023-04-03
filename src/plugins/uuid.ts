import { v4 as generateUuid, validate as validateUuid } from "uuid";
import fastifyPlugin from "fastify-plugin";

declare module "fastify" {
    interface FasitfyInstance {
        uuid: {
            generate: () => string;
            validate: (uuid: string) => boolean;
        };
    }

    interface FastifyRequest {
        uuidGenerate: () => string;
        uuidValidate: (uuid: string) => boolean;
    }
}

const uuidPlugin = fastifyPlugin(function (fasitfy, opts) {
    const generate = (): string => {
        return generateUuid();
    };

    const validate = (uuid: string): boolean => {
        return validateUuid(uuid);
    };

    fasitfy
        .decorate("uuid", { generate, validate })
        .decorateRequest("uuidGenerate", generate)
        .decorateRequest("uuidvalidate", validate);
});

export { uuidPlugin };
