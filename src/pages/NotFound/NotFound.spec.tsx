import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';

import { render, getHeading, getButton } from 'utils/test-utils';
import NotFound from './index';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('<NotFound />', () => {
  it('Should contain correct content', async () => {
    render(<NotFound />);

    expect(getHeading(i18n.t('notfound.title'))).toBeInTheDocument();
    expect(getHeading(i18n.t('notfound.description'))).toBeInTheDocument();
    expect(getButton(i18n.t('notfound.returnbutton'))).toBeInTheDocument();
  });

  it('Should redirect to home page if user clicks on the return button', async () => {
    render(<NotFound />);

    const button = getButton(i18n.t('notfound.returnbutton'));
    userEvent.click(button);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
