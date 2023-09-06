const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
}

const insert = async (values) => {
    // assigning multiple variables ou mais conhecido como destructuring
    const {titulo, status} = values;
    const query = `INSERT INTO tasks (titulo, status, created_at) VALUES (?, ?, ?)`;

    const dateUTC = new Date(Date.now()).toLocaleString();

    const insertTask = await connection.execute(query,[titulo, status, dateUTC]);
    return insertTask;
}

module.exports = {
    getAll,
    insert
};
