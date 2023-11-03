
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Keyboard } from './keyboard';


describe('Given Keyboard component', () => {
  describe('When we instantiate', () => {

    render(<Keyboard></Keyboard>);

    test('It should be in the document', () => {
      const element = screen.getByRole('keyboard');
      expect(element).toBeInTheDocument();
    });
  });
});
