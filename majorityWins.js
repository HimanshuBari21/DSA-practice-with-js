const howMany = (arr, n) => {
    return arr.filter((x) => (x === n)).length
}

const isMajority = (arr) => {
    let counterArr = []
    for (let i = 0; i < arr.length; i++) {
        counterArr.push(howMany(arr, arr[i]))
    }
    if (counterArr.sort((a, b) => b - a)[0] > (arr.length) / 2) {
        return "has majority"
    }
    else {
        return "no majority"
    }
}

const myArr = [14, 45, 14];
// console.log(isMajority(myArr));
console.log(isMajority(myArr));
// console.log(howMany(myArr2, 78));