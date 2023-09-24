const isOkstring = (str) => {
    str = str.split("");
    const finalArr = [];
    for (let i = 0; i < str.length; i++) {
        if (/[1-9a-zA-Z]/.test(str[i])) {
            finalArr.push(str[i])
        }
        else {
            continue;
        }
    }
    return finalArr.reverse().join("").toLowerCase();
}

function palindrome(str) {
    return isOkstring(str).split("").reverse().join("") == isOkstring(str)
}


console.log(palindrome("My age is 0, 0 si ega ym."))