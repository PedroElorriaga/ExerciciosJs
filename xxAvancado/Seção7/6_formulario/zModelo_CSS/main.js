class Formulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.senhaEqual = 'root'
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => { // e Carrega o evento de Submit
            console.log(e.target.action) // MOSTRA ONDE SERA REDIRECIONADO http://127.0.0.1:5500/ 
            this.executarEventoDeEnvio(e)
        })
    }

    executarEventoDeEnvio(e) {
        e.target.action = 'https://www.4devs.com.br/gerador_de_cpf' // CAMINHO DE ENVIO
        e.preventDefault() // NÃO ENVIA O FORMULÁRIO
        const verificarSeCampoValido = this.validacaoDeCampo()

        console.log(verificarSeCampoValido)
        if (verificarSeCampoValido) {
            window.alert('Conta Criada')
            this.formulario.submit() // ENVIA O FORMULÁRIO E PARA O DESTINO
        }
    }

    validacaoDeCampo() {
        let campoValido = true

        for (let mensagemDeErro of this.formulario.querySelectorAll('.mensagem-erro')) {
            mensagemDeErro.innerHTML = '' // SE JA TIVER MENSAGEM DE ERRO ELE LIMPA 
        }

        for (let campo of this.formulario.querySelectorAll('.not-null')) {
            const campoDoErro = campo.previousElementSibling.innerHTML // PEGO O VALOR DO IRMÃO ANTERIOR DO ULTIMO CAMPO

            if (!campo.value) { // SE VALOR DO CAMPO ESTIVER VAZIO
                this.criaErro(campo, `* Campo ${campoDoErro} não pode estar vázio`)
                campoValido = false
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validarCpf(campo)) campoValido = false
            }

            if (campo.classList.contains('nome') || campo.classList.contains('sobrenome')) {
                if (!this.validarNome(campo)) campoValido = false
            }

            if (campo.classList.contains('senha')) {
                if (!this.validarSenha(campo)) campoValido = false
                this.senhaEqual = campo.value
            }

            if (campo.classList.contains('repetir-senha')) {
                if (!this.validarRepetirSenha(campo, this.senhaEqual)) campoValido = false
            }
        }

        return campoValido
    }

    validarRepetirSenha(campo) {
        const senhaDoInput = campo.value

        if (campo.value) {
            if (senhaDoInput != this.senhaEqual) {
                this.criaErro(campo, `As senhas digitadas não conferem`)
                return false
            }
        }

        return true
    }

    validarSenha(campo) {
        const senhaDoInput = campo.value

        if (campo.value) {
            if (!(senhaDoInput.length > 5 && senhaDoInput.length < 13)) {
                this.criaErro(campo, `Senha deve ter entre 6 e 12 caracteres`)
                return false
            }
        }

        return true
    }

    validarNome(campo) {
        const nomeDoInput = campo.value
        const regex = /\W|_/
        const campoDoErro = campo.previousElementSibling.innerHTML

        if (regex.test(nomeDoInput)) {
            this.criaErro(campo, `O ${campoDoErro} não pode conter caracteres especiais`)
            return false
        }

        if (campo.value) {
            if (!(nomeDoInput.length > 2 && nomeDoInput.length < 13)) {
                this.criaErro(campo, `${campoDoErro} deve ter entre 3 e 12 caracteres`)
                return false
            }
        }

        return true
    }

    validarCpf(campo) {
        const cpf = new ValidadorDeCpf(campo.value.replace(/\D/g, ''))

        if (campo.value) {
            if (!cpf.validaCPF()) {
                this.criaErro(campo, `CPF inválido`)
                return false
            }
        }

        return true
    }

    criaErro(campo, mensagem) {
        const div = document.createElement('div') // CRIA UMA TAG DIV NO HTML
        div.innerHTML = mensagem // COLOCA A MENSAGEM DE ERRO NO VALOR DA DIV
        div.classList.add('mensagem-erro') // CRIA UMA CLASS COM VALOR 'mensagem-erro'
        // https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp
        campo.insertAdjacentElement('afterend', div) // ADICIONA DEPOIS DO ULTIMO ELELMENTO
    }
}

const valida = new Formulario()