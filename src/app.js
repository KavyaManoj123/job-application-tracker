import express from 'express';
import cors from 'cors';
import jobRoutes from './routes/job.routes.js';
import errorHandler from './middleware/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/jobs', jobRoutes);

app.get('/', (req, res) => {
  res.send('API running 🚀');
});

// error handler
app.use(errorHandler);

export default app;
