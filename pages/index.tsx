import React from 'react';
import Register from '../components/Register';
import Login from '../components/Login';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Register />
      <Login />
    </div>
  );
};

export default Home;