import React, { useState } from 'react';
import styles from './Contact.module.css';

const ContactPage = ({ saveData }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (firstName && lastName && email && phone) {
      const formData = { firstName, lastName, email, phone };
      saveData(formData); 
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className={styles.container}>
    <h1 className={styles.heading}>Contact Page</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email Id:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
