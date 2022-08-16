function NavBar() {
  return (
    <nav>
      <div className="flex gap-8">
        <a href="/" className="py-2">
          Home
        </a>
        <a href="/productivity" className="py-2">
          Productivity
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
