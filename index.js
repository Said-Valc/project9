import express from 'express';
import cors from 'cors';
import tasksRoutes from './routes/tasks.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Роуты задач
app.use('/api/tasks', tasksRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
