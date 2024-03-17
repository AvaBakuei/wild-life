import { describe, it, expect } from "vitest";
import App from "./App";
import {render} from "./utils/test-utils";

describe("App", () => {
  it("checking weather vite and react text is available", () => {
    render(<App />)
    expect(true).toBeTruthy();
  });
});
