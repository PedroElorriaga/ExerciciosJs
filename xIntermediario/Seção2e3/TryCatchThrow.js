function soma(x,y) {
    if (x !== Number(x) || y !== Number(y)){
        throw new Error('Os valores precisam ser números') // Lança uma execeção definida pelo usuário
    }
    
    return x + y
}

try {
    console.log(`A soma de ${x} + ${y} = `, soma(10, 10))
    console.log(soma('10', 10))

} catch (error) { 
    console.log(error) // Tratamento de erro

} finally {
    console.log('Sempre é executado') // Sempre é executado
    
}