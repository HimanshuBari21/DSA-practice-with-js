const arr1 = [12, 55, 74, 102], arr2 = [10, 14, 46, 87, 105, 106];

function sortedArrayMerger(ar1, ar2) {
    ar1.push(...ar2);
    return ar1.sort(((a, b) => { return a - b }))
}

console.log(sortedArrayMerger(arr1, arr2))