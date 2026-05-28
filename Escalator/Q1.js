class Stack {
    constructor(size) {
        this.stack = [];
        this.size = size;
    }

    push(value) {
        if (this.isFull()) {
            console.log("Stack is Full");
        } else {
            this.stack.push(value);
            console.log(value + " pushed into stack");
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            console.log(this.stack.pop() + " removed from stack");
        }
    }

    top() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            console.log("Top Element:", this.stack[this.stack.length - 1]);
        }
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    isFull() {
        return this.stack.length === this.size;
    }
}

let s = new Stack(3);

s.push(10);
s.push(20);
s.push(30);

console.log("Is Stack Full:", s.isFull());

s.top();

s.pop();

console.log("Is Stack Empty:", s.isEmpty());

s.top();