import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <main id="contact-page">
        <h1>Contact</h1>
        <p>You can contact us by any of the below means.</p>
        <p>You can also send us a message in the below message box.</p>
        <div id="contact-details">
          <p>Phone Number: 027 1234 5678</p>
          <p>Email: truecrimestoppers@fakeemail.com</p>
        </div>
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
