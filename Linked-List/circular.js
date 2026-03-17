class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
    push(value){
        let node=new Node(value);
        if(!this.head){
            this.head=node;
            this.head.next=this.head;
            console.log(this.head.next);
        }
    }
}

let list=new LinkedList();
list.pop(4);