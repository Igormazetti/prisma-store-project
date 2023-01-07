import Dashboard from './index';
import { render, screen } from '@testing-library/react';

describe('ViewWrapperLayout', () => {
  it('should render view wrapper component', () => {
    render(<Dashboard />);
    const viewWrapper = screen.getByTestId('view-wrapper');
    expect(viewWrapper).toBeInTheDocument();
  });
});
