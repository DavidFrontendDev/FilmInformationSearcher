import React, { useState } from "react";
import logo from "../assets/header-image.png"; // Importa la imagen

import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fi-header">
      <nav className="fi-nav">
        <img src={logo} width={90} alt="Logo of the cinema searcher page" />
        <h2 className="fi-header-title">FILM INFORMATION SEARCHER</h2>
      </nav>
    </header>
  );
}

export default Header;
