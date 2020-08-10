import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

export default function Home() {
  const history = useHistory();

  return (
    <div style={{ textAlign: 'center' }}>
      <Header page={'home'} />
      <br />
      <br />
      <h1>Home Page</h1>
    </div>
  );
}
