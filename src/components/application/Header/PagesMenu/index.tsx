import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useDropDownMenu } from 'hooks/useDropDownMenu';
import { routesMap } from 'routes';
import { IconButton } from 'components/ui/IconButton';
import DropdownMenu, { MenuItem } from 'components/ui/DropdownMenu';


function PagesMenu() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { dropdownAnchor, handleClick, handleClose } = useDropDownMenu();

  const openPage = (path: string) => navigate(path);

  const itemsList = routesMap.filter(route => !route.hideOnMenu);

  return (
    <>
      <IconButton
        aria-label={t('pagesmenu.open')}
        onClick={e => handleClick(e.currentTarget)}
      >
        <MenuRoundedIcon />
      </IconButton>

      <DropdownMenu anchorEl={dropdownAnchor} handleClose={handleClose}>
        {itemsList.map(
          route =>
            !route.hideOnMenu && (
              <MenuItem
                key={route.translateKey}
                icon={route.icon}
                title={t(route.translateKey)}
                action={() => openPage(route.path)}
              />
            )
        )}
      </DropdownMenu>
    </>
  );
}

export default PagesMenu;
