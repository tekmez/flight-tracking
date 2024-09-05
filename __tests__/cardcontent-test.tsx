import React from "react";
import { render } from "@testing-library/react-native";
import CardContent from "@/components/ui/Card/CardContent";

describe("CardContent", () => {
  const defaultProps = {
    takeOffDate: "2023-07-01",
    departureCity: "New York",
    departureTime: "10:00 AM",
    landingDate: "2023-08-08",
    arrivalCity: "Los Angeles",
    arrivalTime: "1:00 PM",
  };

  it("renders correctly", () => {
    const { toJSON } = render(<CardContent {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("displays correct departure information", () => {
    const { getByText } = render(<CardContent {...defaultProps} />);
    expect(getByText("2023-07-01")).toBeTruthy();
    expect(getByText("New York")).toBeTruthy();
    expect(getByText("10:00 AM")).toBeTruthy();
  });

  it("displays correct arrival information", () => {
    const { getByText } = render(<CardContent {...defaultProps} />);
    expect(getByText("2023-08-08")).toBeTruthy();
    expect(getByText("Los Angeles")).toBeTruthy();
    expect(getByText("1:00 PM")).toBeTruthy();
  });
});
