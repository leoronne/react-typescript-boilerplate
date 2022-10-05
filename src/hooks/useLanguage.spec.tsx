import { waitFor, renderHook, act } from '@testing-library/react';

import { useLanguage } from 'hooks';
import LanguageProvider, { localStorageSlug } from 'providers/LanguageProvider';
import { ALLOWED_LANGUAGES_SLUGS, DEFAULT_LANGUAGE } from 'shared/consts';

describe('Language Hook', () => {
  beforeEach(() => global.localStorage.clear());

  it('should load default language', async () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    expect(result.current.language).toBe(DEFAULT_LANGUAGE.slug);
  });

  it('should load language stored on localStorage', async () => {
    global.localStorage.setItem(localStorageSlug, ALLOWED_LANGUAGES_SLUGS[1]);
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    expect(result.current.language).toBe(ALLOWED_LANGUAGES_SLUGS[1]);
  });

  it('should be able to change language', async () => {
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    await act(async () => {
      result.current.changeLanguage(ALLOWED_LANGUAGES_SLUGS[1]);
    });

    await waitFor(() => {
      expect(result.current.language).toBe(ALLOWED_LANGUAGES_SLUGS[1]);
    });
  });
});
