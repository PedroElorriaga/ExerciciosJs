const cars = [
    { id: 1, carModel: 'Evoque', carRelease: 2020 },
    { id: 2, carModel: '911', carRelease: 2019 },
    { id: 3, carModel: 'Cayenne', carRelease: 2022 }
]

let carChose = '911'

console.log(cars.find((car) => {
    return car.carModel == carChose
}))