import { Sequelize, Model } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vázio.',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vázio.',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }
  // REFERENCIANDO O FK
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
