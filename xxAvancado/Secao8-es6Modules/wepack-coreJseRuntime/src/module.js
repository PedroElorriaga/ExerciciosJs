function promise(){
    return new Promise((resolve, reject) => {
        console.log('Conectado')

        resolve()
    })
}


export default async function executar() {
    await promise()
    console.log('Sempre executarei por ultimo')
}

