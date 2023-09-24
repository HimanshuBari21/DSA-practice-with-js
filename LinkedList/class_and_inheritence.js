class Human {
    constructor(name) {
        this.name = name
        this.leg = 2
        this.hand = 2
        this.eyes = 2
    }
}

class DifferntlyAbled extends Human {
    constructor(name, leg) {
        super(name)
        this.leg = leg
    }
}

var Himanshu = new Human("Himanshu Y. Bari");
var Rohit = new DifferntlyAbled("Rohit Lilwati", 1)

console.log(Himanshu);
console.log(Rohit);