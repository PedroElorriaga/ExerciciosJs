/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('alunos', [
      {
        nome: 'Pedro',
        sobrenome: 'Elorriaga',
        email: 'sccp@local.com',
        idade: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Leonardo',
        sobrenome: 'Matagal',
        email: 'santosB@local.com',
        idade: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down() {},
};
