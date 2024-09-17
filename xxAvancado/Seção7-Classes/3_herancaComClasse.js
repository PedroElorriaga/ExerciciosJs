class HabilidadesDosFuncionarios {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.trabalhando = false
    }

    iniciandoTrabalho() {
        if (this.trabalhando) {
            console.log(`O ${this.nome} ${this.sobrenome} já está trabalhando`)
            return
        }

        console.log(`${this.nome} está iniciando o serviço`)
        this.trabalhando = true
    }

    finalizandoTrabalho() {
        if (!this.trabalhando) {
            console.log(`O ${this.nome} ${this.sobrenome} já está fora de serviço`)
            return
        }

        console.log(`${this.nome} está encerrando o serviço`)
        this.trabalhando = false
    }
}

// HERANÇA COMEÇA AQUI

class Desenvolvedor extends HabilidadesDosFuncionarios {
    constructor(nome, sobrenome) {
        super(nome, sobrenome)
        this.task = 'Desenvolvendo'
        this.taskAtiva = false
    }
    iniciandoTarefa() {
        if (this.trabalhando) {
            if (this.taskAtiva) {
                console.log(`${this.nome} já está ${this.task}`)
                return
            }

            console.log(`${this.nome} está iniciando sua tarefa`)
            this.taskAtiva = true
            return
        }

        console.log(`${this.nome} ${this.sobrenome} inicie sua jornada primeiro`)
    }

    finalizandoTarefa() {
        if (!this.taskAtiva) {
            console.log(`${this.nome} não está mais ${this.task}`)
            return
        }

        console.log(`${this.nome} está encerrando sua tarefa`)
        this.taskAtiva = false
    }

    finalizandoTrabalho() {
        if (!this.trabalhando) {
            console.log(`O ${this.nome} ${this.sobrenome} já está fora de serviço`)
            return
        }
        if (this.taskAtiva) {
            console.log(`Termine sua tarefa antes de encerrar o serviço`)
            return
        }

        console.log(`${this.nome} está encerrando o serviço`)
        this.trabalhando = false
    }
}


const funcionarioUm = new HabilidadesDosFuncionarios('Pedro', 'Elorriaga')
funcionarioUm.iniciandoTrabalho()
funcionarioUm.iniciandoTrabalho()
const workingCondition = funcionarioUm.trabalhando ? 'Sim' : 'Não'
console.log('Trabalhando? ' + workingCondition)


// CRIANDO OBJETO DE HERANÇA

const programador = new Desenvolvedor('Pedro', 'Henrique')

console.log('-'.repeat(100))
programador.iniciandoTarefa()
programador.iniciandoTrabalho()
programador.iniciandoTarefa()
programador.iniciandoTarefa()
programador.finalizandoTrabalho()
programador.finalizandoTarefa()
programador.finalizandoTrabalho()
programador.finalizandoTrabalho()