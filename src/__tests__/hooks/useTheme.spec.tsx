import { waitFor, renderHook, act } from '@testing-library/react';

import 'i18n';
import '__mocks__/localStorage';
import { useTheme } from 'hooks';
import { ThemeProvider } from 'providers';
import { DEFAULT_THEME_MODE, ALLOWED_THEME_MODES } from 'shared/consts';

describe('Theme Hook', () => {
  it('should load default theme', async () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    });

    expect(result.current.mode).toBe(DEFAULT_THEME_MODE);
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
