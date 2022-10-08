import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';

import { ALLOWED_LANGUAGES, DEFAULT_LANGUAGE } from 'shared/consts';
import { getButton, render } from 'utils/test-utils';
import LanguageOptions from './LanguageOptions';

describe('<LanguageOptions />', () => {
  it('Should have correct options to select', async () => {
    render(<LanguageOptions />);

    ALLOWED_LANGUAGES.forEach(option => {
      expect(getButton(i18n.t(option.translateKey))).toBeTruthy();
    });
  });

  it('Should load correct default language', async () => {
    render(<LanguageOptions />);

    const selectedLanguage = getButton(i18n.t(DEFAULT_LANGUAGE.translateKey));
    expect(selectedLanguage.classList.contains('option-selected')).toBeTruthy();
  });

  it('Should be able to select a different language', async () => {
    render(<LanguageOptions />);

    const notSelectedLanguages = ALLOWED_LANGUAGES.filter(option => option.slug !== DEFAULT_LANGUAGE.slug);
    let option = getButton(i18n.t(notSelectedLanguages[0].translateKey));

    userEvent.click(option);

    await waitFor(() => {
      option = getButton(i18n.t(notSelectedLanguages[0].translateKey));
      expect(option.classList.contains('option-selected')).toBeTruthy();
    });
  });
});
