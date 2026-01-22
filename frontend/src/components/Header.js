import "../styles/header.css";

function Header() {
  return (
    <header className="pf-header">
      <div className="pf-left">
        <img
          src="/images/logo.png"
          alt="PollutionFinder Logo"
          className="pf-logo"
        />
        <span className="pf-title">PollutionFinder</span>
      </div>

      <nav className="pf-nav">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/help">Help</a>
        <a href="/bookmarks">Bookmark</a>
      </nav>
    </header>
  );
}

export default Header;
