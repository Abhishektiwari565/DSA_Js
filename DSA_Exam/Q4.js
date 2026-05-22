class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function isCircular(head) {
    if (head === null) return false;

    let temp = head.next;

    while (temp !== null && temp !== head) {
        temp = temp.next;
    }

    return temp === head;
}

let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = head1; 

console.log(isCircular(head1)); 

let head2 = new Node(10);
head2.next = new Node(20);
head2.next.next = new Node(30);

console.log(isCircular(head2)); 
