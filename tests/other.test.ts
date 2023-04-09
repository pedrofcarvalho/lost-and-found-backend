import { describe, expect } from "@jest/globals";

const subtract = (a: number, b: number): number => {
    return a - b;
};

describe("test add function", () => {
    it("should return 5 for add(10,5)", () => {
        expect(subtract(10, 5)).toBe(5);
    });
});
