import React from 'react';
import styles from './Home.module.css';
import Navbar from './Navbar';
import Section from './Section';

const Home = ({ clearLocalStorage, storedData }) => {
  const handleClear = () => {
    const confirmation = window.confirm('Are you sure you want to clear the data?');
    if (confirmation) {
      clearLocalStorage();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <p className={styles.welcomeText}>Welcome to the Home Page</p>
      <p className={styles.storedData}>
        Stored Data: {storedData ? `${storedData.firstName} ${storedData.lastName}` : 'No data'}
      </p>
      <button className={styles.clearButton} onClick={handleClear}>
        Clear
      </button>
      <Section />
    </div>
  );
};

export default Home;
