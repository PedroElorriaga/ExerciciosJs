fetch('pessoas.json')
    .then(response => {
        return response.json()
    })
    .then(resultado => {
        mostraOsDados(resultado)
    })

function mostraOsDados(valor) {
    const tabela = document.createElement('table')
    const resultado = document.querySelector('.resultadoJson')

    // DEIXA o valor em ordem ALFABETICA
    valor.sort(function (a, b) {
        if (a.nome < b.nome) {
            return -1
        } else {
            return 1
        }
    })
    for (let dado of valor) {
        const tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = dado.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = dado.estado
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = dado.email
        tr.appendChild(td)

        tabela.appendChild(tr)
    }
    resultado.appendChild(tabela)
}