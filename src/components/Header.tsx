// Header.jsx
function Header() {
  return (
    <header style={{ backgroundColor: "#282c34", padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // center horizontally
        }}
      >
        <a href="/" className="text-link">
          <h2 style={{ margin: 0 }}>Jackson Datkuliak's Astrophotography</h2>
        </a>
        {/* Links */}
        <div style={{ marginLeft: "auto", paddingRight: "10px" }}>
          <a className="text-link" href="https://www.astrobin.com/users/jdat">
            AstroBin
          </a>
          <a className="text-link" href="/blog">
            Blog
          </a>
          <a className="text-link" href="/contact">
            Contact
          </a>
          <a className="text-link" href="/about">
            About
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
