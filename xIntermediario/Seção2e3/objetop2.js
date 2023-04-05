// Nesta aula aprendemos sobre como criar objetos de forma simplificada

function criaCliente (nome, numero, endereco){
    return {
        nome,
        numero,
        endereco
    }
}

const cliente1 = criaCliente('Pedro', '11973352818', 'Barueri')
const cliente2 = criaCliente('Ana', '1193327543', 'Osasco')

console.log(cliente1.nome,'\b', cliente2.nome)