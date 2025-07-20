const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

const app = express();

app.use(cors());  
app.use(express.json());


// API Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/services', require('./routes/serviceRoutes'));
app.use('/bookings', require('./routes/bookingRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});