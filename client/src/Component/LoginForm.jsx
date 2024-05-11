import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import logo from "../asset/logo.png";
import iuh from "../asset/iu1.png";
import iuh2 from "../asset/iuh2.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      console.log(response.data);

      // Kiểm tra vai trò của người dùng
      if (response.data.isAdmin) {
        // Nếu là admin, chuyển hướng đến trang Admin Dashboard
        navigate("/admin-dashboard");
      } else {
        // Nếu không phải là admin, chuyển hướng đến trang Student Dashboard
        navigate("/student-dashboard");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Email hoặc mật khẩu không đúng");
    }
  };

  return (
    <div class="body2">
      <div class="login-container" >
        <div class="title-header">
          <div class="img-title-header">
            <img
              src={iuh}
              alt="hiiiiiiiiiiiiiiiiiii"
              style={{ height: 145, width: 1140 ,marginLeft:5}}
            />
          </div>
          <div class="img-title-header2">
            <img
              src={iuh2}
              alt="hiiiiiiiiiiiiiiiiiii"
              style={{ height: 500, width: 1140 , marginLeft:5 , marginTop:20   }}
            />
          </div>


        </div>

        <div class="modal-login">
          <img
            src={logo}
            alt="Logo của hệ thống"
            style={{ height: 145, width: 450, resize: "contain" }}
          />
          <h2>CỔNG ĐĂNG KÍ HỌC PHẦN</h2>
          <text>SINH VIÊN</text>
          <h3>Đăng nhập vào hệ thống</h3>
          <form onSubmit={handleSubmit} class="form-imput">
            <p> Email </p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p> password </p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Đăng nhập</button>
          </form>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </div>
      <footer style={{backgroundColor: "white"}}>
        <div class="footer">
          <p>&copy; 2024 Trường Đại học Công nghiệp TP. Hồ Chí Minh</p>
          <p>
            Địa chỉ: Số 12 Nguyễn Văn Bão, Phường 4, Quận Gò Vấp, TP. Hồ Chí
            Minh
          </p>
          <p>Điện thoại: 0326026288</p>
          <p>Email: toanlemale11234@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginForm;
