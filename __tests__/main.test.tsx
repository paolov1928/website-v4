import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import Main from "../app/components/Main";

describe("<Main />", () => {
  it("renders without crashing", () => {
    render(<Main />);
  });

  it('displays Intro article when "article" prop is set to "intro"', () => {
    const { getByText } = render(<Main article="intro" />);
    expect(getByText("Intro")).toBeInTheDocument();
  });

  it('displays Contact article when "article" prop is set to "contact"', () => {
    const { getByText } = render(<Main article="contact" />);
    expect(getByText("Contact")).toBeInTheDocument();
  });
});
