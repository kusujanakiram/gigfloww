import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find((user) => user.email === form.email);
    if (existingUser) {
      alert('Email already registered.');
      return;
    }

    users.push({
      name: form.name,
      email: form.email,
      password: form.password
    });

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', form.name);

    alert('Registered Successfully!');
    navigate('/login'); 
  };

  return (
    <div className="register-page">
      <div className="register-img"></div>
      <div className="register-form">
        <div className="logo-section">
          <img src="/logo.png" alt="Gigfloww Logo" className="logo-img" />
          <h1 className="logo-text">GIGFLOWW</h1>
        </div>

        <p className="welcome">Welcome to Gigfloww</p>
        <h2 className="register-title">Register</h2>
        <p className="subtitle">Seamless HR operations start now!<br />Sign up</p>

        <form onSubmit={handleRegister}>
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="input-field"
            onChange={handleChange}
            value={form.name}
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="input-field"
            onChange={handleChange}
            value={form.email}
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="input-field"
            onChange={handleChange}
            value={form.password}
          />

          <label className="label">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="input-field"
            onChange={handleChange}
            value={form.confirmPassword}
          />

          <button type="submit" className="submit-btn">Register</button>
        </form>

        <p className="login">Already on Gigfloww? <a href="/login">Login</a></p>

        <div className="social-buttons">
          <button className="social-btn google-btn" type="button">
            <span className="icon"><FcGoogle size={25} /></span>
            <span className="btn-text">Register with Google</span>
          </button>
          <button className="social-btn apple-btn" type="button">
            <span className="icon"><FaApple size={25} /></span>
            <span className="btn-text">Register with Apple</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
