function findSubstring(s, k) {
    // Write your code here
    if (s.indexOf(/.([aeiou])$/.test) == -1) {
        return "Not found!"
    }
    var looper = s.length - k;
    const subStrOfString = [];

    for (let i = 0; i < looper; i++) {
        subStrOfString.push(s.subString(i, k + 1))

    }

    console.log(subStrOfString);

    var vowelCounter = []

    for (let i = 0; i < subStrOfString.length; i++) {
        for (let j = 0; j <= subStrOfString[i].length; j++) {
            if (/.*([aeiou])$/.test(subStrOfString[i][k])) {
                vowelCounter.push(j)
            }
        }
    }

    return vowelCounter.indexOf(Math.max(vowelCounter))

}

console.log(findSubstring("himanshuBari", 0));