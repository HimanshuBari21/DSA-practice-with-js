const mixMaxPair = (inputArray) => {

    if (!(inputArray.length % 2 == 0)) {
        return "Length of Array should be even"
    }

    inputArray = inputArray.sort((a, b) => a - b)

    const firstHalf = []
    for (let i = 0; i < inputArray.length / 2; i++) {
        firstHalf.push(inputArray[i])
    }

    const secondHalf = []
    for (let i = (inputArray.length / 2); i < inputArray.length; i++) {
        secondHalf.push(inputArray[i])
    }

    const resultArray = []
    for (let i = 0; i < inputArray.length / 2; i++) {
        resultArray[i] = [];

        for (let j = 0; j < firstHalf.length; j++) {
            resultArray[j].push(firstHalf[i])
        }
        for (let j = 0; j < secondHalf.length; j++) {
            resultArray[j].push(secondHalf[i])
        }
    }

    console.log(resultArray);
}

mixMaxPair([12, 74, 5, 7, 41, 9, 36, 45])