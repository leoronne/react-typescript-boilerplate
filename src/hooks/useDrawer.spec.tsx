import { renderHook, act } from '@testing-library/react';

import { useDrawer, defaultOrigin } from 'hooks/useDrawer';

describe('Drawer Menu Hook', () => {
  it('should load default anchor', async () => {
    const { result } = renderHook(() => useDrawer());

    expect(result.current.drawerOrigin).toBe(defaultOrigin);
  });

  it('should be able to toggle the Drawer', async () => {
    const { result } = renderHook(() => useDrawer());

    const origin = {
      ...defaultOrigin,
      top: true,
    };

    await act(async () => {
      result.current.changeOrigin('top');
    });

    expect(result.current.drawerOrigin).toStrictEqual(origin);
  });
});
