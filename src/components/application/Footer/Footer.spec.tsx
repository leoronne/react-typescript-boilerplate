import { screen } from '@testing-library/react';

import { render } from 'utils/test-utils';
import Footer, { footerText } from './index';

describe('<Footer />', () => {
  it('Should load correct content', async () => {
    render(<Footer />);
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });
});
