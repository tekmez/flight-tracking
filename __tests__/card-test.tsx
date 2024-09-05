import React from "react";
import { render } from "@testing-library/react-native";
import Card from "@/components/ui/Card/Card";
import { Text } from "react-native";

describe("Card", () => {
  it("renders correctly", () => {
    const { toJSON } = render(
      <Card>
        <Text>Test Content</Text>
      </Card>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders children correctly", () => {
    const { getByText } = render(
      <Card>
        <Text>Child Component</Text>
      </Card>
    );
    expect(getByText("Child Component")).toBeTruthy();
  });
});
