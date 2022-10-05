import { screen, render as renderTestComponent, ByRoleMatcher, ByRoleOptions } from '@testing-library/react';

import Providers, { ThemeProvider, LanguageProvider } from 'providers';

export function render(Component: JSX.Element) {
  function App() {
    return <Providers with={[ThemeProvider, LanguageProvider]}>{Component}</Providers>;
  }

  renderTestComponent(<App />);
}

export function getByRole(
  role: ByRoleMatcher,
  name?: RegExp | string | ((accessibleName: string, element: Element) => boolean),
  options?: ByRoleOptions | undefined
): HTMLElement {
  return screen.getByRole(role, {
    name,
    ...options,
  });
}

export function getButton(
  name?: RegExp | string | ((accessibleName: string, element: Element) => boolean)
): HTMLElement {
  return screen.getByRole('button', {
    name,
  });
}

export function queryButton(
  name?: RegExp | string | ((accessibleName: string, element: Element) => boolean)
): HTMLElement | null {
  return screen.queryByRole('button', {
    name,
  });
}

export function getHeading(
  name?: RegExp | string | ((accessibleName: string, element: Element) => boolean)
): HTMLElement {
  return screen.getByRole('heading', {
    name,
  });
}

export function queryHeading(
  name?: RegExp | string | ((accessibleName: string, element: Element) => boolean)
): HTMLElement | null {
  return screen.queryByRole('heading', {
    name,
  });
}