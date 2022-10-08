import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';

export const ALLOWED_THEME_MODES = [
  {
    slug: 'light' as ThemeModes,
    icon: <WbSunnyOutlinedIcon />,
    translateKey: 'theme.light',
  },
  {
    slug: 'system' as ThemeModes,
    icon: <SettingsBrightnessOutlinedIcon />,
    translateKey: 'theme.system',
  },
  {
    slug: 'dark' as ThemeModes,
    icon: <DarkModeOutlinedIcon />,
    translateKey: 'theme.dark',
  },
];

export const DEFAULT_THEME_MODE = ALLOWED_THEME_MODES[1];

export const localStorageSlugTheme = `Theme`;

