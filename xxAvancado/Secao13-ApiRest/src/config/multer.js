import multer from 'multer';
import { resolve, extname } from 'path';

export default {
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, '..', '..', 'uploads'));
        },
        filename: (req, file, cb) => {
            const nomeUnico = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, nomeUnico + extname(file.originalname));
        }
    }),
}
