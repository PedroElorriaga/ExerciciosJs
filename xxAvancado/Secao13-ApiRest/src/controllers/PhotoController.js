import multer from "multer";
import multerConfig from '../config/multer';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('photo');

class UsuarioController {
  store(req, res) {
    // VERIFICANDO SE HÁ ALGUM ERRO
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          erro: [error.code],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;

      const postPhoto = await Foto.create({ originalname, filename, aluno_id });

      return res.json(postPhoto);
    });
  }
}

export default new UsuarioController();
