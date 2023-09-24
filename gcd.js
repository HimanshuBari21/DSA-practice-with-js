// Greatest Common Divisor

const findGCD = (num1, num2) => {
    let gcdNum = 0

    for (let i = 2; i < num1 + num2; i++) {
        if ((num1 % i == 0) && (num2 % i == 0)) {
            gcdNum = i;
        }
    }
    if (gcdNum < 2) {
        return 1;
    }
    return gcdNum;
}

console.log(findGCD());