import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';

import { render, getButton } from 'utils/test-utils';
import SocialLinks, { GitHub, LinkedIn } from './index';

const user = 'leoronne';

describe('<SocialLinks />', () => {
  global.open = jest.fn();

  it('Should be able to open the GitHub profile on a new tab', async () => {
    render(<GitHub user={user} />);

    const button = getButton(i18n.t('github.profile'));

    userEvent.click(button);

    await waitFor(() => {
      expect(global.open).toHaveBeenCalledWith(
        `https://github.com/${user}`,
        '_blank'
      );
    });
  });

  it('Should be able to open the LinkedIn profile on a new tab', async () => {
    render(<LinkedIn user={user} />);

    const button = getButton(i18n.t('linkedin.profile'));

    userEvent.click(button);

    await waitFor(() => {
      expect(global.open).toHaveBeenCalledWith(
        `https://linkedin.com/in/${user}`,
        '_blank'
      );
    });
  });

  it('Should have GitHub and LinkedIn buttons', async () => {
    render(<SocialLinks />);

    expect(getButton(i18n.t('linkedin.profile'))).toBeInTheDocument();
    expect(getButton(i18n.t('github.profile'))).toBeInTheDocument();
  });
});
