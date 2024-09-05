import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Flight } from "@/types/FlightType";
import TicketList from "@/components/TicketList";
import { Text, TouchableOpacity, View } from "react-native";

const EmptyStateMock = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <View>
      <Text>Add a flight</Text>
    </View>
  </TouchableOpacity>
);

describe("TicketList", () => {
  const mockFlights: Flight[] = [
    {
      flightNumber: "AB123",
      arrivalCity: "Berlin",
      departureCity: "Istanbul",
      airline: "Turkish Airlines",
      departureTime: "10:00 AM",
      arrivalTime: "1:00 PM",
      duration: "2h 30m",
      takeOffDate: "2023-07-01",
      landingDate: "2023-08-08",
    },
    {
      flightNumber: "XY456",
      arrivalCity: "Paris",
      departureCity: "New York",
      airline: "Emirates",
      departureTime: "10:00 AM",
      arrivalTime: "1:00 PM",
      duration: "2h 30m",
      takeOffDate: "2023-07-01",
      landingDate: "2023-08-08",
    },
  ];

  const mockHandleOpenModal = jest.fn();
  const mockHandleAddFlight = jest.fn();

  it("renders correctly", () => {
    const tree = render(
      <TicketList
        flights={mockFlights}
        handleOpenModal={mockHandleOpenModal}
        handleAddFlight={mockHandleAddFlight}
        EmptyState={EmptyStateMock}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders flights correctly", () => {
    const { getByText } = render(
      <TicketList
        flights={mockFlights}
        handleOpenModal={mockHandleOpenModal}
        handleAddFlight={mockHandleAddFlight}
        EmptyState={EmptyStateMock}
      />
    );

    expect(getByText("Berlin")).toBeTruthy();
    expect(getByText("Paris")).toBeTruthy();
  });

  it("renders empty state when no flights are available", () => {
    const { getByText } = render(
      <TicketList
        flights={[]}
        handleOpenModal={mockHandleOpenModal}
        handleAddFlight={mockHandleAddFlight}
        EmptyState={EmptyStateMock}
      />
    );
    expect(getByText("Add a flight")).toBeTruthy();
  });

  it("calls handleOpenModal when a flight is pressed", () => {
    const { getByText } = render(
      <TicketList
        flights={mockFlights}
        handleOpenModal={mockHandleOpenModal}
        handleAddFlight={mockHandleAddFlight}
        EmptyState={EmptyStateMock}
      />
    );

    fireEvent.press(getByText("Berlin"));
    expect(mockHandleOpenModal).toHaveBeenCalledWith(mockFlights[0]);

    fireEvent.press(getByText("Paris"));
    expect(mockHandleOpenModal).toHaveBeenCalledWith(mockFlights[1]);
  });

  it("Check if a new ticket is added after handleAddFlight is called", () => {
    const { getByText, queryByText, rerender } = render(
      <TicketList
        flights={[]}
        handleOpenModal={mockHandleOpenModal}
        handleAddFlight={mockHandleAddFlight}
        EmptyState={EmptyStateMock}
      />
    );

    fireEvent.press(getByText("Add a flight"));
    expect(mockHandleAddFlight).toHaveBeenCalled();

    const newFlight = {
      id: "3",
      airline: "Turkish Airlines",
      flightNumber: "NA1234",
      departureCity: "New York",
      arrivalCity: "Tokyo",
      departureTime: "09:00 AM",
      arrivalTime: "11:00 PM",
      takeOffDate: "2023-07-15",
      landingDate: "2023-07-16",
      duration: "14h 00m",
    };

    rerender(
      <TicketList
        flights={[newFlight]}
        handleOpenModal={mockHandleOpenModal}
        handleAddFlight={mockHandleAddFlight}
        EmptyState={EmptyStateMock}
      />
    );

    expect(getByText("New York")).toBeTruthy();
    expect(getByText("Tokyo")).toBeTruthy();
    expect(queryByText("Add a flight")).toBeNull();
  });
});
