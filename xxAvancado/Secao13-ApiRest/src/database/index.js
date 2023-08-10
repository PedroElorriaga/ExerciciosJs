import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Cliente from '../models/Cliente';
import User from '../models/User';

const models = [Cliente, User];

const connection = new Sequelize(databaseConfig);

models.forEach((dado) => dado.init(connection));
// CONEXÃO
