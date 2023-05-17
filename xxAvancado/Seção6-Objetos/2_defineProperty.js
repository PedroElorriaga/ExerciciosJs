

// sintax  Object.defineProperty(objeto, 'nomeChave' {configurações})



function ObjetoProperties(produto, valor, estoque) {
    this.produto = produto
    this.valor = valor


    Object.defineProperty(this, 'estoque', {
        enumerable: true, // MOSTRA A CHAVE ex: 'estoque'
        value: estoque, // INDICA O VALOR QUE APARECERA
        writable: false, // INDICA SE O VALOR É EDITAVEL
        configurable: true // INDICA SE A PROPRIEDADE É CONFIGURAVEL
    })


    // DEIXANDO O VALOR EDITAVEL
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // MOSTRA A CHAVE ex: 'estoque'
        value: estoque, // INDICA O VALOR QUE APARECERA
        writable: true, // INDICA SE O VALOR É EDITAVEL
        configurable: true // INDICA SE A PROPRIEDADE É CONFIGURAVEL
    })
}

const product = new ObjetoProperties('Camiseta', 35, 10)
console.log(product) // RETORNA ObjetoProperties { produto: 'Camiseta', valor: 35, estoque: 10 }

const product2 = new ObjetoProperties('Bermuda', 60, 3)
product2.estoque = 2
console.log(product2) // RETORNA ObjetoProperties { produto: 'Bermuda', valor: 60, estoque: 2 }


console.log('----------------------------')
// EXIBINDO SOMENTE AS CHAVES
const chaves = product
console.log(Object.keys(chaves)) // RETORNA [ 'produto', 'valor', 'estoque' ]
