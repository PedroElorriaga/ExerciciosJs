function createCar(model, brand, color, category) {
    const car = {
        carModel: model,
        carbrand: brand,
        carColor: color,
        carCategory: category
    }

    return car
}


const carroUm = createCar('Evoque R-Dynamic', 'Range Rover', 'Red', 'SUV')

for (i in carroUm) {
    console.log(carroUm[i])
}


function CreateCarConstructor(model, brand, color, category) {
    this.model = model,
        this.brand = brand,
        this.color = color,
        this.category = category
}

const carroDois = new CreateCarConstructor('Velar', 'Range Rover', 'Black', 'SUV')

console.log(carroDois)