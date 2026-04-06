class Node{
    constructor(value){
        this.data=value;
        this.left=null;
        this.right=null;
    }
}

class Binary{
    constructor(){
        this.root=null;
    }
    insert(value){
        let node= new Node(value);
        if(!this.root){
            this.root=node;
            return;
        }
        let current=this.root;
        while(true){
            if(node.data<current.data){
                if(current.left==null){
                    current.left=node;
                    return;
                }
                else{
                    current=current.left;
                }
            }
            else{
                if(current.right==null){
                    current.right=node;
                    return;
                }
                else{
                    current=current.right;
                }
            }
        }
    }
}
const bt=new Binary();
bt.insert(70);
bt.insert(40);
bt.insert(35);
bt.insert(80);
bt.insert(90);
console.log(bt.root.data);
console.log(bt.root.left.data);
console.log(bt.root.right.data);
console.log(bt.root.left.left.data);
console.log(bt.root.right.right.data);