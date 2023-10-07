import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { hours } from '../data';

function CookieStandAdmin() {
  const [reports, setReports] = useState([]);

  const onCreate = (newCookieStand) => {
    // Calculate and update the reports with the new cookie stand
    const updatedReports = [...reports, newCookieStand];
    setReports(updatedReports);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', fontFamily: 'Arial, sans-serif' }}>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <Main onCreate={onCreate} hours={hours} reports={reports} />
      <Footer reports={reports} />
    </div>
  );
}

export default CookieStandAdmin;
