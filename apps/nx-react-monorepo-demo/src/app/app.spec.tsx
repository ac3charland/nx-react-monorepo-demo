import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it.skip('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Welcome nx-react-monorepo-demo/gi)).toBeTruthy();
  });
});
