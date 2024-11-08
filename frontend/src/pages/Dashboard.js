import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <p>Welcome, {user.name}! Your role is {user.role}.</p>
      ) : (
        <p>Please log in to see your dashboard.</p>
      )}
    </div>
  );
}

export default Dashboard;
