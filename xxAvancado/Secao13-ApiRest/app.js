import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/usuarioRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
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
    this.app.use('/usuarios/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app; // EXPORTANDO JA INSTANCIADO
