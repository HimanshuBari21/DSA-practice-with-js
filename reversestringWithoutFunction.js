const revString = (inputString) => {
    inputString = inputString.split('\n');
    inputString[1] = inputString[1].split(" ");

    var reversedString = [];

    for (let i = inputString[1].length - 1; i >= 0; i--) {

        reversedString.push(inputString[1][i])

    }
    console.log(reversedString.join(" "))
}

revString("4\n845 454 965 85")

// console.log("4\n1 4 3 2".split("\n"))