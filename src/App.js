import React, { useState } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('John');

  const usernameChangedHandler = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="app">
      <h1>User Output:</h1>
      <UserInput change={usernameChangedHandler} username={username} />
      <UserOutput username={username} />
    </div>
  );
};

export default App;
