import { APP_SLUG } from 'shared/consts';

export const appLocalStorageSlug = `@${APP_SLUG}/`;

export const getItem = (key: string) => {
  try {
    return localStorage.getItem(`${appLocalStorageSlug}${key}`);
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error(err?.message);
    return null;
  }
};

export const setItem = (key: string, value: string) => {
  try {
    localStorage.setItem(`${appLocalStorageSlug}${key}`, value);
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error(err?.message);
  }
};
