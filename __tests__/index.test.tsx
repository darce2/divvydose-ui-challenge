import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import Home from "../pages/index";
import MyApp from "../pages/_app";

import prs from "./prs.json";
import labels from "./labels.json";

describe("Home", () => {
  it("renders a heading", () => {
    const { getByText} = render(MyApp({ Component: Home }));

    const heading = getByText(/open pull requests/i);

    expect(heading).toBeDefined();
  });

  it("shows multiple select options", () => {
    const pageProps = {
      prs,
      labels,
    };
    const { getByRole, getAllByTestId } = render(MyApp({ Component: Home, pageProps }));

    fireEvent.mouseDown(getByRole("button"));
    const options = getAllByTestId("tag-select-option");

    expect(options.length).toBe(10);
  });

  it("shows all PRs with no filter", () => {
    const pageProps = {
      prs,
      labels,
    };
    const { getAllByTestId } = render(MyApp({ Component: Home, pageProps }));

    const cards = getAllByTestId("pull-request-card");

    expect(cards.length).toBe(5);
  });

  it("filters by tag", () => {
    const pageProps = {
      prs,
      labels,
    };
    const { getByRole, getAllByTestId } = render(MyApp({ Component: Home, pageProps }));

    fireEvent.mouseDown(getByRole("button"));
    const options = within(getByRole("listbox"));
    fireEvent.click(options.getByText(/bug/i));
    const cards = getAllByTestId("pull-request-card");

    expect(cards.length).toBe(1);
  });
});
