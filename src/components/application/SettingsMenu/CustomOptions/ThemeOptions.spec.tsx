import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';

import { ALLOWED_THEME_MODES, DEFAULT_THEME_MODE } from 'shared/consts';
import { getButton, render } from 'utils/test-utils';
import ThemeOptions from './ThemeOptions';

describe('<ThemeOptions />', () => {
  it('Should have correct options to select', async () => {
    render(<ThemeOptions />);

    ALLOWED_THEME_MODES.forEach(option => {
      expect(getButton(i18n.t(option.translateKey))).toBeTruthy();
    });
  });

  it('Should load correct default theme', async () => {
    render(<ThemeOptions />);

    const selectedTheme = getButton(i18n.t(DEFAULT_THEME_MODE.translateKey));
    expect(selectedTheme.classList.contains('option-selected')).toBeTruthy();
  });

  it('Should be able to select a different theme', async () => {
    render(<ThemeOptions />);

    const notSelectedThemes = ALLOWED_THEME_MODES.filter(option => option.slug !== DEFAULT_THEME_MODE.slug);
    let option = getButton(i18n.t(notSelectedThemes[0].translateKey));

    userEvent.click(option);

    await waitFor(() => {
      option = getButton(i18n.t(notSelectedThemes[0].translateKey));
      expect(option.classList.contains('option-selected')).toBeTruthy();
    });
  });
});
