import { useState, useCallback, useMemo } from 'react';

export const defaultOrigin = {
  top: false,
  left: false,
  bottom: false,
  right: false,
};

interface DrawerContextProps {
  toggleDrawer: (
    anchor: Anchor,
    open?: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  drawerOrigin: {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
  };
  changeOrigin: (anchor: Anchor, open?: boolean) => void;
}

const useDrawer = (): DrawerContextProps => {
  const [origin, setOrigin] = useState(defaultOrigin);

  const changeOrigin = useCallback((anchor: Anchor, open?: boolean) => {
    setOrigin(state => ({
      ...state,
      [anchor]: open || !state[anchor],
    }));
  }, []);

  const toggleDrawer = useCallback(
    (anchor: Anchor, open?: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        changeOrigin(anchor, open);
      },
    [changeOrigin]
  );

  const drawerOrigin = useMemo(() => origin, [origin]);

  return { toggleDrawer, changeOrigin, drawerOrigin };
};

export { useDrawer };
