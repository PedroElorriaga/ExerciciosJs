// OBJECT.GETOWNPROPERTYDESCRIPTOR(NOME DA VARIAVEL, 'objeto') PEGA A DESCIÇÃO DAS CONFIGURAÇÕES


const produtos = {
    produto: 'Caneca',
    valor: 30
}
console.log(Object.getOwnPropertyDescriptor(produtos, 'produto'))
// RETORNA 
/* {
  value: 'Caneca',
  writable: true,
  enumerable: true,
  configurable: true
} */


Object.defineProperty(produtos, 'produto', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(produtos, 'produto'))
// RETORNA
/* {
  value: 'Caneca',
  writable: false, ALTERADO
  enumerable: true,
  configurable: true
} */