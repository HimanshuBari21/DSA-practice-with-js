const fizzOrBuzz = (num) => {
    let result = ""
    for (let i = 1; i <= num; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            result += "fizz&buzz"
        }
        else if (i % 3 == 0) {
            result += "fizz"
        }
        else if (i % 5 == 0) {
            result += "buzz"
        }
        else {
            result += i
        }
    }
    return result
}

// fizzOrBuzz(10)

console.log(fizzOrBuzz(69));