import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Flights from "@/app/(tabs)/Flights";

jest.mock("@expo/vector-icons/Feather", () => "Feather");
jest.mock("@/components/EmptyState", () => "EmptyState");
jest.mock("@/components/TicketCard", () => "TicketCard");
jest.mock("@/components/Modal", () => "Modal");
jest.mock("@/components/TicketList", () => "TicketList");

describe("Flights", () => {
  it("renders correctly", () => {
    const tree = render(<Flights />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adds a flight when the plus button is pressed", () => {
    const { getByTestId } = render(<Flights />);
    const addButton = getByTestId("add-flight-button");

    fireEvent.press(addButton);

    expect(getByTestId("ticket-list")).toBeTruthy();
  });

  it("opens modal when a flight is selected", () => {
    const { getByTestId, getByText } = render(<Flights />);
    const addButton = getByTestId("add-flight-button");

    fireEvent.press(addButton);

    const ticketList = getByTestId("ticket-list");
    fireEvent(ticketList, "handleOpenModal", { flightNumber: "TEST123" });

    expect(getByTestId("ticket-list")).toBeTruthy();
    expect(getByText("Remove Flight")).toBeTruthy();
  });

  it("removes a flight when remove button is pressed", () => {
    const { getByTestId, getByText, queryByText } = render(<Flights />);
    const addButton = getByTestId("add-flight-button");

    fireEvent.press(addButton);

    const ticketList = getByTestId("ticket-list");
    fireEvent(ticketList, "handleOpenModal", { flightNumber: "TEST123" });

    const removeButton = getByText("Remove Flight");
    fireEvent.press(removeButton);

    expect(queryByText("TEST123")).toBeNull();
  });
});
