import React from 'react';

function LoginForm() {
  return (
    <div className="login-form">
      <h3 className="login-header">Log In</h3>
      <div className="input-container">
        <input className="input-field" type="text" placeholder="Username" />
        <input className="input-field" type="password" placeholder="Password" />
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

export default LoginForm;
