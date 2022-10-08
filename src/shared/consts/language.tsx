import { ReactComponent as Brazil } from 'assets/svg/brazil.svg';
import { ReactComponent as USA } from 'assets/svg/usa.svg';

import { englishUS, portugueseBR } from 'locales';

export const ALLOWED_LANGUAGES = [
  {
    name: 'English',
    slug: 'en',
    icon: <USA />,
    translateKey: 'language.en',
    translationPath: englishUS
  },
  {
    name: 'Português',
    slug: 'pt',
    icon: <Brazil />,
    translateKey: 'language.pt',
    translationPath: portugueseBR
  },
];

export const ALLOWED_LANGUAGES_SLUGS = ALLOWED_LANGUAGES.map(language => language.slug);

export const DEFAULT_LANGUAGE = ALLOWED_LANGUAGES[0];

export const languageLocalStorageSlug = 'Language';
