import { useState, useCallback, useMemo } from 'react';

interface DropDownMenuContextProps {
  dropdownAnchor: null | HTMLElement;
  handleClose: () => void;
  handleClick: (currentTarget: EventTarget & HTMLElement) => void;
}

const useDropDownMenu = (): DropDownMenuContextProps => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback(
    (currentTarget: EventTarget & HTMLElement) => {
      setAnchorEl(currentTarget);
    },
    []
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const dropdownAnchor = useMemo(() => anchorEl, [anchorEl]);

  return { handleClick, handleClose, dropdownAnchor };
};

export { useDropDownMenu };
