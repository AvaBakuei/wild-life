import { render, screen } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";

describe("FavoriteButton", () => {
  it("renders the heart icon", () => {
    render(
      <FavoriteButton remove={() => {}} add={() => {}} isFavorite={false} />
    );
    const heartIcon = screen.getByTestId("heart-icon");
    expect(heartIcon).toBeInTheDocument();
  });
});
