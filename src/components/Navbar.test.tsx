import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders navigation items correctly", () => {
    // Render the Navbar component
    render(<Navbar />);

    // Test if Home and Favorite List links are present
    const homeLink = screen.getByText("Home");
    const favoriteListLink = screen.getByText("Favorite List");

    expect(homeLink).toBeInTheDocument();
    expect(favoriteListLink).toBeInTheDocument();
  });
});
