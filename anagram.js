// check if we can reorganize the str2 to create str1 or vice versa

const isAnagram = (str1, str2) => {
    
    // return false if length don't match
    if (str1.length !== str2.length) {
        return false
    }

    // we will first sort them and check if we have an same element on same position in both of them
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

console.info(isAnagram("himmat", "haimat")); //false
console.info(isAnagram("himmat", "mihmat")); //true
