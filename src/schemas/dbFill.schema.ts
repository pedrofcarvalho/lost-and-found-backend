import { type Static, Type } from "@sinclair/typebox";

export const DBFill = Type.Object({});

export const DBFillResponse = Type.Object({
    created: Type.Array(Type.String()),
});

export type DBFillType = Static<typeof DBFill>;
export type DBFillResponseType = Static<typeof DBFillResponse>;
