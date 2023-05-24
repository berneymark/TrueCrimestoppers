import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <a href="/">
          <h3>True Crimestoppers</h3>
        </a>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
