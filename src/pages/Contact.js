import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <main id="contact-page">
        <h1>Contact</h1>
        <form id="contact-form">
          <input
            type="name"
            placeholder="Enter your name..."
          />
          <input
            type="email"
            placeholder="Enter your email..."
          />
          <input
            type="text"
            placeholder="Enter your message..."
          />
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </main>
    );
  }
}
