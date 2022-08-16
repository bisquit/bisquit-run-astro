import { atom } from 'nanostores';

export type Theme = 'light' | 'dark';

const initialTheme: Theme = document.documentElement.classList.contains('dark')
  ? 'dark'
  : 'light';

export const currentTheme = atom<Theme>(initialTheme);

export function toggleTheme() {
  const nextTheme = currentTheme.get() === 'light' ? 'dark' : 'light';
  currentTheme.set(nextTheme);
}

export function setTheme(theme: Theme) {
  console.log('called setTheme', theme);
  currentTheme.set(theme);
}

export function onThemeChange(cb: (theme: Theme) => unknown) {
  currentTheme.subscribe((theme) => cb(theme));
}
