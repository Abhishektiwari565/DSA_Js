class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top=null;
    }
    push(value){
        let node=new Node(value);
        if(!this.top){
            this.top=node;
            return
        }       
        node.next=this.top
        this.top=node;  //1->2
    }
    pop(){
        if(!this.top){
            console.log("stack is empty")
            return ;
        }
        this.top=this.top.next;
    }
    peek(){
       if(!this.top){
            console.log("stack is empty")
            return ;
        }
        console.log(this.top.data); 
    }
    print(){
        let current=this.top;
        while(current){
            console.log("["+current.data+"]");
            current=current.next;
        }
    }
}
let stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

stack.print();
