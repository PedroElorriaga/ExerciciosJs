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