import dotenv from 'dotenv';
import express from 'express';
import alunoRoutes from './src/routes/alunoRoutes';
import userRoutes from './src/routes/usuarioRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import photoRoute from './src/routes/photoRoutes';
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
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/usuarios/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/photo', photoRoute);
  }
}

export default new App().app; // EXPORTANDO JA INSTANCIADO
