import React from "react";
import { render } from "@testing-library/react-native";
import CardHeader from "@/components/ui/Card/CardHeader";

describe("CardHeader", () => {
  const defaultProps = {
    airline: "Turkish Airlines",
    duration: "2h 30m",
    flightNumber: "TK1234",
  };

  it("renders correctly", () => {
    const { toJSON } = render(<CardHeader {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("displays correct airline and flight number", () => {
    const { getByText } = render(<CardHeader {...defaultProps} />);
    expect(getByText("TK1234 • Turkish Airlines")).toBeTruthy();
  });

  it("renders Badge component with correct duration", () => {
    const { getByText } = render(<CardHeader {...defaultProps} />);
    expect(getByText("2h 30m")).toBeTruthy();
  });

  it("renders Airline component", () => {
    const { getByTestId } = render(<CardHeader {...defaultProps} />);
    expect(getByTestId("airline-icon")).toBeTruthy();
  });
});
