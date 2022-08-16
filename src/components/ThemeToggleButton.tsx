import { useStore } from '@nanostores/preact';
import { currentTheme, toggleTheme } from '@stores/themeStore';
import { useEffect, useState } from 'preact/hooks';
import { clsx } from 'clsx';

function ThemeToggleButton() {
  const $currentTheme = useStore(currentTheme);
  const [visibleState, setVisibleState] = useState<
    'hidden' | 'transition' | 'visible'
  >('hidden');
  const visible = visibleState === 'transition' || visibleState === 'visible';

  useEffect(() => {
    setVisibleState('transition');
    setTimeout(() => {
      setVisibleState('visible');
    }, 500);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className={clsx([
        'inline-flex',
        'dark:text-white',
        'px-[2px]',
        visibleState === 'transition' && 'duration-500',
        visible ? 'opacity-100' : 'opacity-0',
      ])}
    >
      {$currentTheme === 'light' ? (
        // dark mode icon
        <span class="material-symbols-outlined text-4xl">dark_mode</span>
      ) : (
        // light mode icon
        <span class="material-symbols-outlined text-4xl">light_mode</span>
      )}
    </button>
  );
}

export default ThemeToggleButton;
