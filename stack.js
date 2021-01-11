// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// push - add to top
// pop - remove from top
// peek - check the top
// isEmpty - check if the stack is empty, true/false
// length - return size of stack



// class arrStack {
//   constructor() {
//       this.items = [];
//   }

//   push(item) {
//       this.items.push(item);
//   }

//   pop() {
//       return this.items.pop();
//   }

//   peek() {
//       return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//       if (this.items.length === 0) {
//           return true;
//       }
//       return false;
//   }

//   length(){
//       return this.items.length;
//   }
// }

class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class slStack {
  constructor() {
      this.top = null; // this.head, this.end
      this.length = 0;
  }

  // add to top
  push(newNode) {
    if(this.isEmpty()){
      this.top = newNode;
    }else{
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  // remove from top
  pop() {
    if (this.isEmpty()){
      return null;
    }
    let removed = this.top;
    this.top = this.top.next;
    removed.next = null;
    this.length--;
    return removed;
  }

  // aka check top
  peek() {
    if(this.isEmpty()){
      return null;
    }
    return this.top.data;
  }

  // check if empty
  isEmpty() {
      return this.top === null;
  }

  // length getter
  getLength() {
      return this.length;
  }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {
  let counter = 0;
  let newStack = new slStack();
  if (stack.isEmpty()){
    return counter;
  }
  while (stack.top != null){
    counter++;
    newStack.push(stack.pop());
  }
  while(newStack.top != null){
    stack.push(newStack.pop());
  }
  return counter;
};

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let newStack = new slStack();
newStack.push(c);
newStack.push(b);
newStack.push(a);
console.log(newStack.peek());
console.log(newStack.getLength());
// newStack.pop();

console.log(countStack(newStack));


// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers
function isStackSorted(stack) {
  let sorted = true;
  let newStack = new slStack();
  while(stack.top!=null){
    newStack.push(stack.pop());
    console.log("stack 1: " + stack.peek())
    console.log("stack 2: " + newStack.peek())
    if(stack.peek()<newStack.peek() && stack.top != null){
      sorted = false;
    }
  }
  while (newStack.top!=null){
    stack.push(newStack.pop());
  }
  return sorted
}

console.log(isStackSorted(newStack));