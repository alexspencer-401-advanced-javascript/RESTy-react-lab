import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Form from '../Form';
import styles from './Resty.css';

export default function Resty() {
  return (
    <>
      <div className={styles.Resty}>
        <Header />
        <Form />
        <Footer />
      </div>
    </>
  );
}
