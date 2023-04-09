import { type EnvType, load } from "ts-dotenv";

export const envSchema = {
    NODE_ENV: String,
    DB_USER: String,
    DB_PASSWORD: String,
    DB_HOST: String,
    DB_PORT: Number,
    DB_NAME: String,
};

export type Env = EnvType<typeof envSchema>;

export let env: Env;

export const loadEnv = (): void => {
    env = load(envSchema);
};
