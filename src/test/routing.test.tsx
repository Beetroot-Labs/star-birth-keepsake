import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { getRouterBasename } from "@/App";
import NotFound from "@/pages/NotFound";

describe("routing configuration", () => {
  it("normalizes GitHub Pages base paths for BrowserRouter basename", () => {
    expect(getRouterBasename("/star-birth-keepsake/")).toBe("/star-birth-keepsake");
    expect(getRouterBasename("/star-birth-keepsake")).toBe("/star-birth-keepsake");
    expect(getRouterBasename("/")).toBe("/");
  });

  it("uses react-router Link for the not found home navigation", () => {
    render(
      <MemoryRouter initialEntries={["/missing"]}>
        <NotFound />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: "Return to Home" })).toHaveAttribute("href", "/");
  });
});
