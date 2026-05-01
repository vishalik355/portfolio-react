import { useState } from "react";

function Navbar({ menuItems }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">

          <h2 className="logo">VISHALI</h2>

          {/* Menu Icon */}
          <div
            className={`menu-icon ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </div>

          {/* Menu */}
          <ul className={`menu ${open ? "active" : ""}`}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} onClick={() => setOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Button */}
          <a href="#contact">
            <button className="btn">Let's Talk</button>
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;