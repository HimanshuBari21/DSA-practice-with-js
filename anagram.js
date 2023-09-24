const isAnagram = (str1, str2) => {
    if (str1.length != str2.length) {
        return false
    }
    for (let i = 0; i < str1.length; i++) {
        if (str1.split("").sort()[i] == str2.split("").sort()[i]) {
            continue
        }
        else {
            return false
        }
    }
    return true
}

console.log(isAnagram("himmat", "haimatm")); //false
console.log(isAnagram("himmat", "mihmat")); //true
