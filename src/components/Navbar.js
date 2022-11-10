import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <h3>The Responsibility Contract</h3>
        <ul>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
