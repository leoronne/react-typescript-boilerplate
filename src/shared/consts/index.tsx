import { ThemeModes } from 'contexts';
import { ReactComponent as Brazil } from 'assets/svg/brazil.svg';
import { ReactComponent as USA } from 'assets/svg/usa.svg';

export const APP_NAME = 'React + TypeScript Boilerplate';
export const APP_SLUG = 'react-typescript-boilerplate';

export const ALLOWED_THEME_MODES: ThemeModes[] = ['dark', 'light', 'system'];

export const DEFAULT_THEME_MODE: ThemeModes = 'system';

export const ALLOWED_LANGUAGES = [
  {
    name: 'English',
    slug: 'en',
    icon: <USA />,
    translateSlug: 'language-en',
  },
  {
    name: 'Português',
    slug: 'pt',
    icon: <Brazil />,
    translateSlug: 'language-pt',
  },
];

export const ALLOWED_LANGUAGES_SLUGS = ALLOWED_LANGUAGES.map(language => language.slug);

export const DEFAULT_LANGUAGE = ALLOWED_LANGUAGES[0];
