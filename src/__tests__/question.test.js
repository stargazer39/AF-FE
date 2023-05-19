import { render, screen, cleanup } from "@testing-library/react";
import AddAnswerModal from "../pages/questions/questionModals/addAnswer";


test('Should render the Add answer model', () => {
    render(<AddAnswerModal/>);
    const AddAnswerModalElement = screen.getByTestId('Q001');
    expect(AddAnswerModalElement).toBeInTheDocument();
})