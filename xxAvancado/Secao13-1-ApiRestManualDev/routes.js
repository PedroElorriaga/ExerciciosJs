const express = require('express');

const router = express.Router();
const taskController = require('./src/controller/tasksController');

router.get('/tasks', taskController.showTasks);
router.get('/tasksInsert', taskController.test);

module.exports = router;
