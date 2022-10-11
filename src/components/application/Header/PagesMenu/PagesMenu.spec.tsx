import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';

import { routesMap } from 'routes';
import { getButton, getByRole, render } from 'utils/test-utils';
import PagesMenu from './index';

const itemsList = routesMap.filter(route => !route.hideOnMenu);

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('<PagesMenu />', () => {
  it('Should load correct content', async () => {
    render(<PagesMenu />);

    userEvent.click(getButton(i18n.t('pagesmenu.open')));

    await waitFor(() => {
      itemsList.forEach(route => {
        expect(getByRole('menuitem', i18n.t(route.translateKey)));
      });
    });
  });

  it('Should redirect user to correct path', async () => {
    render(<PagesMenu />);

    userEvent.click(getButton(i18n.t('pagesmenu.open')));

    await waitFor(() => {
      userEvent.click(getByRole('menuitem', i18n.t(itemsList[0].translateKey)));

      expect(mockNavigate).toHaveBeenCalledWith(itemsList[0].path);
    });
  });
});
