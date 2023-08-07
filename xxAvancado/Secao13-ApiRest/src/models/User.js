import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// classe criada de acordo com documentação do sequelize
export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome inválido',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email inválida',
          },
        },
      },
      senha_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      senha: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 22],
            msg: 'Senha inválida',
          },
        },
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      user.senha_hash = await bcryptjs.hash(user.senha, 8);
      //  SALT(8) dado um salt aleatório, a mesma senha nunca será igualmente hasheada duas vezes
    });

    return this;
  }
}
