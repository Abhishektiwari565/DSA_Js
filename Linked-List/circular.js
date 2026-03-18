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
            return;
        }
        let current=this.head;
        while(current.next!==this.head){
            current=current.next;
        }
        current.next=node;
        node.next=this.head;
    }
    insertAtIndex(index,value){
        let node =new Node(value);
        if(!this.head){
            this.head=node;
            this.head.next=this.head;
            return;
        }
        let current=this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        node.next=current.next;
        current.next=node;
    }
    pop(){
        if(!this.head){
            console.log("list is empty");
            return;
        }
        let current=this.head;
        while(current.next!==this.head){
            current=current.next;
        }
        current.next=this.head.next;
        this.head=this.head.next;
    }
    print(){
        let current=this.head;
        let result=' ';
        while(current.next!==this.head){
            result+=current.data+"->";
            current=current.next;
        }
        result+=current.data;
        console.log(result);
    }
}

let list=new LinkedList();
list.push(4);
list.push(8);
list.push(12);
list.push(16);
list.insertAtIndex(2,20);
list.pop();

list.print();