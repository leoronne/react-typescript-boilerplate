import { waitFor, renderHook, act } from '@testing-library/react';

import { useTheme } from 'hooks';
import ThemeProvider, { localStorageSlug } from 'providers/ThemeProvider';
import { DEFAULT_THEME_MODE, ALLOWED_THEME_MODES } from 'shared/consts';

describe('Theme Hook', () => {
  beforeEach(() => global.localStorage.clear());

  it('should load default theme', async () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current.mode).toBe(DEFAULT_THEME_MODE);
  });

  it('should load theme stored on localStorage', async () => {
    global.localStorage.setItem(localStorageSlug, ALLOWED_THEME_MODES[1]);
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current.mode).toBe(ALLOWED_THEME_MODES[1]);
  });

  it('should be able to change theme', async () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current.mode).toBe(DEFAULT_THEME_MODE);

    await act(async () => {
      result.current.changeTheme(ALLOWED_THEME_MODES[1]);
    });

    await waitFor(() => {
      expect(result.current.mode).toBe(ALLOWED_THEME_MODES[1]);
    });
  });
});
