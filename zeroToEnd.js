const zero2End = (inArr) => {

    inArr = inArr.sort((a, b) => a - b)

    var arrOfZero = []

    for (let i = 0; i < inArr.length; i++) {
        if (inArr[i] === 0) {
            arrOfZero.push(inArr[i])
        }
    }

    for (let i = 0; i < arrOfZero.length; i++) {
        inArr.shift(i)
    }

    for (let i = 0; i < arrOfZero.length; i++) {
        inArr.push(0)
    }

    console.log(inArr);

}

zero2End([56, 95, 66, 89, 0, 0, 67, 23, 1, 6, 0, 0, 0, 5, 7, 6, 0, 6, 4, 2])