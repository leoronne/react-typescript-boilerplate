import i18n from 'i18next';

import { render, getHeading, getLink } from 'utils/test-utils';
import NotFound from './index';

describe('<NotFound />', () => {
  it('Should contain correct content', async () => {
    render(<NotFound />);

    expect(getHeading(i18n.t('something-wrong'))).toBeInTheDocument();
    expect(getHeading(i18n.t('page-not-found'))).toBeInTheDocument();
    expect(getLink(i18n.t('return-homepage'))).toBeInTheDocument();
  });
});
