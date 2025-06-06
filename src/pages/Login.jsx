import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert('Please enter Name, Email, and Password.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = users.find(
      (user) =>
        user.name === form.name &&
        user.email === form.email &&
        user.password === form.password
    );

    if (matchedUser) {
      alert(`Login Successful! Welcome ${matchedUser.name}`);
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      window.location.href = '/home'; 
    } else {
      alert('Invalid name, email, or password.');
    }
  };

  return (
    <div className="login-page">
      <div className="loginimg"></div>
      <div className="login-form">
        <img src="/corner.png" alt="corner decoration" className="corner-img" />
        <img src='/loginlogo.png' alt="Gigfloww Logo" className="logoimg" />
        <p className="welcome-login">Welcome to Gigfloww</p>
        <p className="subtitle-login">Seamless HR operations start now!<br />Sign in</p>
        <div className="form-container">
          <form onSubmit={handleLogin}>
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input-field"
              onChange={handleChange}
              value={form.name}
              required
            />

            <label className="label">Work Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your work email"
              className="input-field"
              onChange={handleChange}
              value={form.email}
              required
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input-field"
              onChange={handleChange}
              value={form.password}
              required
            />

            <button type="submit" className="submit-btn">Sign in</button>
          </form>

          <p className="conditions">By clicking on Sign in, <a href='' className='link'>you agree to our Terms and Conditions</a></p>
        </div>
        <p className="register">New to Gigfloww? <a href="/" className='link'>Register</a></p>
      </div>
    </div>
  );
}

export default Login;
