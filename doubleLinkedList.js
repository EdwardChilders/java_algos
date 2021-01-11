// DLLNodes have a .next and .prev
class DLLNode {
  constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
  }
}

// DLL [4, 9, 3, 2, 5, 10, 7, 22]
// pivot 5

// [4, 3, 2] left
// [9, 10, 7, 22] right

// [4, 3, 2, 5, 9, 10, 7, 22] output

// return a new DLL with the values partitioned by the pivot
// so that all nodes with values lower than pivot are to the left
// and all nodes with values higher than pivot are to the right
// DLL contains numeric integer values
// no duplicates
// bonus points return the same DLL
function partitionDLL(DLL, pivot) {
  let runner = DLL.head;
  let length = DLL.size();
  let temp = null;
  for (let i=0; i<length; i++){
    if (runner.data < pivot){
      temp = runner;
      runner = runner.next;
      DLL.addHead(DLL.removeVal(temp.data));
    }else if(runner.data > pivot){
      temp = runner;
      runner = runner.next;
      DLL.addTail(DLL.removeVal(temp.data));
    }else{
      runner = runner.next;
    }
  }
  return DLL;
}

// DLLists have both a .head and .tail pointer
class DLList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  // == Main Methods ==

  // return true or false if value exists
  exists(value) {
    if(this.isEmpty()){
      return false;
    }
    let runner = this.head;
    while(runner != null){
      if(runner.data == value){
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  // reverse a doubly linked list
  reverse() {
    if(this.isEmpty()){
      return;
    }
    if (this.head === this.tail){
      return;
    }
    let runner = this.head;
    let temp = null;
    let length = this.size();
    this.head = this.tail;
    this.tail = runner;
    for(let i=0; i<length; i++){
      temp = runner.next;
      runner.next = runner.prev;
      runner.prev = temp;
      runner = temp;
    }
  }

  // return true of false if the current DLL is a palindrome
  checkPalindrome() {
    if (this.isEmpty()){
      return false;
    }
    let frontCheck = this.head;
    let rearCheck = this.tail;
    let length = Math.floor(this.size()/2);
    for(let i=0; i<length; i++){
      if(frontCheck.data != rearCheck.data){
        return false;
      }
      frontCheck = frontCheck.next;
      rearCheck = rearCheck.prev;
    }
    return true;
  }

   // remove and return the first node with data === val, if it exists
  removeVal(val){
    // what if the value is the head and tail?
    // what if the value is the head?
    // what if the value is the tail?
    // what if the value is in the middle of the list?
    // what if the value is not in the list?
    if(this.isEmpty()){
      return null;
    }
    let runner = this.head;
    if(this.head.data == val && this.length==1){
      this.head = null;
      this.tail = null;
      this.length--;
      return runner;
    }
    if(this.head.data == val){
      this.head = this.head.next;
      this.head.prev = null;
      runner.next = null;
      this.length--;
      return runner;
    }
    if(this.tail.data == val){
      runner = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      runner.prev = null;
      this.length--;
      return runner;
    }

    while(runner.next != null){
      runner = runner.next;
      if(runner.data == val){
        runner.prev.next = runner.next;
        runner.next.prev = runner.prev;
        runner.next = null;
        runner.prev = null;
        this.length--;
        return runner;
      }
    }
    return null;
  }

  // add node before target if target exists
  // target is a node data
  prepend(target, node) {
    let runner = this.head;
    if(runner.data == target){
      node.next = runner;
      this.head = node;
      runner.prev = node;
      this.length++;
      runner = null;
    }
        while(runner!=null){
            if(runner.data == target){
                node.prev = runner.prev;
                node.next = runner;
                runner.prev.next = node;
                runner.prev = node;
                this.length++;
                break;
            }
            runner = runner.next;
        }
  }

  // push to head
  addHead(node) {
    if(this.isEmpty()){
      this.tail = node;
      this.head = node;
    }else{
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    
  }

  // pop from tail
  removeTail() {
    let removed = this.tail;
    if(this.isEmpty()){
      return null;
    }else if(this.size()==1){
      this.head = null;
      this.tail = null;
    }else{
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    removed.prev = null;
    this.length--;
    return removed;
  }


  // return is empty
  isEmpty() {
    return this.head == null;
  }

  // return length
  size() {
    return this.length;
  }

  // == Bonus Methods, just inverted versions of the first set ==

  // push to tail
  addTail(node){
    if(this.isEmpty()){
      this.head = node;
      this.tail = node;
    }else{
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // pop from head
  removeHead(){
    let removed = this.head;
    if(this.isEmpty()){
      return null
    }else if(this.size()==1){
      this.tail = null;
      this.head = null;
    }else{
      this.head = this.head.next;
      this.head.prev = null;
    }
    removed.next = null;
    this.length--;
    return removed
  }

    // add after target if exists
    append(target, node) {
      let runner = this.head;
        while(runner!=null){
            if(runner.data == target && runner.next != null){
                node.next = runner.next;
                node.prev = runner;
                runner.next.prev = node;
                runner.next = node;
                this.length++;
                break;
            }else if(runner.next == null && runner.data == target){
              node.prev = runner;
              runner.next = node;
              this.tail = node;
              this.length++;
            }
            runner = runner.next;
        }
    }

    read(){
      let runner = this.head;
      while(runner != null){
        console.log(runner.data);
        runner = runner.next;
      }
    }

}

// DLL [4, 9, 3, 2, 5, 10, 7, 22]
// pivot 5

// [4, 3, 2] left
// [9, 10, 7, 22] right

// [4, 3, 2, 5, 9, 10, 7, 22] output

let a = new DLLNode(4);
let b = new DLLNode(9);
let c = new DLLNode(3);
let d = new DLLNode(2);
let e = new DLLNode(5);
let f = new DLLNode(10);
let g = new DLLNode(7);
let h = new DLLNode(22);
let list = new DLList();
list.addTail(d);
list.addTail(b);
list.addTail(c);
list.addTail(a);
list.addTail(e);
list.addTail(f);
list.addTail(g);
list.addTail(h);
console.log(list);
list.read();
partitionDLL(list, 5);
console.log(list);
list.read();
// console.log(list.exists(3));
// console.log(list.exists(7));
// list.reverse();
// console.log(list);
// console.log(list.checkPalindrome());

// list.prepend(3,d);
// console.log(list);
// console.log(list);

// console.log(list.removeVal(10));
// list.removeHead();
// list.removeTail();
// list.removeHead();
// console.log(list);