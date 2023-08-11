const express = require('express');
const app = express();
const homeRouter = require('./routes/homeRoute');
const taskRouter = require('./routes/taskRoute');

app.use(express.json());

app.use(
    homeRouter,
    taskRouter
);

module.exports = app;
