import { screen } from '@testing-library/react-native';

import Index from '@/app';

import { render } from './custom-render';

describe('Index View', () => {
  it('should render without crashing', () => {
    render(<Index />);

    const view = screen.getByText(/edit/i);

    expect(view).toBeOnTheScreen();
  });
});
