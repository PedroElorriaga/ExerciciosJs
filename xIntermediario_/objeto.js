// Objeto em JS

let pessoa = {
    nome: 'Pedro',
    idade: 20,
    peso: 70.0,
    engordar(p=0){ // Só executado quando a função é chamada
        console.log('Engordou')
        this.peso += p
    } 
}

console.log(`${pessoa.nome} pesa ${pessoa.peso} kg`)

console.log()
pessoa.engordar(3.3)
console.log(`${pessoa.nome} pesa ${pessoa.peso} kg`)