const express = require('express')
const app = express()

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST,  GET,  UPDATE, DELETE


app.get('/', (requisicao, resposta) => {
    resposta.send('Hello world')
})

app.get('/contato', (requisicao, resposta) => {
    resposta.send('Obrigado pelo contato')
})

app.get('/formulario', (req, res) => {
    res.send(`
        <form action="/formulario" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `)
})

// CRUD = POST
app.post('/formulario', (req, res) => {
    res.send(`Recebi o formulário`)
})

// SETA A PORTA
app.listen(port = 3000, () => {
    console.log(`Acessar http://localhost:${port}`)
    console.log('Servidor rodando na porta: ', port)
})
// EXECUTEI O SERVIDOR PELO CMD NO CAMINHO: D:\Documentos\ExerciciosJs\xxAvancado\Seção8-Fetch\Nodejs\Express\Aula_1
// USEI: NODE SERVER.JS E PARA PARAR DE EXECUTAR APERTEI CTRL + C