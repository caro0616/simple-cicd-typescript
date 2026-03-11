import "./sum.js";

declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
    sum: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
  }
}

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(window.multiply(4, 3)).toBe(12);
  });

  it("multiplies negative numbers", () => {
    expect(window.multiply(-4, 3)).toBe(-12);
  });

  it("multiplies with zero", () => {
    expect(window.multiply(4, 0)).toBe(0);
  });
});

describe("sum", () => {
  it("adds two positive numbers", () => {
    expect(window.sum(2, 3)).toBe(5);
  });

  it("returns 0 when both numbers are 0", () => {
    expect(window.sum(0, 0)).toBe(0);
  });

  it("adds negative and positive numbers", () => {
    expect(window.sum(-1, 1)).toBe(0);
  });
});

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("returns 0 when numerator is 0", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("divides negative numbers", () => {
    expect(window.divide(-10, 2)).toBe(-5);
  });

  it("throws error when dividing by zero", () => {
    expect(() => window.divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});

describe("subtract", () => {
  it("subtracts two positive numbers", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  it("subtracts negative numbers", () => {
    expect(window.subtract(-5, -3)).toBe(-2);
  });

  it("subtracts with zero", () => {
    expect(window.subtract(5, 0)).toBe(5);
  });
});

export {};