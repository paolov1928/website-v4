import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import ArticleContainer from "../app/components/ArticleContainer";

describe("<ArticleContainer />", () => {
  it("renders without crashing", () => {
    render(<ArticleContainer />);
  });

  it('displays Intro article when "article" prop is set to "intro"', () => {
    const { getByText } = render(<ArticleContainer article="intro" />);
    expect(getByText("Intro")).toBeInTheDocument();
  });

  it('displays Contact article when "article" prop is set to "contact"', () => {
    const { getByText } = render(<ArticleContainer article="contact" />);
    expect(getByText("Contact")).toBeInTheDocument();
  });
});
