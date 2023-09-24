// remove duplicates from array of numbers

const duplicateRemover = (arr) => {

    return arr.filter((item, index) => arr.indexOf(item) == index)

}

const sampleArr = [14, 54, 75, 14, 25, 14];

console.log(duplicateRemover(sampleArr));