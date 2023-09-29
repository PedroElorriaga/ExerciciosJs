
function getDup(value) {

    const procurarDup = value.filter((item, index, arr) => arr.indexOf(item) !== index);



    return procurarDup
}

const arr = [5, 5, 3, 1, 2, 4]
console.log(getDup(arr))