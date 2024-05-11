// index.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');
const app = express();
const PORT =  3000;

mongoose.connect('mongodb+srv://kientruc:1OuXFqIHzj25rBWR@cluster0.ebderwa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
app.use(cors({ origin: 'http://localhost:3001' }));

app.use(express.json());
app.use('/users', userRoutes);
app.use('/courses',courseRoutes);
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
