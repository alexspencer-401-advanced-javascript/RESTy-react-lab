import React from 'react';
import Header from '../components/Header';
import Footer from './Footer';
import History from '../components/containers/History';
import Form from '../components/containers/Form';

export default function App() {
  return (
    <>
      <Header />
      <History />
      <Form />
      <Footer />
    </>
  );
}
