class Node{
    constructor(value){
        this.prev=null;
        this.data=value;
        this.next=null;
    }
}
//1 -> 2 -> 
class linkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }
    countLength(){
        let current=this.head;
        this.length=0;
        while(current.next){
            this.length++;
            current=current.next;
        }
    }
    push(value){
        let node=new Node(value);
        if(!this.head){
            this.head=node;
            this.countLength();
            return;
        }
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        node.prev=current;
        current.next=node;
        this.countLength();
    }
    addAtIndex(index,value){
        if(index<0 || index>this.length){
            console.log("Incorrect Index");
            return;
        }
        let node=new Node(value);
        if(!this.head){
            this.head=node;
            return;
        }
        if(index==0){
            this.head.prev=node;
            node.next=this.head;
            this.head=node;
            return;
        }
        let current=this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        node.prev=current;//1->2->5->3->
        node.next=current.next;
        current.next.prev=node;
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
list.addAtIndex(2,5);

list.printForward();
list.printBackward();