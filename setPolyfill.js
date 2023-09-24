// remove duplicates from array of numbers

const duplicateRemover = (arr) => {

    // const a = []

    return arr.filter((item, index) => {

        var firstIndex = arr.indexOf(item);
        
        var currentIndex = index;

        // for debugging
        // a.push({ item, firstIndex, currentIndex, isRepeated: firstIndex === currentIndex })
        // if (arr.length === index + 1) {
        //     console.table(a);
        // }
        
        return currentIndex == firstIndex;
    })

}

const sampleArr = [14, 54, 75, 14, 25, 14];

console.log(duplicateRemover(sampleArr));