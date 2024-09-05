import Badge from "@/components/ui/Badge";
import { render } from "@testing-library/react-native";

describe("Badge", () => {
  it("renders correctly", () => {
    const tree = render(<Badge duration="1000" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with duration", () => {
    const { getByText } = render(<Badge duration="1000" />);
    const badgeText = getByText("1000");
    expect(badgeText.props.children).toEqual("1000");
  });
});
