import React from 'react';
import './UserInput.css';

const UserInput = ({ onInputSubmit }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onInputSubmit(e.target.value);
      e.target.value = '';
    }
  };

  return (
    <div className="user-input">
      <input type="text" onKeyPress={handleKeyPress} placeholder="Enter username" />
    </div>
  );
};

export default UserInput;
