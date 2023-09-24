function filledOrders(order, k) {

    order = order.sort((a, b) => a - b)

    console.log(order);

    var counter = 0;

    for (let i = 0; i <= order.length; i++) {

        if (k >= order[i]) {
            k -= order[i]
            counter++
            console.log("order: " + order[i]);
            console.log("remaining: " + k);
        }

        else {
            return "No of Order possible :" + counter
        }

    }
}

console.log(filledOrders([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110], 500));