import { NavLink } from "react-router";
import { ExternalLink } from "lucide-react";

/**
 * Header with NavLinks
 * @returns Page Header
 */
function Header() {
  const link_style = { paddingRight: "20px" };
  const external_link_style = {
    ...link_style,
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
  };
  const lucide_external_link_style = {
    width: "1em",
    height: "1em",
    verticalAlign: "middle",
  };
  return (
    <header
      style={{
        backgroundColor: "rgba(48, 48, 48, 0.1)", // slightly see-through
        backdropFilter: "blur(5px)", // adds blur behind the header
        WebkitBackdropFilter: "blur(10px)", // Safari support
        padding: "1rem",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // subtle bottom border
        display: "flex",
        flexWrap: "wrap", // allows wrapping
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: "1 1 300px", // grow, shrink, base width
          minWidth: "200px",
        }}
      >
        <NavLink to="/" className="text-link">
          <h2 style={{ margin: 0 }}>Jackson Datkuliak's Astrophotography</h2>
        </NavLink>
      </div>
      {/* Links */}
      <div
        style={{
          flex: "",
          minWidth: "200px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <a
          style={external_link_style}
          className="text-link"
          href="https://github.com/jacksondatkuliak"
          target="_blank"
          rel="noopener"
        >
          GitHub <ExternalLink style={lucide_external_link_style} />
        </a>
        <a
          style={external_link_style}
          className="text-link"
          href="https://www.astrobin.com/users/jdat"
          target="_blank"
          rel="noopener"
        >
          AstroBin <ExternalLink style={lucide_external_link_style} />
        </a>
        <NavLink style={link_style} className="text-link" to="/blog">
          Blog
        </NavLink>
        <NavLink style={link_style} className="text-link" to="/contact">
          Contact
        </NavLink>
        {/*<NavLink style={link_style} className="text-link" to="/about">
          Aboutz
        </NavLink>*/}
      </div>
    </header>
  );
}

export default Header;
