function mostrarHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Data inválida')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false

    })

}

try {
    const hora = mostrarHora()
    console.log(hora)

} catch (err) {
    console.log(err)

} finally {
    console.log('Tenha um bom dia.')

}
