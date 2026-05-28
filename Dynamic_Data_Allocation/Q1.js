class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let temp = this.head;

        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    display() {
        let temp = this.head;
        let result = "";

        while (temp !== null) {
            result += temp.data + " -> ";
            temp = temp.next;
        }

        console.log(result + "null");
    }

    insert_at_beginning(data) {
        let newNode = new Node(data);

        newNode.next = this.head;
        this.head = newNode;
    }

    search(key) {
        let temp = this.head;

        while (temp !== null) {
            if (temp.data === key) {
                console.log(key + " Found");
                return;
            }

            temp = temp.next;
        }

        console.log(key + " Not Found");
    }

    delete_node(key) {

        if (this.head === null) {
            return;
        }

        if (this.head.data === key) {
            this.head = this.head.next;
            return;
        }

        let temp = this.head;

        while (temp.next !== null && temp.next.data !== key) {
            temp = temp.next;
        }

        if (temp.next !== null) {
            temp.next = temp.next.next;
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {

            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }
}

let list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log("Original List:");
list.display();

list.insert_at_beginning(5);

console.log("After Insert at Beginning:");
list.display();

list.search(20);

list.delete_node(20);

console.log("After Deletion:");
list.display();

list.reverse();

console.log("After Reverse:");
list.display();