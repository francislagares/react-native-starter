import { render, screen } from '@testing-library/react-native';

import Index from './index';

describe('Index View', () => {
  it('should render without crashing', () => {
    render(<Index />);

    const view = screen.getByText(/edit/i);

    expect(view).toBeTruthy();
  });
});
