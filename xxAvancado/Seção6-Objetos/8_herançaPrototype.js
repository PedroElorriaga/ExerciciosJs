

// VAMOS SUPOR QUE A LOJA POSSUI 3 TIPOS DE PRODUTOS CANECA, CAMISA, SHORTS


function Produtos(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produtos.prototype.aumentar = function (quantidade) {
    console.log(`O produto ${this.nome} aumento R$ ${quantidade}`)
    return this.preco += quantidade
}

Produtos.prototype.diminuir = function (quantidade) {
    console.log(`O produto ${this.nome} diminuiu R$ ${quantidade}`)
    return this.preco -= quantidade
}


// CAMISA
function Camisa(nome, preco, tamanho) {
    // USAREMOS O CALL PARA PASSAR OS ARGUMENTOS QUE PRECISO DA FUNÇÃO PAI
    Produtos.call(this, nome, preco)
    this.tamanho = tamanho
}

/* Object. create() é usado para criar um novo objeto e conectá-lo ao 
protótipo de um objeto existente.*/
Camisa.prototype = Object.create(Produtos.prototype)
Camisa.prototype.constructor = Camisa

const camisa = new Camisa('Nike', 100, 'M')
console.dir(camisa)
camisa.aumentar(100)
console.log(camisa)

console.log('-'.repeat(100))

// CANECA
function Caneca(nome, preco, cor) {
    Produtos.call(this, nome, preco)
    this.cor = cor
}

Caneca.prototype = Object.create(Produtos.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('Caneca Superman', 65, 'Interior Preto')
console.log(caneca)
caneca.diminuir(15)
console.log(caneca)


console.log('-'.repeat(100))

// SHORTS
function Shorts(nome, preco, tamanho) {
    Produtos.call(this, nome, preco)
    this.tamanho = tamanho
}

Shorts.prototype = Object.create(Produtos.prototype)
Shorts.prototype.constructor = Shorts

Shorts.prototype.desconto = function (percentual) {
    const valorAtual = this.preco
    this.preco = this.preco - (this.preco * (percentual / 100))
    console.log(`Você recebeu um desconto de R$${valorAtual - this.preco} no produto`)
}

const shorts = new Shorts('Shorts Nike', 130, 'G')
console.log(shorts)
shorts.desconto(30)
console.log(shorts)