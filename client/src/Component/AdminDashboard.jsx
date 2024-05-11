import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    Course_Name: '',
    Course_ID: '',
    Credit_Hours: '',
    Instructor: '',
    Classroom: '',
    Class_Time: '',
    Department_Code: '',
    Max_Students: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [editingCourseId, setEditingCourseId] = useState(null);

  useEffect(() => {
    fetchCourses();
    Modal.setAppElement('#root');
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:3000/courses');
      setCourses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault(); 
    try {
      await axios.post('http://localhost:3000/courses', newCourse);
      setNewCourse({
        Course_Name: '',
        Course_ID: '',
        Credit_Hours: '',
        Instructor: '',
        Classroom: '',
        Class_Time: '',
        Department_Code: '',
        Max_Students: ''
      });
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateCourse = async (e) => {
    e.preventDefault(); 
    try {   
      await axios.put(`http://localhost:3000/courses/${selectedCourse._id}`, selectedCourse);
      fetchCourses();
      setIsModalOpen(false);
      setSelectedCourse(null);
      setEditingCourseId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (course) => {
    setIsModalOpen(true);
    setSelectedCourse(course);
    setEditingCourseId(course._id);
  };

  return (
    <div>
      <h2>Trang Giao Diện của Admin</h2>

      <div>
        <h3>Tạo mới khóa học</h3>
        <form onSubmit={handleCreateCourse}>
          <input type="text" value={newCourse.Course_Name} onChange={(e) => setNewCourse({ ...newCourse, Course_Name: e.target.value })} placeholder="Tên khóa học" />
          <input type="text" value={newCourse.Course_ID} onChange={(e) => setNewCourse({ ...newCourse, Course_ID: e.target.value })} placeholder="ID khóa học" />
          <input type="number" value={newCourse.Credit_Hours} onChange={(e) => setNewCourse({ ...newCourse, Credit_Hours: e.target.value })} placeholder="Số giờ tín chỉ" />
          <input type="text" value={newCourse.Instructor} onChange={(e) => setNewCourse({ ...newCourse, Instructor: e.target.value })} placeholder="Giảng viên" />
          <input type="text" value={newCourse.Classroom} onChange={(e) => setNewCourse({ ...newCourse, Classroom: e.target.value })} placeholder="Phòng học" />
          <input type="text" value={newCourse.Class_Time} onChange={(e) => setNewCourse({ ...newCourse, Class_Time: e.target.value })} placeholder="Thời gian học" />
          <input type="text" value={newCourse.Department_Code} onChange={(e) => setNewCourse({ ...newCourse, Department_Code: e.target.value })} placeholder="Mã bộ môn" />
          <input type="number" value={newCourse.Max_Students} onChange={(e) => setNewCourse({ ...newCourse, Max_Students: e.target.value })} placeholder="Số lượng sinh viên tối đa" />
          <button type="submit">Tạo mới</button>
        </form>
      </div>

      <div>
        <h3>Danh sách khóa học</h3>
        <ul>
          {courses.map(course => (
            <li key={course._id}>
              <div>
                <strong>Tên Môn Học : </strong> {course.Course_Name}
              </div>
              <div>
                <strong>Số giờ tín chỉ:</strong> {course.Credit_Hours}
              </div>
              <div>
                <strong>Giảng viên:</strong> {course.Instructor}
              </div>
              <div>
                <strong>Phòng học:</strong> {course.Classroom}
              </div>
              <div>
                <button onClick={() => openModal(course)}>Cập nhật</button>
                <button onClick={() => handleDeleteCourse(course._id)}>Xóa</button>
              </div>
              {editingCourseId === course._id && (
                <div>
                  <form onSubmit={handleUpdateCourse}>
                    <input type="text" value={selectedCourse?.Course_Name} onChange={(e) => setSelectedCourse({ ...selectedCourse, Course_Name: e.target.value })} />
                    <input type="text" value={selectedCourse?.Course_ID} onChange={(e) => setSelectedCourse({ ...selectedCourse, Course_ID: e.target.value })} />
                    <input type="number" value={selectedCourse?.Credit_Hours} onChange={(e) => setSelectedCourse({ ...selectedCourse, Credit_Hours: e.target.value })} />
                    <input type="text" value={selectedCourse?.Instructor} onChange={(e) => setSelectedCourse({ ...selectedCourse, Instructor: e.target.value })} />
                    <input type="text" value={selectedCourse?.Classroom} onChange={(e) => setSelectedCourse({ ...selectedCourse, Classroom: e.target.value })} />
                    <input type="text" value={selectedCourse?.Class_Time} onChange={(e) => setSelectedCourse({ ...selectedCourse, Class_Time: e.target.value })} />
                    <input type="text" value={selectedCourse?.Department_Code} onChange={(e) => setSelectedCourse({ ...selectedCourse, Department_Code: e.target.value })} />
                    <input type="number" value={selectedCourse?.Max_Students} onChange={(e) => setSelectedCourse({ ...selectedCourse, Max_Students: e.target.value })} />
                    <button type="submit">Cập nhật</button>
                    <button onClick={() => setIsModalOpen(false)}>Đóng</button>
                  </form>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
