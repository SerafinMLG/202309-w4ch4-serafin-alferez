
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Action } from './action';


describe('Given Action component', () => {
  describe('When we instantiate', () => {

    render(<Action></Action>);

    test('It should be in the document', () => {
      const element = screen.getByText(/Han/i);
      expect(element).toBeInTheDocument();
    });
  });
});
