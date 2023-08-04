




/* SINTAX defineProperties(objeto, {
    variavel: {configurações}
})*/


function Produtos(produto, preco, estoque) {
    Object.defineProperties(this, {
        produto: {
            enumerable: true,
            value: produto,
            writable: false,
            configurable: false
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        },

        estoque: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        }
    })

    this.aumentarEstoque = (qtd) => {
        console.log(`Estoque do produto ${this.produto} aumentou de -> ${this.estoque} para -> ${qtd + this.estoque}`)
        this.estoque += qtd;
    }
}

function separador() {
    console.log('-'.repeat(100))
}

const produto1 = new Produtos('Iphone 14 Pro', 8000, 2)
console.log(produto1.produto, produto1.preco, produto1.estoque) // RETORNA phone 14 Pro 8000 2
separador()

const produto2 = new Produtos('Iphone 14 Pro Max', 9500, 1)
console.log(produto2.produto, produto2.preco, produto2.estoque) // RETORNA Iphone 14 Pro Max 9500 1

produto2.aumentarEstoque(5)

console.log(produto2.produto, produto2.preco, produto2.estoque) // RETORNA Iphone 14 Pro Max 9500 5
