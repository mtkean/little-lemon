import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the submit button', () => {
    render(<BookingForm availableTimes={[]}/>);
    const submitButton = screen.getByText("Make your reservation");
    expect(submitButton).toBeInTheDocument();
});