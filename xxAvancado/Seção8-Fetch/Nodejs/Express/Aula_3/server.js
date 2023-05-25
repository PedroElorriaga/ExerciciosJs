// EXEMPLO UTILIZANDO NODEMON

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
    <form action="/recebidos" method="POST">
    Senha: <input type="password", name="senha">
    <button>Enviar</button>
    </form>
    `)
})

// NA ROTA COLOCAMOS PARAMETROS EM UMA CHAVE, (?) É USADO PARA INFORMAR QUE O PARAMETRO É OPCIONAL
app.get('/testes/:id?', (req, res) => {
    console.log(req.params)
    if (req.params.id) res.send('Estou rodando no parametro: ' + req.params.id)

    res.send('Olá paginas teste')
})

app.get('/query', (req, res) =>{
    res.send(req.query.valor)
})

app.post(path = '/recebidos', (req, res) => {
    res.send('A senha recebida foi: ' + req.body.senha)
})

app.listen(3000, () => {
    console.log('Servidor sendo executado na porta: 3000')
    console.log('Acessar http://localhost:3000')
})