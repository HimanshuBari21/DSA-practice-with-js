const templeAndflower = (noOfFlowers, givenInTemple) => {

    const solvingPattern = []

    solvingPattern.push(noOfFlowers)
    for (let i = 0; i < 3; i++) {

        noOfFlowers *= 2;  // because of river x2
        solvingPattern.push(noOfFlowers)

        noOfFlowers -= givenInTemple // because of temple -givenInTemple
        solvingPattern.push(noOfFlowers)

    }

    if (noOfFlowers == 0) {

        return `Right... Your are awesome\nThis is the solving pattern ${solvingPattern}`;

    }
    else {

        return `Wrong... Please try again with different input.\nThis is the solving pattern ${solvingPattern}`;

    }
}

console.log(templeAndflower(707, 808));