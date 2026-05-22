class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextNode = curr.next; 
        curr.next = prev;         
        prev = curr;              
        curr = nextNode;         
    }

    return prev;
}


function printList(head) {
    let temp = head;
    while (temp !== null) {
        console.log(temp.data);
        temp = temp.next;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("Original List:");
printList(head);

let newHead = reverseLinkedList(head);

console.log("Reversed List:");
printList(newHead);