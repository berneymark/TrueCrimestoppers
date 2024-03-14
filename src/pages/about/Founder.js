import React from "react";

import PlaceholderAvatar from "../../assets/img/person-placeholder.jpg";

export default class Founder extends React.Component {
  render() {
    return (
      <main id="our-founder">
        <h1>Our Founder</h1>
        <section id="founder-content">
          <section id="founder-text">
            <p>
              The founder of True Crimestoppers, Kevin Boyle, was a policeman in
              New Zealand in the 1970s and a security advisor to New Zealand
              public companies throughout the 1980s-90s.
            </p>
            <p>
              As a security manager, he learned that the policing ideology
              transferred into the proprietary management role did not prevent
              repetitive internal offending and appeared to exacerbate it.
              Kevin’s research in the field founded The Responsibility Contract,
              a social contract needed to overcome the obstructive criminal code
              of silence caused by the policing ideology, which opened the
              floodgates to enabling unprecedented intervention and prevention
              outcomes, saving previous losses totalling multi-millions.
            </p>
          </section>
          <img
            class="avatar"
            src={PlaceholderAvatar}
            alt="Placeholder of Kevin"
          />
        </section>
      </main>
    );
  }
}
