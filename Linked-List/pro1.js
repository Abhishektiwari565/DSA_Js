class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;

    }

    addFirst(data){
        let newNode=new Node(data);
        newNode.next=this.head;//head=null 
        this.head=newNode;//30 -> 20 -> 10 -> null
    }
    addLast(data){
        let newNode=new Node(data);
        if(!this.head){
            this.head=newNode
            return;
        }
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
    }
    addAtIndex(data,index){
        if(index>0 || index>this.size()){
            console.error("Invalid index");
            return;
        }

        let newNode=new Node(data);
        if(index===o){
            newNode.next=this.head;
           this.head=newNode;
           return;
        }
        let current=this.head;
        for(let i=0;i<index-1;i++){
            currernt=currernt.next;
        }
        newNode.next=current.next;
        current.next=newNode;
    }
    display(){
    let current = this.head;
    let result = "";

    while(current){
        result += current.data + " -> ";
        current = current.next;
    }

    result += "null";
    console.log(result);
}
}
let list=new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(30);

list.display();

