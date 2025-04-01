import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("App renders", () => {
    render(<App />);
    expect(screen.getByText("New game")).toBeDefined();
  });
});
