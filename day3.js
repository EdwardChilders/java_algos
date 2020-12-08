class SLL {
  constructor() {
      this.head = null;
      this.length = 0;
  }

  printSecondToLastValue(){
    var runner = this.head;
    while(runner.next != null){
      if (runner.next.next == null){
        console.log("The second to last value is: " + runner.data);
      }
      runner = runner.next;
    }
  }

  reverse(){
    var current = this.head;
    var runner = this.head;
    var last = null;
    var temp = null;
    var length = Math.floor(this.length/2);
    for (let i = 0; i<length; i++){
      while(runner.next!=last){
        runner = runner.next;
      }
      temp = runner.data;
      runner.data = current.data;
      current.data = temp;
      last = runner;
      current = current.next;
      runner = current;

    }
    
  }

  // if val is contained within the current list, delete it.
  // return void
  // assume there are no duplicates
  // consider the edge case if you have to delete the head node
  // consider the edge case your list is empty
  // consider the edge case that your list does not contain the val
  delete(val) {
    if (this.isEmpty()){
      return null;
    }
    var current = this.head;
    var runner = this.head;
    if(current.data == val){
      this.head = current.next;
    }
    while (current != null){
      if (current.data == val){
        runner.next = current.next;
        this.length--;
      }
      runner = current;
      //essentially a temp val
      current = current.next;
    }
  }

  // Return the total amount of nodes in the list
  size() {
    var length = this.length;
    console.log("There are " + length + " nodes in this list!"); 
  }

  // console log (print) the data of every node in the current list
  read() {
    var current = this.head;
    while (current) {
        console.log(current.data);
        
        if (current.next === null) {
          console.log("this is the last node");
        }
        current = current.next;
      }
  }

  // find: return true / false if current list contains a data equal to value
  contains(value) {
    var current = this.head;
    while(current != null){
        if (current.data === value){
          return true;
        }
        current = current.next;
      }
      return false;
    }

  // Remove from front: remove and return the first node in the SLL
  removeFromFront() {
    if (this.isEmpty()){
      return null;
    }
    var removed = this.head;
    this.head = this.next;
    removed.next = null;
    this.length--;
    return removed;
  }

  isEmpty() {
      return this.head === null
  }

  addToFront(node) {
    let temp = this.head;
    if (node != null) {
        this.head = node;
        this.next = temp;
        this.length++;
    }
  }

  addDataToFront(data) {
      let node = new Node(data);
      node.next = this.head;
      this.head = node;
      this.length++;
  }
}

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

var myNewSLL = new SLL();
myNewSLL.size();
myNewSLL.addDataToFront(5);
myNewSLL.addDataToFront(22);
myNewSLL.addDataToFront(17);
myNewSLL.addDataToFront(21);
myNewSLL.addDataToFront(9);
myNewSLL.size();
// myNewSLL.delete(17);
myNewSLL.size();
myNewSLL.read();
myNewSLL.printSecondToLastValue();
myNewSLL.reverse();
myNewSLL.printSecondToLastValue();

// myNewSLL.read();
// console.log(myNewSLL.contains(22));
// myNewSLL.removeFromFront();
// console.log(myNewSLL.isEmpty());
myNewSLL.read();
