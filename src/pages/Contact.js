import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <main id="contact-page">
        <section class="content">
          <h1>Contact</h1>
          <section class="container" id="contact-container">
            <section id="contact-data">
            <p>You can contact us by any of the below means.</p>
            <p>You can also send us a message in the below message box.</p>
            <div id="contact-details">
              <p>Phone Number: 027 1234 5678</p>
              <p>Email: truecrimestoppers@fakeemail.com</p>
            </div>
          </section>
          <section id="contact-form-sec">
            <form id="contact-form">
              <div>
                <label>Name: </label>
                <input
                  type="name"
                  placeholder="Enter your name..."
                />
              </div>
              <div>
                <label>Email: </label>
                <input
                  type="email"
                  placeholder="Enter your email..."
                />
              </div>
              <div>
                <label>Message: </label>
                <input
                  type="text"
                  placeholder="Enter your message..."
                />
              </div>
              
              
              <input
                type="submit"
                id="contact-submit"
                value="Submit"
              />
            </form>
          </section>
        </section>
          
          
          
          
        </section>
      </main>
    );
  }
}
