import { render, screen } from "../test-utils";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App component", () => {
  it("Renders correct heading", () => {
    render(<App />);
  });
});
