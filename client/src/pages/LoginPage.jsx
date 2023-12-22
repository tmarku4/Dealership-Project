import React from "react";
import { useState } from 'react';
import { Link, useNavigate, useOutletContext } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { attemptLogin, logout } = useOutletContext();

  const navigate = useNavigate();

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    attemptLogin({ username, password });
    navigate('/');
  }

  return (
    <>
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChangeUsername}
          value={username}
          placeholder="Username..."
        />
        <input
          type="text"
          onChange={handleChangePassword}
          value={password}
          placeholder="Password..."
        />
        <button type="submit" value="Login">
          Login
        </button>
      </form>
      <div className="instring-button-container">
        <p>
          If you don't have a Login, please{" "}
          <Link to="/signup" className="instring-button">
            Signup
          </Link>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
