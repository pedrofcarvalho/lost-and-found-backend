import fastifyPlugin from "fastify-plugin";
import { FastifyPluginOptions } from "fastify";
import { GetObjectCommand, PutObjectCommand, S3Client, S3ClientConfig } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

declare module 'fastify' {
    interface FastifyInstance {
        s3SignedUrl: {
            get: (key: string) => Promise<string>,
            put: (key: string) => Promise<string>
        }
    }
};

export interface s3SignedUrlPluginOptions extends FastifyPluginOptions {
    keyPrefix: string, 
    region: string,
    bucket: string,
    expiresIn: number
    credentials: {
        accessKeyId: string,
        secretAccessKey: string
    }
};

export const s3SignedUrlPlugin = fastifyPlugin<s3SignedUrlPluginOptions>(async (fastify, opts) => {
    const {keyPrefix, region, bucket, expiresIn, credentials} = opts;

    const client = new S3Client({
        region,
        credentials: credentials
    });

    const signedGetUrl = (key: string) => {
        const command = new PutObjectCommand({Bucket: bucket, Key: keyPrefix + key});
        return getSignedUrl(client, command, {expiresIn});
    }

    const signedPutUrl = (key: string) => {
        const command = new GetObjectCommand({Bucket: bucket, Key: keyPrefix + key})
        return getSignedUrl(client, command, {expiresIn});
    }
       

    fastify.decorate('s3SignedUrl', {
        get: signedGetUrl,
        put: signedPutUrl
    });

});









