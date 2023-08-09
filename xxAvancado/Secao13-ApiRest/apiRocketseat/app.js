const express = require('express');
const data = require('./data.json');

const app = express();

app.use(express.json());

app.get('/clientes', (req, res) => {
  res.json(data);
});

app.get('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const clienteUnico = data.find((client) => client.id == id);
  //  Find procura o elemento informado na "base de dados"

  if (!clienteUnico) return res.status(204).json();

  res.json(clienteUnico);
});

app.post('/clientes', (req, res) => {
  const { nome, sobrenome } = req.body;

  res.json({ nome, sobrenome });
});

app.put('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const clienteUpdated = data.find((client) => client.id == id);

  if (!clienteUpdated) return res.status(204).json();

  const { name } = req.body;
  //  Pegar parametro passado na requisição
  clienteUpdated.name = name;

  res.json(clienteUpdated);
});

app.delete('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const clienteFlitrado = data.filter((client) => client.id != id);

  res.json(clienteFlitrado);
});

app.listen(3000, () => {
  console.log('Server running');
});
