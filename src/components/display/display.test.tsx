import { Display } from "./display";
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Given Display component', () => {
  describe('When we instantiate', () => {

    render(<Display></Display>);

    test('It should be in the document', () => {
      const element = screen.getByRole('display');
      expect(element).toBeInTheDocument();
    });
  });
});
