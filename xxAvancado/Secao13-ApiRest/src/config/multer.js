import multer from 'multer';
import { resolve, extname } from 'path';

export default {
    // CONTROLA TIPOS DE ARQUIVOS QUE ENTRAM
    fileFilter: (req, file, cb) => {
        if (file.mimetype != 'image/png' && file.mimetype != 'image/jpeg') {
            return cb(new multer.MulterError('O arquivo precisa ser PNG ou JPEG.', false));
        }

        return cb(null, true);
    },
    storage: multer.diskStorage({
        // DESTINO DO UPLOAD
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, '..', '..', 'uploads'));
        },
        // NOME DO ARQUIVO
        filename: (req, file, cb) => {
            const nomeUnico = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, nomeUnico + extname(file.originalname));
        }
    }),
}
