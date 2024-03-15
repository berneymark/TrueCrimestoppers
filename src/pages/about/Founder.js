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
          <blockquote>
            As an ex-policeman who also worked professionally with the policing
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
            that prevents offending in the antithesis of the policing ideology.
            <br />
            <br />
            Peers were uncomfortable with my research findings, preferring to
            celebrate the success of prosecution outcomes that justified their
            ongoing roles. This unfortunately transferred into actively opposing
            and trying to discredit me, which exposed another fault in policing
            having sole stewardship of societal crime prevention method and
            advice, allowing it to control the message around committed crime,
            obfuscating its failure to prevent and obstructing it being
            questioned or challenged with new innovation.
            <br />
            <br />I believe policing is unwitting of the reasons for its failure
            in crime prevention which is why public scrutiny and discussion is
            needed about the merits of my fundings and conclusions that moved
            regular people who were victims of the fault to found{" "}
            <a href="/about/the-responsibility-contract">
              The Responsibility Contract.
            </a>
            <p>- Kevin Boyle</p>
          </blockquote>
        </section>
      </main>
    );
  }
}
