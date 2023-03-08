const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body)
const backgroundColorBody = estiloBody.backgroundColor
console.log(backgroundColorBody)

for (let p of ps){
    let cor = p
    cor.classList.add('fundoEstilizado') // Adicionado no CSS
    cor.style.backgroundColor = backgroundColorBody // Fundo do paragrafo
}