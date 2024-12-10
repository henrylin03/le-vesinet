import { describe, expect, it } from "vitest";
import toMoneyFormat from "./toMoneyFormat";

describe("Formatting prices and costs", () => {
  it("Prices with two decimal points remain the same", () => {
    const price = 69.69;
    expect(toMoneyFormat(price)).toBe("$69.69");
  });

  it("Prices with more than two decimal points are rounded to two decimal points", () => {
    const price = 69.666969;
    expect(toMoneyFormat(price)).toBe("$69.67");
  });

  it("Prices with one decimal point has a zero added to the end", () => {
    const price = 69.9;
    expect(toMoneyFormat(price)).toBe("$69.90");
  });

  it("Prices that are whole numbers have two zeroes at the end", () => {
    const price = 69;
    expect(toMoneyFormat(price)).toBe("$69.00");
  });
});
