const stockOptimiser = (buySells) => {
    var sortedArray = buySells.slice(0, buySells.length - 1)
    sortedArray = sortedArray.sort((a, b) => { return a - b });

    if ((sortedArray[0] - sortedArray[sortedArray.length - 1]) < 1) {
        if (buySells.indexOf(sortedArray[0]) < buySells.indexOf(sortedArray[sortedArray.length - 1])) {
            console.log("gg");
        }
    }

}

stockOptimiser([2, 12, 5, 18])