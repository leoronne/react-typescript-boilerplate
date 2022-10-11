import { renderHook, act } from '@testing-library/react';

import { useDropDownMenu } from 'hooks/useDropDownMenu';
import { simulateElement } from 'utils/test-utils';

describe('Dropdown Menu Hook', () => {
  it('should load default anchor', async () => {
    const { result } = renderHook(() => useDropDownMenu());

    expect(result.current.dropdownAnchor).toBe(null);
  });

  it('should be able to open the Menu referencing an element', async () => {
    const { result } = renderHook(() => useDropDownMenu());

    const button = simulateElement();

    await act(async () => {
      result.current.handleClick(button);
    });

    expect(result.current.dropdownAnchor).toBe(button);
  });

  it('should be able to close the Menu referencing a null element', async () => {
    const { result } = renderHook(() => useDropDownMenu());

    const button = simulateElement();

    await act(async () => {
      result.current.handleClick(button);
    });

    expect(result.current.dropdownAnchor).toBe(button);

    await act(async () => {
      result.current.handleClose();
    });

    expect(result.current.dropdownAnchor).toBe(null);
  });
});
