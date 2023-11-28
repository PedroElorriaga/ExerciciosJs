import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Usuario from '../models/Usuario';
import Foto from '../models/Foto';

const models = [Aluno, Usuario, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection)); // INICIA CONEXÃO DE CADA MODEL
models.forEach((model) => model.associate && model.associate(connection.models)); // FAZ A CONEXÃO DE ASSOCIAÇÃO DE CADA MODEL
