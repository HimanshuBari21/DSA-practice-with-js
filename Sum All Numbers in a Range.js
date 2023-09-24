// Sum All Numbers in a Range

function sumAll(arr) {

    arr = arr.sort((a, b) => a - b)
    var sumOfAll = 0

    for (let i = arr[0]; i <= arr[1]; i++) {
        sumOfAll += i
    }

    return sumOfAll

}

console.log(sumAll([1, 4]));