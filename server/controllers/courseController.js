// controllers/courseController.js
const Course = require('../models/course');

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
}
};

exports.createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json({ message: 'Môn học đã được tạo thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourseData = req.body;
    await Course.findByIdAndUpdate(id, updatedCourseData);
    res.status(200).json({ message: 'Thông tin môn học đã được cập nhật thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.status(200).json({ message: 'Môn học đã được xóa thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { schedule } = req.body;
    const course = await Course.findById(id);
    course.schedule.push(schedule);
    await course.save();
    res.status(200).json({ message: 'Lịch học đã được thêm vào môn học' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSchedule = async (req, res) => {
  try {
    const { id, scheduleId } = req.params;
    const updatedScheduleData = req.body;
    const course = await Course.findById(id);
    const scheduleIndex = course.schedule.findIndex(schedule => schedule._id === scheduleId);
    if (scheduleIndex !== -1) {
      course.schedule[scheduleIndex] = updatedScheduleData;
      await course.save();
      res.status(200).json({ message: 'Thông tin lịch học đã được cập nhật thành công' });
    } else {
      res.status(404).json({ message: 'Lịch học không tồn tại' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSchedule = async (req, res) => {
  try {
    const { id, scheduleId } = req.params;
    const course = await Course.findById(id);
    const updatedSchedule = course.schedule.filter(schedule => schedule._id !== scheduleId);
    course.schedule = updatedSchedule;
    await course.save();
    res.status(200).json({ message: 'Lịch học đã được xóa thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
