import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <h1>Welcome to the CSR Platform</h1>
      <Link to="/login">Login</Link> | <Link to="/signup"> </Link>
      <p>This is the home page for all users.</p>
    </div>
  );
}

export default Home;
