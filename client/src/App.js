import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Component/LoginForm';
import AdminDashboard from './Component/AdminDashboard';
import StudentDashboard from './Component/StudentDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
