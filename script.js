class Node {
    constructor(prop) {
        this.prop = prop;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

}

//Initialization
let ls = new LinkedList(10);

//Append to last 
append(20);

//Prepend to first
prepend(0);


//size head tail
    // console.log(size());
    // console.log(head());
    // console.log(tail());


//At Index
atIndex(1);

//pop remaining

//contains(value)
valueExist(0);


//find(value) : index of node containing value
console.log(findIndex(0, 20, ls.head));

//toString
toString();

//Insert at 
insertAt(55, 3)




function append(value) {
    let newNode = new Node(value);
    appendToLast(ls.head, newNode)
    ls.tail = newNode;
    ls.length++;
}

function appendToLast(node, newNode) {
    if(node.nextNode == null){
        node.nextNode = newNode
        return;
    }

    appendToLast(node.nextNode, newNode);
}

function prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = ls.head;
    ls.head = newNode;
    ls.length++;
}

function size(){
    return ls.length;
}

function head(){
    return ls.head;
}

function tail(){
    return ls.tail;
}

function atIndex(index){
    let myIndex = 0;
    let node = getNode(index, myIndex, ls.head);
    console.log(node)
}


function valueExist(search) {
    console.log(searchItem(search, ls.head))
}

function getNode(index, myIndex, node ) {
    if(node === null){
        console.log("Index not found")
        return node;
    }

    if(index === myIndex){
        return node;
    }

    myIndex++;
    return getNode(index, myIndex, node.nextNode)
}

function findIndex(index, value, node) {

    if(!node){
        return node;
    }

    if(node.prop === value){
        return index;
    }

    index++;

    return findIndex(index, value, node.nextNode);
    
}
function searchItem(search, node ) {
    if(node === null){
        return false;
    }

    if(node.prop === search){
        return true;
    }

    return searchItem(search, node.nextNode)
}

function toString(){
    if(ls.length === 1){
        console.log(ls.head.prop)
    }
    else{
        console.log(ls.head.prop + concatinateValues(ls.head.nextNode))
    }

}


function concatinateValues(node){
    if(!node) return ' -> null';
    return ' -> ' + node.prop + concatinateValues(node.nextNode);
}

function insertAt(value, index) {
    if(index >= 0 & index <= ls.length){
        if(index === 0){
            prepend(value);
        }
        else if(index === ls.length){
            append(value);
        }
        else{
            insertNodeByIndex(ls.head, value, index, 0);
        }
        ls.length++;
        console.log(toString());
    }
    else{
        console.log("invalid index");
    }
}

function insertNodeByIndex(node , value , index , customIndex){
    //we know to change next item position
    if(customIndex + 1 === index){
        let newNode = new Node(value);
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
    }
    return insertNodeByIndex(node.nextNode, value, index , ++customIndex);
}