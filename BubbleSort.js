const BubbleSort = (inputArray) => {

    const ArrLength = inputArray.length;

    for (let i = 1; i <= ArrLength; i++) {

        for (let j = 0; j < ArrLength - i; j++) {

            if (inputArray[j] > inputArray[j + 1]) {

                let temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;

            }

        }

    }
    console.log(inputArray);

}

BubbleSort([45, 66])