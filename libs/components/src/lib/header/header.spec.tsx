import { Header } from './header';
import { render } from '@testing-library/react';

describe('Components', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });

  it('should match snapshot', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toMatchSnapshot();
  });
});
