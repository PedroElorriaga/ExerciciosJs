const taskModel = require('../models/taskModel');

exports.showTasks = async (req, res) => {
    const tasks = await taskModel.getAll();

    res.json(tasks[0]);
};

exports.creatTask = async (req, res) => {
    await taskModel.insert(req.body);

    res.json({"Status": "Enviado"});
};