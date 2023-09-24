const isAphabet = (c) => {
    return typeof ch === "string" && ch.length === 1 && /[A-Za-z]/.test(ch);
}

const revAlphOnly = (str) => {
    const strArr = str.split("")
    const temp = str.split("").reverse().filter(x => /[A-Za-z]/.test(x));
    let j = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (/[A-Za-z]/.test(str[i])) {
            strArr[i] = temp[j]
            j++
        }
    }
    return strArr.join("");
}

console.log(revAlphOnly("sea!$hells3"));


// a = ["a", "v", "d"];

// const fun = (abc) => {
//     let b = [];
//     for (let i = 0; i < abc.length; i++) {
//         b.push(abc[i]);
//     }
//     return b
// }

// console.log(fun(a));