import React from 'react';
import styles from './Section.module.css';

const Section = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.homeImage}
        src="https://img.freepik.com/free-vector/happy-tiny-people-near-huge-welcome-word-flat-illustration_74855-10808.jpg?size=626&ext=jpg"
        alt="img_not_found"
      />
    </div>
  );
};

export default Section;
