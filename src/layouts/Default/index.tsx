import React from 'react';

import { Header, Footer } from 'components/application';
import * as Styles from './styles';

export const withDefaultLayout = (Component: React.ElementType) =>
  function DefaultLayout(props: any) {
    return (
      <Styles.Container>
        <Header />
        <Styles.Main>
          <Component {...props} />
        </Styles.Main>
        <Footer />
      </Styles.Container>
    );
  };
