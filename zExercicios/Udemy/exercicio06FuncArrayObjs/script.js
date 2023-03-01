let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')
let peso = document.getElementById('peso')
let altura = document.getElementById('altura')
let resultado = document.getElementById('resultado')

let clientes = [
    
];

contador = 0
function exibirResultado () {
    const objt = {nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value}
    clientes.push(objt)
    console.log(clientes)  
    resultado.innerHTML += `<p>Usuário ${clientes[contador].nome} ${clientes[contador].sobrenome} pesa ${clientes[contador].peso} kg tem altura de ${clientes[contador].altura}</p>`
    contador++
}
