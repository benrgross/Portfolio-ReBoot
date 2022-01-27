import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <header className="header">
      <div className="header__section header__section--media">
        <a href="/">
          <img
            src="/img/ben-avatar.jpg"
            alt="headshot of man on hilltop in Los Angeles"
          />
        </a>
      </div>
      <div className="header__section header__section-menu"></div>
    </header>
  );
}

export default NavBar;
