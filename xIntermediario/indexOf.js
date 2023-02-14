// Forma de verificar se o elemento ja se encontra no array
let lista = [2,5,9,'ovo']

let variavel = 'ovo'

//    Function  Variavel  Array
function inLista(valor1, valor2){
    if(valor2.indexOf(valor1) != -1){
        return true
    } else{
        return false
    }
}

// Function variavel  Array
if (inLista(variavel, lista)){
    console.log('Arquivo encontrado na lista')
} else {
    console.log('Arquivo NÃO encontrado na lista')
}


console.log()

// Outra forma simples de verificar

if (lista.includes(variavel)){
    console.log('[INCLUDE] Arquivo encontrado!')

} else {
    console.log('[INLCUDE] Arquivo NÃO encontrado')
}