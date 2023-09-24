function permutation(str) {

    const l = str.length;
    var possibleCombinations = Math.pow(l, 2)

    const output = []

    for (let i = 0; i < l - 1; i++) {

        let temp = ''

        possibleCombinations = possibleCombinations / 2

        for (let j = 0; j < possibleCombinations; j++) {

            temp += str[i]
            output[j] += temp

        }

    }

    return output

}


permutation('BARI').map((x) => {
    console.log(x);
})