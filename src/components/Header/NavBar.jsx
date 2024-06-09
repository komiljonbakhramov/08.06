import React from "react";

const NavBar = () => {
  return (
    <nav id="headerNavbar">
      <ul>
        <li>
          <a href="#categories">
            Categories <i className="pi pi-angle-down"></i>
          </a>
        </li>
        <li>
          <a href="#whatsNew">What's new</a>
        </li>
        <li>
          <a href="#sales">Sales</a>
        </li>
        <li>
          <a href="#help">Help</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
