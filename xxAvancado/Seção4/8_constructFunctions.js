
// É NECESSARIO COMEÇAR COM LETRAS MAIÚSCULAS


function Pessoa(nome, sobrenome) {
    // PODEMOS CRIAR VARIAVEIS PRIVADAS
    const variavelPrivada = 'Valor Exemplo'
    // NÃO É NECESSÁRIO UTILIZAR VIRGULA PARA SEPARAR OS MÉTODOS


    this.nome = nome
    this.sobrenome = sobrenome

    // ASSIM COMO AS VARIAVEIS PRIVADAS, TEMOS MÉTODOS PRIVADOS
    const metodoInterno = () => {
        console.log('Método interno')
    }

    this.metodo = () => {
        console.log('Método externo')
        console.log('')
    }

    this.metodoChamarInterno = () => {
        console.log('Chamando método interno...')
        metodoInterno()
    }
}


// A PALAVRA NEW CRIA UM OBEJTO VAZIO, EX; O P1 SERIA USADO COMO O THIS
const p1 = new Pessoa('Pedro', 'Elorriaga')
const p2 = new Pessoa('Leonardo', 'Matos')

p1.metodo()
p1.metodoChamarInterno()