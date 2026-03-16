
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

    //Add element at before of another element
    addFirst(data){
        let newNode=new Node(data)
        newNode.next=this.head;
        this.head=newNode;
    }
    //Add element at after of another element
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
    //Add element at specific position
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
//remove first element from linkedList
removeFirst(){
    if(!this.head){
        console.error("List is empty!");
        return;
    }
    this.head=this.head.next;

}
//remove last element form linkedList
removeLast(data){
    if(!this.head){
        console.error("List is empty");
        return;
    }
    if(!this.head.next){
        this.head=null;
        return;
    }

    let current=this.head;
    while(current.next.next){
        current=current.next;
    }
    current.next=null;
}
//remove at specific position
removeAtIndex(index){
    if(index<0||index>this.size()){
        console.error("Invalid Index");
        return;
    }
    if(index==0){
        this.head=this.head.next;
        return
    }
    let current=this.head;
    for(let i=0;i<index-1;i++){
        current=current.next;
    }
    current.next=current.next.next;
}
    // to display all the operations
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

list.removeAtIndex(1);
list.display();