


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
        let newNode=new Node(data)
        newNode.next=this.head;
        this.head=newNode;
    }

    addLast(data){
        let newNode=new Node(data) 
        if(!this.head){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
    }
    size(){
         let count = 0;
    let current = this.head;

    while(current){
        count++;
        current = current.next;
    }

    return count;
    }

   addAtIndex(data,index){

    if(index < 0 || index > this.size()){
        console.error("Invalid index");
        return;
    }

    let newNode = new Node(data);

    if(index === 0){
        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    let current = this.head;

    for(let i = 0; i < index-1; i++){
        current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
}
    display(){
        let current=this.head;
        let result=""
        while(current){
            result+=current.data+"->";
            current=current.next;
        }
        result+="null";
        console.log(result);
    }

}
let list=new LinkedList();
list.addLast(10)
list.addLast(20)
list.addLast(30)

list.addAtIndex(40,1)
list.display();