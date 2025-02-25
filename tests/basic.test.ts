import { describe, expect } from "@jest/globals";

const add = (a: number, b: number): number => {
    return a + b;
};

describe("test add function", () => {
    it("should return 15 for add(10,5)", () => {
        expect(add(10, 5)).toBe(15);
    });

    it("should return 5 for add(2,3)", () => {
        expect(add(2, 3)).toBe(5);
    });

    it("should return 4 for add(1,3)", () => {
        expect(add(1, 3)).toBe(4);
    });
});

describe("test add function (again)", () => {
    it("should return 15 for add(10,5)", () => {
        expect(add(10, 5)).toBe(15);
    });
});
