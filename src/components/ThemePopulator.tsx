import { setTheme, onThemeChange, Theme } from '@stores/themeStore';
import { useEffect } from 'preact/hooks';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const setThemeCookie = (theme: Theme) =>
  cookies.set('theme', theme, { path: '/' });

const ENABLE_SYSTEM_THEME = false;

function ThemePopulator() {
  if (ENABLE_SYSTEM_THEME) {
    useEffect(() => {
      const isSystemDark = window.matchMedia(
        `(prefers-color-scheme: dark)`
      ).matches;

      setTheme(isSystemDark ? 'dark' : 'light');
    }, []);
  }

  onThemeChange((theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setThemeCookie('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setThemeCookie('light');
    }
  });
}

export default ThemePopulator;
