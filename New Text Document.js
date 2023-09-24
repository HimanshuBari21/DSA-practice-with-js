const Question1 = (arrIn, p, d) => {

    const N = arrIn.length;
    var tempArr = [];

    if ((p <= 0) || (p >= N)) {
        console.log("Position (p) should be greater then 0 and less than array size (N)");
        return 0
    }

    if (d === 1) {

        for (let i = (N - p); i < N; i++) {
            tempArr.push(arrIn[i]);
        }

        for (let i = 0; i < (N - p); i++) {
            tempArr.push(arrIn[i]);
        }

        console.log(tempArr);
    }
    else if (d === 0) {

        for (let i = p; i < N; i++) {
            tempArr.push(arrIn[i])
        }

        for (let i = 0; i < p; i++) {
            tempArr.push(arrIn[i]);
        }

        console.log(tempArr);

    }
    else {
        console.log("Direction (d) should be 0 (left) or 1 (right)");
    }



}

// Test Cases

Question1([1, 3, 2, 7, 4, 6], 3, 1)
Question1([12, 6, 8, 9, 2, 4, 21], 2, 1)
Question1([12, 6, 8], 5, 1)
Question1([12, 2, 78, 69, 44, 88, 66, 11, 32, 5, 4, 21], 6, 1)
Question1([12], 0, 1)
Question1([12, 7, 6, 6], -5, 1)

Question1([1, 3, 2, 7, 4, 6], 3, 0)
Question1([12, 6, 8, 9, 2, 4, 21], 2, 0)
Question1([12, 6, 8], 5, 0)
Question1([12, 2, 78, 69, 44, 88, 66, 11, 32, 5, 4, 21], 6, 0)
Question1([12], 0, 0)
Question1([12, 7, 6, 6], -5, 0)



Question1([1, 3, 2, 7, 4, 6], 2, -2)
Question1([12, 6, 8, 9, 2, 4, 21], 2, 5)