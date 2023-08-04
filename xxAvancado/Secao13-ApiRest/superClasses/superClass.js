class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  welcome() {
    console.log(`Olá ${this.nome}`);
    console.log(`Sua idade é ${this.idade}`);
  }
}

class Estudante extends Pessoa {
  constructor(nome, idade, media) {
    super(nome, idade);
    this.media = media;
  }

  hello() {
    super.welcome();
    console.log(`Sua média é de ${this.media}`);
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, turma) {
    super(nome, idade);
    this.turma = turma;
  }

  hello() {
    super.welcome();
    console.log(`Sua turma é o ${this.turma}`);
  }
}

const estudante = new Estudante('Pedro', 21, 9.5);
const professor = new Professor('Vilela', 34, '2C');

estudante.hello();
professor.hello();
