import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <main id="about-page">
        <section id="about-left">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section id="about-right">
          <img
            src="https://i.picsum.photos/id/99/500/500.jpg?hmac=g5PuEwygcoIAMFLxROuKdbmOGA_FTIllnc7hUFl3Rkk"
            alt="placeholder"
          />
        </section>
      </main>
    );
  }
}
