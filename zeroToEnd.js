// Put all the zeros to end

const zero2End = (inArr = [0]) => {

    // get numbers of zeros
    var numberOfZeros = 0;
    inArr.forEach((x) => {
        x === 0 ? numberOfZeros++ : null;
    })

    // create an array of zeros having length of numberOfZeros
    const zerosArray = Array(numberOfZeros).fill(0);

    // removed all the zeros from array
    inArr = inArr.filter((x) => x !== 0);

    console.info([...inArr, ...zerosArray]);

}

zero2End([56, 95, 66, 89, 0, 0, 67, 23, 1, 6, 0, 0, 0, 5, 7, 6, 0, 6, 4, 2])