import {
  screen,
} from '@testing-library/react';
import i18n from 'i18next';

import { APP_NAME } from 'shared/consts';
import { getButton, render } from 'utils/test-utils';
import Header from './index';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('<Header />', () => {
  it('Should load correct content', async () => {
    render(<Header />);

    expect(screen.getByTestId(`${APP_NAME} Logo`)).toBeInTheDocument();
    expect(getButton(i18n.t('pagesmenu.open'))).toBeInTheDocument();
    expect(getButton(i18n.t('settings.open'))).toBeInTheDocument();
  });
});
