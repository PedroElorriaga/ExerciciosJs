import { Sequelize, Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O campo deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 25],
            msg: 'A senha deve ter entre 8 e 25 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    // Ecryptação de senha
    this.addHook('beforeSave', async (usuario) => {
      usuario.password_hash = await bcryptjs.hash(usuario.password, 8);
    });
    return this;
  }
}
