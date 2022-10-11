import React from 'react';

import Footer from 'components/application/Footer';
import Header from 'components/application/Header';

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
