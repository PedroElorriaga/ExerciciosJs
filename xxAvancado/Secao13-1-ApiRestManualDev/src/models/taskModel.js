const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks;
}

const insert = async (value) => {
    const insertTask = await connection.execute(`INSERT INTO tasks (titulo, status, created_at) VALUES ("Pedrinho", "${value}", "2023")`);

    return insertTask
}

module.exports = {
    getAll,
    insert
};
