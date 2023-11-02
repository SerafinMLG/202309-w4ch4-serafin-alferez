import { screen, render } from '@testing-library/react';
import { Info } from "./info";
import '@testing-library/jest-dom';


describe('Given Info component', () => {
  describe('When we instantiate', () => {

    render(<Info></Info>);

    test('It should be in the document', () => {
      const element = screen.getByText(/Call/i);
      expect(element).toBeInTheDocument();
    });
  });
});
