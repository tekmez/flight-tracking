import TButton from "@/components/ui/Button";
import * as React from "react";
import { fireEvent, render } from "@testing-library/react-native";

describe("Button", () => {
  it("renders correctly", () => {
    const tree = render(
      <TButton
        title="Go to Flights"
        onPress={() => {}}
        classNames="bg-orange-600 mt-4"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("onPress works correctly", () => {
    const mockFn = jest.fn();
    const button = render(
      <TButton
        title="Go to Flights"
        onPress={mockFn}
        classNames="bg-orange-600 mt-4"
      />
    );
    fireEvent.press(button.getByText("Go to Flights"));
    expect(mockFn).toHaveBeenCalled();
  });
});
