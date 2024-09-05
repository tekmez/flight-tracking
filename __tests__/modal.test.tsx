import Modal from "@/components/Modal";
import { render, fireEvent } from "@testing-library/react-native";
import { Text } from "react-native";

describe("Modal", () => {
  it("renders correctly", () => {
    const tree = render(
      <Modal visible={true} onClose={() => {}}>
        <Text>Hello</Text>
      </Modal>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("onClose works correctly", () => {
    const mockFn = jest.fn();
    const modal = render(
      <Modal visible={true} onClose={mockFn}>
        <Text>Hello</Text>
      </Modal>
    );
    fireEvent.press(modal.getByText("Hello"));
    expect(mockFn).toHaveBeenCalled();
    modal.rerender(
      <Modal visible={false} onClose={mockFn}>
        <Text>Hello</Text>
      </Modal>
    );
    expect(modal.queryByText("Hello")).toBeNull();
  });
});
