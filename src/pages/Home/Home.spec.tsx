import i18n from 'i18next';

import { render, getHeading } from 'utils/test-utils';
import Home from './index';

describe('<Home />', () => {
  it('Should contain correct texts', async () => {
    render(<Home />);

    expect(getHeading(i18n.t('homepage.title'))).toBeTruthy();

    expect(getHeading(i18n.t('homepage.subtitle'))).toBeTruthy();
  });
});
