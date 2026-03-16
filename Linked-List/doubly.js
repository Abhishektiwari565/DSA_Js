class Node{
    constructor(value){
        this.prv=null;
        this.data=value;
        this.next=null;
    }
}
//1 -> 2 -> 
class linkedList{
    constructor(){
        this.head=null;
    }
    push(value){
        let node=new Node(value);
        if(!this.head){
            this.head=node;
            return;
        }
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        node.prev=current;
        current.next=node;
    }
    printForward(){
        let current=this.head;
        let result='';
        while(current){
            result+=current.data+"->";
            current=current.next;
        }
        console.log(result);
        console.log(" ");
    }
    printBackward(){
        let current=this.head;
        let result='';
        while(current.next){
            current=current.next;
        }while(current){
            result+=current.data+"->";
            current=current.prev;
        }
        console.log(result);
    }
}

const list=new linkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4);

list.printForward();
list.printBackward();