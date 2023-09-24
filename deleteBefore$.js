const deleteBeforeDollar = (inputArr) => {

    const lettersAfter$ = []

    for (let i = inputArr[0].indexOf("$") + 1; i < inputArr[0].length; i++) {
        lettersAfter$.push(inputArr[0][i])
    }

    if (inputArr[1] === lettersAfter$.join("")) {
        return true
    }
    return false
}

console.log(deleteBeforeDollar(["s$pot", "pot"]));