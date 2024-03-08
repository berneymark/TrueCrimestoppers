import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <main id="about-page">
        <section id="about-hero">
          <h1>Our Mission</h1>
          <p>
            Our Mission is to truly prevent crime before it can hurt anyone.
          </p>
        </section>
        <section id="about-features">
          <div>
            <div class="about-circle"></div>
            <h1>Our Founder</h1>
          </div>
          <div>
            <div class="about-circle"></div>
            <h1>Our History</h1>
          </div>
          <div>
            <div class="about-circle"></div>
            <h1>Our Future</h1>
          </div>
        </section>
      </main>
    );
  }
}
