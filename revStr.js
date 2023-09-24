const reverseString = (str) => {
    str = str.split("");
    const revStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        revStr.push(str[i])
    }
    return revStr.join("");
}

console.log(reverseString("DataStructure"));