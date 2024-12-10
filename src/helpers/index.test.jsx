import { render, screen } from "../../test-utils";
import { describe, expect, it } from "vitest";
import toMoneyFormat from "./toMoneyFormat";

describe("Formatting prices and costs", () => {
  it("Prices with two decimal points remain the same", () => {
    const price = 69.69;
    expect(toMoneyFormat(price)).toBe(69.69);
  });
});
