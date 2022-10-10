import { screen } from '@testing-library/react';
import i18n from 'i18next';
import { DEVELOPER_LOCATION, DEVELOPER_NAME } from 'shared/consts';

import { render, getHeading, getLink, getImage } from 'utils/test-utils';
import SayHi from './index';

describe('<SayHi />', () => {
  it('Should contain correct content', async () => {
    render(<SayHi />);

    expect(getHeading(i18n.t('sayhi.title'))).toBeInTheDocument();
    expect(getLink(i18n.t('sayhi.sendmail'))).toBeInTheDocument();

    expect(screen.getByText(String(i18n.t('sayhi.description')))).toBeInTheDocument();

    expect(screen.getByText(DEVELOPER_NAME)).toBeInTheDocument();
    expect(screen.getByText(DEVELOPER_LOCATION)).toBeInTheDocument();

    expect(getImage(`${DEVELOPER_NAME} Avatar`)).toBeInTheDocument();
  });
});
