// Header.jsx
function Header() {
  const link_style = { paddingRight: "20px" };
  return (
    <header
      style={{
        backgroundColor: "rgba(48, 48, 48, 0.1)", // slightly see-through
        backdropFilter: "blur(5px)", // adds blur behind the header
        WebkitBackdropFilter: "blur(10px)", // Safari support
        padding: "1rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // subtle bottom border
      }}
    >
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
          <a
            style={link_style}
            className="text-link"
            href="https://www.astrobin.com/users/jdat"
            target="_blank"
            rel="noopener"
          >
            AstroBin
          </a>
          <a style={link_style} className="text-link" href="/blog">
            Blog
          </a>
          <a style={link_style} className="text-link" href="/contact">
            Contact
          </a>
          <a style={link_style} className="text-link" href="/about">
            About
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
