import { fireEvent, render, screen } from "@testing-library/react";
import Factorial from "./Factorial";
import userEvent from "@testing-library/user-event";

test("renders Factorial component", () => {
    render(<Factorial />);
    const headingElement = screen.getByText(/Factorial/i);
    expect(headingElement).toBeInTheDocument();
});     // test case to check if the Factorial component is rendered or not
test("renders input element", () => {
    render(<Factorial />);
    const inputElement = screen.getByPlaceholderText(/enter the value/i);
    expect(inputElement).toBeInTheDocument();
});     // test case to check if the input element is rendered or not
test("renders button element", () => {
    render(<Factorial />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
});     // test case to check if the button element is rendered or not
test("renders output element", () => {
    render(<Factorial />);
    fireEvent.change(screen.getByPlaceholderText(/enter the value/i), {
        target: { value: "5" },
    });    // test case to check if the output element is rendered or not   
    userEvent.click(screen.getByRole("button"));
}); 