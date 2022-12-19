import ViewWrapperLayout from './index';
import { render, screen } from '@testing-library/react';

describe('ViewWrapperLayout', () => {
  it('should render view wrapper component', () => {
    render(
      <ViewWrapperLayout>
        <h1>Hello</h1>
      </ViewWrapperLayout>,
    );

    expect(screen.findByTestId('view-wrapper')).toBeInTheDocument();
  });
});
