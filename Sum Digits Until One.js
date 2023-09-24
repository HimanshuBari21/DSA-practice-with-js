function digSum(n) {

    if (n == 0)

        return 0;

    return (n % 9 == 0) ? 9 : (n % 9);

}

console.log(digSum(65));