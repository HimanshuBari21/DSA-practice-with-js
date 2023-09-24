
const arrayInter = (arr1, arr2) => {
    var interValue = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                interValue.push(arr1[i])
            }
        }
    }

    return interValue.filter((item, index) => index === interValue.indexOf(item))
}

const a = [12, 45, 78, 88, 52, 12, 96, 88, 88];
const b = [78, 56, 52, 45, 45, 45, 88, 90, 120, 170];


console.log(arrayInter(a, b));