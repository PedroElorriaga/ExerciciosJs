// FUNÇÕES GERADORAS USAM * AO LADO DO function*

function* geradora() {
    yield 'valor 1'

    yield 'valor 2'

    yield 'valor 3'
}

const g1 = geradora()

console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next())

console.log()

function* geradora2() {
    yield 1

    yield 2

    yield 3
}

function* geradora3() {
    yield * geradora2()

    yield 4

    yield 5

    yield 6
}

const g2eg3 = geradora3()
for (let valores of g2eg3) {
    console.log(valores)
}