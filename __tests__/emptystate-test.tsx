import EmptyState from "@/components/EmptyState";
import { fireEvent, render } from "@testing-library/react-native";

describe("EmptyState", () => {
  it("renders correctly", () => {
    const tree = render(<EmptyState onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("onPress works correctly", () => {
    const mockFn = jest.fn();
    const button = render(<EmptyState onPress={mockFn} />);
    fireEvent.press(button.getByText("Add Flight"));
    expect(mockFn).toHaveBeenCalled();
  });
});
