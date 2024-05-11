const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Tạo mới môn học
router.post('/', courseController.createCourse);

// Lấy danh sách khóa học
router.get('/', courseController.getCourses);
// Cập nhật thông tin môn học
router.put('/:id', courseController.updateCourse);

// Xóa môn học
router.delete('/:id', courseController.deleteCourse);

// Thêm lịch học cho môn học
router.post('/:id/schedule', courseController.addSchedule);

// Cập nhật lịch học của môn học
router.put('/:id/schedule/:scheduleId', courseController.updateSchedule);

// Xóa lịch học của môn học
router.delete('/:id/schedule/:scheduleId', courseController.deleteSchedule);

module.exports = router;
