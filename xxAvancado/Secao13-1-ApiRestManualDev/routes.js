const express = require('express');

const router = express.Router();
const taskController = require('./src/controller/tasksController');
const taskMiddleware = require('./src/middleware/tasksMiddleware');

router.get('/tasks', taskController.showTasks);
router.post('/tasks', taskMiddleware.validacaoEnvios, taskController.creatTask);
router.get('/tasks/:id', taskController.getOneTask);

module.exports = router;
