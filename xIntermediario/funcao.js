function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1) // Isso é igual a n = 5 X 4 X 3 X 2 X 1
    }
}

console.log(fatorial(5))