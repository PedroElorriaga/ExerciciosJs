const taskModel = require('../models/taskModel');

exports.showTasks = async (req, res) => {
    const tasks = await taskModel.getAll();

    res.json(tasks[0]);
};

exports.test = async (req, res) => {
    const taskInsert = await taskModel.insert('OK');

    res.json(taskInsert);
};