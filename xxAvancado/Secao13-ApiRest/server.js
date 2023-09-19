import app from './app';

require('dotenv').config();

const port = 3000;

app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`Acessar em http://localhost:${port}`);
});
