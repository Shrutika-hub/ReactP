import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div>
    <title>Contact Us</title>
  <body>
    {/* <header>
      <div className="container">
        <h1>Contact Us</h1>
      </div>
    </header> */}

    <section id="contact">
      <div className="container">
        <form>
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <div className="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required/>
          </div>
          <div className="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>

   
  </body>


    </div>

  )
}

export default Contact
