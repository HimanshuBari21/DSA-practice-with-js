const fibonacciGenerator = (n) => {
    let fibonacciArr = [1, 1];
    let elem;
    if (n <= 1) {
        return fibonacciArr[1];
    }
    else {
        for (let i = 2; i < n; i++) {
            elem = fibonacciArr[i - 1] + fibonacciArr[i - 2];
            fibonacciArr.push(elem);
        }
        return fibonacciArr;
    }
}

console.table(fibonacciGenerator(2000));