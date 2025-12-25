import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Shrey's Hub</h1>
        <nav className="nav">
          <a href="#text" className="nav-link active">Text</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

