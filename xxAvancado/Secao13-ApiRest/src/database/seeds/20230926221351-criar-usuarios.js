/** @type {import('sequelize-cli').Migration} */
const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'Robertinha',
        email: 'robertinhafeijao@arroz.com',
        password_hash: await bcryptjs.hash('carroblindado', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Danrran',
        email: 'xj53@motu.com.br',
        password_hash: await bcryptjs.hash('pneufurado', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Branca',
        email: 'whiskassaches@comida.org',
        password_hash: await bcryptjs.hash('potedeleite', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Xaulin',
        email: 'xaulinmatadordeporco@gmail.com',
        password_hash: await bcryptjs.hash('xuxa69', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down() {},
};
