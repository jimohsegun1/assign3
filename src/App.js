import React, { useState } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './App.css';

const App = () => {
  const [usernames, setUsernames] = useState([]);

  const handleInputSubmit = (newUsername) => {
    setUsernames([...usernames, newUsername]);
  };

  return (
    <div className="app">
      <h1>Input your details below:</h1>
      <UserInput onInputSubmit={handleInputSubmit} />

      {usernames.map((username, index) => (
        <UserOutput key={index} username={username} />
      ))}
    </div>
  );
};

export default App;
