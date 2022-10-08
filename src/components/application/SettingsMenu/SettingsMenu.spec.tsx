import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';

import { getButton, getHeading, queryButton, queryHeading, render } from 'utils/test-utils';
import SettingsMenu from './index';

describe('<SettingsMenu />', () => {
  it('Should be able to open settings menu', async () => {
    render(<SettingsMenu />);

    userEvent.click(getButton(i18n.t('settings.open')));

    await waitFor(() => {
      expect(getHeading(i18n.t('settings.base'))).toBeTruthy();
      expect(getButton(i18n.t('settings.close'))).toBeTruthy();
    });
  });

  it('Should be able to close settings menu', async () => {
    render(<SettingsMenu />);

    userEvent.click(getButton(i18n.t('settings.open')));

    await waitFor(() => {
      expect(getHeading(i18n.t('settings.base'))).toBeTruthy();
      expect(getButton(i18n.t('settings.close'))).toBeTruthy();
    });

    userEvent.click(getButton(i18n.t('settings.close')));

    await waitFor(() => {
      expect(queryHeading(i18n.t('settings.base'))).not.toBeTruthy();
      expect(queryButton(i18n.t('settings.close'))).not.toBeTruthy();
    });
  });

  it('Should render correct options', async () => {
    render(<SettingsMenu />);

    userEvent.click(getButton(i18n.t('settings.open')));

    await waitFor(() => {
      expect(getHeading(i18n.t('language.base'))).toBeTruthy();
      expect(getHeading(i18n.t('theme.base'))).toBeTruthy();
    });
  });
});
