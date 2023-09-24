const isPowerOf3 = (n) => {

    for (let i = 0; i < 50; i++) {
        if (Math.pow(3, i) == n) {
            return true;
        }
    }

    return false

}

console.log(isPowerOf3(759));