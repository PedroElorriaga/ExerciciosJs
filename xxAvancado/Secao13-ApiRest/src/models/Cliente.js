import Sequelize, { Model } from 'sequelize';

// classe criada de acordo com documentação do sequelize
export default class Cliente extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }
}
