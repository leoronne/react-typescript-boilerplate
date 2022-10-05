import { waitFor, renderHook, act } from '@testing-library/react';

import 'i18n';
import '__mocks__/localStorage';
import { useLanguage } from 'hooks';
import { LanguageProvider } from 'providers';
import { ALLOWED_LANGUAGES_SLUGS, DEFAULT_LANGUAGE } from 'shared/consts';

describe('Language Hook', () => {
  it('should load default language', async () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    expect(result.current.language).toBe(DEFAULT_LANGUAGE.slug);
  });

  it('should be able to change language', async () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    expect(result.current.language).toBe(DEFAULT_LANGUAGE.slug);

    await act(async () => {
      result.current.changeLanguage(ALLOWED_LANGUAGES_SLUGS[1]);
    });

    await waitFor(() => {
      expect(result.current.language).toBe(ALLOWED_LANGUAGES_SLUGS[1]);
    });
  });
});
