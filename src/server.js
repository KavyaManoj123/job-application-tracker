import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || "https://job-application-tracker-42k6.onrender.com";

const startServer = async () => {
  try {
    await connectDB(); // wait for DB

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('DB connection failed:', error);
    process.exit(1); // stop app
  }
};

startServer();
