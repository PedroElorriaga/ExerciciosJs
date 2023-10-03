
function getDup(value) {

    const procurarDup = value.filter((item, index, arr) => arr.indexOf(item) !== index);



    return procurarDup
}

const arr = ['Carro', 'Moto', 'Caminhão', 'Lancha', 'Carro']
console.log(getDup(arr))


arr.filter((item, index, array) => console.log(index, array.indexOf(item)))