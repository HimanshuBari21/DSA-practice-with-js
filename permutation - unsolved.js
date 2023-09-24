function swap(inputString, first, last) {

    inputString = inputString.split('');
    let temp = inputString[first];
    inputString[first] = inputString[last];
    inputString[last] = temp

    return inputString.join('')

}

function permutation(inputStr) {

    if (inputStr.length === 0) { return [''] }
    if (inputStr.length === 1) { return [inputStr] }
    if (inputStr.length === 2) { return [inputStr[0] + inputStr[1], inputStr[1] + inputStr[0]] }

    var start = 0, end = inputStr.length - 1;

    var outputArray = []

    if (start === end) {

        return true

    } else {

        for (let i = 0; i < inputStr.length; i++) {

            outputArray.push(swap(inputStr, start, end))
            permutation(outputArray[i])
            outputArray.push(swap(inputStr, start, end))

        }


        return outputArray

    }

}


console.log(permutation('ABC'));
// console.log(swap('hello', 1, "hello".length - 1));