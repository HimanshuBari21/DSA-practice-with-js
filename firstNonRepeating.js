const firstNonRepeating = (inStr) => {

    inStr = inStr.split("")
    console.log(inStr);

    for (let i = 0; i < inStr.length; i++) {
        if ((inStr.indexOf(inStr[i])) == (inStr.lastIndexOf(inStr[i]))) {
            return (`The Non-Repeatig Character is ${inStr[i]}`)
        }
    }
    return "No Non-Repeating Character Found!"

}

console.log(firstNonRepeating("himanshuhimansh"));