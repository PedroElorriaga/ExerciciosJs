const taskModel = require('../models/tasksModel');

exports.getTasks = async (req, res) => {
    const tasks = await taskModel.getAll();
    return res.status(200).json(tasks);
};