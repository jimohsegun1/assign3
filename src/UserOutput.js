import React from 'react';
import './UserOutput.css';

const UserOutput = ({ username }) => {
  return (
    <div className="user-output">
      <p className="username">{username}</p>
      <p>UserOutput component.</p>
    </div>
  );
};

export default UserOutput;
