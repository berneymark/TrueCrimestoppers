import React from "react";

import PlaceholderAvatar from "../../assets/img/person-placeholder.jpg";

export default class Founder extends React.Component {
  render() {
    return (
      <main id="our-founder">
        <h1>Our Founder</h1>
        <section id="founder-about">
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
        <section id="founder-quotes">
          <p>
            "As an ex-policeman who also worked professionally with the policing
            ideology in private security management in New Zealand commerce, I
            am proud to have served in both roles. But having the opportunity to
            work alongside people in their workplace gave me greater insight
            into the inability of the security management’s role too prevent the
            internal offending it was employed to prevent. There was no doubt it
            was successful in investigating and prosecuting offending employees,
            which was unfortunately the measure of the role’s success,
            justifying its presence and ongoing need, but it did not prevent
            offending and indeed aggravated it. This lead to my research with
            employees and management which founded The Responsibility Contract
            that prevents offending in the antithesis of the policing ideology."
          </p>
          <p>- Kevin Boyle</p>
        </section>
      </main>
    );
  }
}
