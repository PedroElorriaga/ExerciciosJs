const express = require('express');
const taskController = require('../controllers/taskController');

const route = express.Router();

route.get('/tasks', taskController.getTasks);

module.exports = route;
