import Home from "@/app/index";
import * as React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { router } from "expo-router";
jest.mock("expo-router", () => ({
  router: () => ({
    navigate: jest.fn(),
  }),
}));
describe("Home", () => {
  it("renders correctly", () => {
    const tree = render(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("correctly navigates to flights", () => {
    const mockNavigate = jest.fn();
    router.navigate = mockNavigate;

    const { getByText } = render(<Home />);
    fireEvent.press(getByText("Go to Flights"));

    expect(mockNavigate).toHaveBeenCalledWith("/Flights");
  });
});
