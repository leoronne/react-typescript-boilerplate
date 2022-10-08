import { waitFor, renderHook, act } from '@testing-library/react';

import { useTheme } from 'hooks';
import ThemeProvider from 'providers/ThemeProvider';
import { DEFAULT_THEME_MODE, ALLOWED_THEME_MODES, localStorageSlugTheme } from 'shared/consts';
import { appLocalStorageSlug } from 'utils/local-storage';

const notSelectedThemes = ALLOWED_THEME_MODES.filter(option => option.slug !== DEFAULT_THEME_MODE.slug);

describe('Theme Hook', () => {
  beforeEach(() => global.localStorage.clear());

  it('should load default theme', async () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current.mode).toBe(DEFAULT_THEME_MODE.slug);
  });

  it('should load theme stored on localStorage', async () => {
    global.localStorage.setItem(`${appLocalStorageSlug}${localStorageSlugTheme}`, notSelectedThemes[0].slug);
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current.mode).toBe(notSelectedThemes[0].slug);
  });

  it('should be able to change theme', async () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current.mode).toBe(DEFAULT_THEME_MODE.slug);

    await act(async () => {
      result.current.changeTheme(notSelectedThemes[0].slug);
    });

    await waitFor(() => {
      expect(result.current.mode).toBe(notSelectedThemes[0].slug);
    });
  });
});
