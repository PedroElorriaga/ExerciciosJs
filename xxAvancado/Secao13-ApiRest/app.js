import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import './src/database'; // chamando CONEXÃO

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/clientes', userRoutes);
  }
}

export default new App().app; // EXPORTANDO JA INSTANCIADO
