function rand(min = 1, max = 10) {
    const num = Math.random() * (max - min) + min 
    return Math.floor(num)  // LEMBRANDO, O FLOOR ARREDONDA UM NUMERO INTEIRO PRA BAIXO
    // O CEIL FAZ O CONTRARIO
}

console.log(rand())
