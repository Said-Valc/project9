import express from 'express';
const router = express.Router();

// Фейковые данные
let tasks = [
    { id: 1, title: 'Learn Express', completed: false },
    { id: 2, title: 'Build REST API', completed: true }
];

// Получить все задачи
router.get('/', (req, res) => {
    res.json(tasks);
});

// Получить задачу по ID
router.get('/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Not found');
    res.json(task);
});

// Добавить задачу
router.post('/', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Обновить задачу
router.put('/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Not found');

    task.title = req.body.title ?? task.title;
    task.completed = req.body.completed ?? task.completed;

    res.json(task);
});

// Удалить задачу
router.delete('/:id', (req, res) => {
    tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    res.status(204).send();
});

export default router;
