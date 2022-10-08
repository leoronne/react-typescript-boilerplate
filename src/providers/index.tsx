import React from 'react';
import ThemeProvider from './ThemeProvider';

interface IComposeProvidersProps {
  with: Array<React.ElementType>;
  children: React.ReactNode;
}

function ComposeProviders({
  with: Providers,
  children,
}: IComposeProvidersProps) {
  return (
    <>
      {Providers.reduce(
        (AccProviders, Provider) => (
          <Provider>{AccProviders}</Provider>
        ),
        children
      )}
    </>
  );
}

export default ComposeProviders;
export { ThemeProvider };
