const pegarTarefa = document.querySelector('.input-nova-tarefa');
const adicionarTarefa = document.querySelector('.btn-add-tarefa');
const exibeTarefa = document.querySelector('.exibe-tarefas')

// CRIA  AS LI
function criaLi() {
    const li = document.createElement('li');
    return li;
};

// CRIA E EXIBE A TAREFA NO LI
function criaTarefa(tarefaInput) {
    const li = criaLi();
    li.innerText = tarefaInput;
    exibeTarefa.appendChild(li);
    limpaInput()
    botaoApagar(li)
    salvarTarefas()
};

// TECLA ENTER ADICIONA TAREFA
pegarTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!pegarTarefa.value) return;

        criaTarefa(pegarTarefa.value)
    }
})

// AO CLICAR NO BOTÃO ADICIONA TAREFA
adicionarTarefa.addEventListener('click', function () {
    if (!pegarTarefa.value) return;

    criaTarefa(pegarTarefa.value)
});

// LIMPA O INPUT *pegarTarefa*
function limpaInput() {
    pegarTarefa.value = ''
    pegarTarefa.focus()
}

// BOTÃO DE APAGAR TASK
function botaoApagar(li) {
    li.innerText += ' '
    const btnApagar = document.createElement('button')
    btnApagar.innerText = 'Deletar'
    btnApagar.setAttribute('class', 'delete')
    btnApagar.setAttribute('title', 'Apagar está tarefa') // Cria um atributo
    li.appendChild(btnApagar)
}

// DELETA A TASK
document.addEventListener('click', function (e) {
    const el = e.target // MOSTRA ONDE ESTÁ SENDO CLICADO

    if (el.classList.contains('delete')) { // VERIFICA SE EXISTE ESSA classe existe
        el.parentElement.remove() // DELETA O PAI DO ELEMENTO DELETE
    }

    salvarTarefas()
})



// STRING --> JSON
function salvarTarefas(){
    const task = exibeTarefa.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of task) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Deletar', '').trim() // TRIM REMOVE O ESPAÇO QUE SOBRA AO TIRAR O DELETAR
        // TIRA A PALAVRA DELETAR 
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJson = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJson)
}

// JSON --> STRING
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

adicionaTarefasSalvas()