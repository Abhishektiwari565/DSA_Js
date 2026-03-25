//singly perfrom crud operations

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
    push(data){
        let node=new Node(data);
        if(!this.head){
            this.head=node;
            return;
        }
        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=node;
        current=node;
    } 
    size(){
        let count=0;
        let current=this.head;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }
    // 10 -> 40 -> 20 -> 30
    pushAtIndex(index,data){
        let node=new Node(data);
        if(index<0 || index>this.size()){
             console.error("invalid index!");
             return
        }
         if(!this.head){
            this.head=node;
            return;
        }
        if(index==0){
            node.next=this.head;
            this.head=node;
            return;
        }

        let current=this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        node.next=current.next;
        current.next=node;
    }
    //10 -> 20 -> 30
    popAtFirst(){
        if(!this.head){
            console.error("List is empty!");
            return;
        }
        this.head=this.head.next;
    }
    popAtLast(){
        let current=this.head;
        while(current.next.next){
            current=current.next;
        }
        current.next=null;
    }
    popAtIndex(index){
        if(index<0 || index>this.size()){
             console.error("invalid index!");
             return
        }
        if(!this.head){
            console.error("List is empty!");
            return;
        }
        if(index==0){
            this.head=this.head.next;
            return;
        }
        let current=this.head;
        for(let i=0;i<index-1;i++){
            current=current.next
        }
        current.next=current.next.next;
    }
    print(){
        let current=this.head;
        let result='';
        while(current){
            result+=current.data+"->";
            current=current.next;
        }
        console.log(result);
    }
}

let list=new LinkedList();
list.push(10);
list.push(20);
list.push(30);
list.pushAtIndex(0,40)
list.popAtIndex(1)
list.popAtLast();
// list.pop();
list.print();