import { type Static, Type } from "@sinclair/typebox";

export const User = Type.Object({
    username: Type.String(),
    password: Type.String(),
});

export type UserType = Static<typeof User>;
