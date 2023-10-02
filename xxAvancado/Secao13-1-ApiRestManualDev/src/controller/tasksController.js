const taskModel = require('../models/taskModel');

exports.showTasks = async (req, res) => {
    try {
        const tasks = await taskModel.getAll();

        res.json(tasks[0]);
    } catch(e) {
        return console.log('ERRO');
    }
};

exports.creatTask = async (req, res) => {
    try {
        await taskModel.insert(req.body);

        res.json({"Status": "Enviado"});
    } catch (e) {
        return console.log('ERRO')
    }
   
};

exports.getOneTask = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.json({ ERRO: ['Missing ID']});
        }

        const infoTest = await taskModel.getOne(id);

        if (infoTest[0].length < 1) {
            return res.json({ RETORNO: ['ID ' + id + ' não existe']});
        }
    
        return res.status(200).json(infoTest[0]);
    } catch (e) {
        return console.log('ERRO')
    }
}
