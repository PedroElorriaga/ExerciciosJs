var data = new Date() // Pega data
var semana = data.getDay() // Pega elemento da data

switch (semana){
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda-feira')
        break
    
    case 2:
        console.log('Terça-feira')
        break
    
    case 3:
        console.log('Quarta-feira')
        break
    
    case 4:
        console.log('Quinta-feira')
        break

    case 5:
        console.log('Sexta')
        break
    
    case 6:
        console.log('Sabádo')
        break
    
    default:
        console.log('Dia inválido')
        break
}