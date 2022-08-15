import ThemeToggleButton from './ThemeToggleButton';

function NavBar() {
  return (
    <nav>
      <div className="flex gap-4 py-8">
        <a
          href="/productivity"
          className="py-2 dark:text-white dark:hover:text-slate-300"
        >
          Productivity
        </a>
      </div>
      {/* <ThemeToggleButton /> */}
    </nav>
  );
}

export default NavBar;
