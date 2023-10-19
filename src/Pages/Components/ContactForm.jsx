import React from "react";
import css from "../Css/ContactForm.module.css";

function ContactForm() {
  return (
    <div className={css.formContainer}>
      <form action="" className={css.form}>
        <p>Get In Touch</p>
        <input type="text" className={css.username} placeholder="Name"/>
        <input type="email" className={css.email} placeholder="Email"/>
        <input type="text" className={css.message} placeholder="Message"/>
        <button type="submit">Send Message</button>
      </form>
      <div className={css.contact_details}>
        <h2>Contact</h2>
        <div>
          <p>info@wanderways.com</p>
          <p>+1-555-123-4567</p>
          <p>[Your Physical Address] [City,State,ZIP]</p>
        </div>
        <div>
          <strong>Business Hours:</strong>
          <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;