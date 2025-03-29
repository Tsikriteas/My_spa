import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Επικοινωνία</h2>
      <form>
        <label>
          Όνομα:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Μήνυμα:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Αποστολή</button>
      </form>
    </section>
  );
}

export default Contact;
