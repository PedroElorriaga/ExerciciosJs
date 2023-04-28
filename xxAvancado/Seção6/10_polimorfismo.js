function BancoSantander(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

BancoSantander.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo indisponível!`)
        return this.verSaldo()
    }

    console.log(`Saque efetuado com sucesso!`)
    console.log(`R$ -${valor}`)
    this.saldo -= valor
    return this.verSaldo()
}

BancoSantander.prototype.depositar = function (valor) {
    if (valor <= 0) {
        console.log(`Valor de depósito inválido!`)
        return
    }

    console.log(`Depósito enviado com sucesso!`)
    console.log(`R$ +${valor}`)
    this.saldo += valor
    return this.verSaldo()
}

BancoSantander.prototype.verSaldo = function () {
    console.log(`Ag/C: ${this.agencia}/${this.conta}`)
    console.log(`Saldo: ${this.saldo}`)
    console.log()
    return
}

function ContaCorrenteSantander(agencia, conta, saldo, limite) {
    BancoSantander.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrenteSantander.prototype = Object.create(BancoSantander.prototype)
ContaCorrenteSantander.prototype.constructor = ContaCorrenteSantander

ContaCorrenteSantander.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo Indisponível!`)
        return this.verSaldo()
    }

    console.log(`Saque efetuado com sucesso!`)
    console.log(`R$ -${valor}`)
    this.saldo -= valor
    return this.verSaldo()
}

ContaCorrenteSantander.prototype.verSaldo = function () {
    console.log(`Ag/C: ${this.agencia}/${this.conta}`)
    console.log(`Saldo Conta Corrente: ${this.saldo}`)
    console.log()
    return
}

function ContaPoupancaSantander(agencia, conta, saldo) {
    BancoSantander.call(this, agencia, conta, saldo)
}

ContaPoupancaSantander.prototype = Object.create(BancoSantander.prototype)
ContaPoupancaSantander.prototype.constructor = ContaPoupancaSantander


ContaPoupancaSantander.prototype.verSaldo = function () {
    console.log(`Ag/C: ${this.agencia}/${this.conta}`)
    console.log(`Saldo Conta Poupanca: ${this.saldo}`)
    console.log()
    return
}


const contaCorrente1 = new ContaCorrenteSantander('2060', '040332-2', 0, 100)
contaCorrente1.sacar(100)
contaCorrente1.depositar(100)



const contaPoupanca1 = new ContaPoupancaSantander('2080', '030227-4', 0)
contaPoupanca1.depositar(10)
contaPoupanca1.sacar(110)