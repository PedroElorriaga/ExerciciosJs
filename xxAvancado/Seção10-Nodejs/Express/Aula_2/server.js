// EXEMPLO UTILIZANDO NODEMON

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <form action="/recebidos" method="POST">
    Senha: <input type="password", name="senha">
    <button>Enviar</button>
    </form>
    `)
})

app.post(path = '/recebidos', (req, res) => {
    res.send('Senha recebida no Caminho: ' + path)
})

app.listen(3000, () => {
    console.log('Servidor sendo executado na porta: 3000')
    console.log('Acessar http://localhost:3000')
})