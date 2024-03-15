import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <main id="about-page">
        <section id="about-hero">
          <h1>Our Mission</h1>
          <p>
            Empowering communities to build a safer future by bringing about a
            world <br /> where we take responsibility for our actions, and how
            they affect those around us.
          </p>
        </section>
        <section id="about-features">
          <div>
            <div class="about-circle"></div>
            <h2 class="feature-links">
              <a href="/about/founder">Our Founder</a>
            </h2>
          </div>
          <div>
            <div class="about-circle"></div>
            <h2 class="feature-links">
              <a href="/about/the-responsibility-contract">Our Idea</a>
            </h2>
          </div>
          <div>
            <div class="about-circle"></div>
            <h2 class="feature-links">
              <a href="/about/future">Our Future</a>
            </h2>
          </div>
        </section>
      </main>
    );
  }
}
