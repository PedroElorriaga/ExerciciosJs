function Produtos(nomeProduto, valor, estoque) {
    this.nomeProduto = nomeProduto
    this.valor = valor

    let variavelEstoque = estoque // AQUI CRIA-SE UMA VARIAVEL PRIVADA PARA NÃO TER LOOPS
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        //  GET PEGA A O VALOR DA VARIAVEL
        get: function () {
            return variavelEstoque
        },
        // SET CONFIGURA O VALOR DA VARIAVEL
        set: function (valor) {
            if (typeof valor !== 'number') {
                console.log('Vai se fuder')
                return
            }

            variavelEstoque = valor
        }

    })

}

const camiseta = new Produtos('camiseta', 100, 3)
console.log(camiseta) // RETORNA Produtos { nomeProduto: 'camiseta', valor: 100, estoque: [Getter/Setter] }
console.log(camiseta.estoque) // RETORNA 3
camiseta.estoque = 'Mandando string'
console.log(camiseta.estoque)

console.log('-'.repeat(100))

function produtosFactory(nomeProduto, valor, estoque) {
    return {
        nomeProduto,
        valor,

        get exibeEstoque() {
            return estoque
        },
        set exibeEstoque(valor) {
            estoque = valor
            return estoque
        }

    }
}

const iphone = produtosFactory('Iphone 14 Pro Max', 8500, 1)
console.log(iphone.exibeEstoque) // EXIBE 1