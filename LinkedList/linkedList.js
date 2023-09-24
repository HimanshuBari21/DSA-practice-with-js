class LinkedList {
    constructor(value) {
        this.data = value,
            this.next = null
    }
}

var head = 0;

const addNode = (newValue) => {
    const newNode = new LinkedList(newValue);
    newNode.next = head
    head = newValue;

    return newNode
}

const finalList = []

finalList.push(addNode(45))
finalList.push(addNode(4))
finalList.push(addNode(65))
finalList.push(addNode(25))
finalList.push(addNode(235))

console.log(finalList);