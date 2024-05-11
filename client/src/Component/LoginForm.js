import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/login', { email, password });
      console.log(response.data);

      // Kiểm tra vai trò của người dùng
      if (response.data.isAdmin) {
        // Nếu là admin, chuyển hướng đến trang Admin Dashboard
        navigate('/admin-dashboard');
      } else {
        // Nếu không phải là admin, chuyển hướng đến trang Student Dashboard
        navigate('/student-dashboard');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Email hoặc mật khẩu không đúng');
    }
  };

  return (
    <div class='login-container'>
      <h2>CỔNG ĐĂNG KÍ HỌC PHẦN SINH VIÊN</h2>
      <h3>Đăng nhập vào hệ thống </h3>

      <form onSubmit={handleSubmit} class="form-imput">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Đăng nhập</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;
