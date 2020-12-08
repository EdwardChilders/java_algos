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
newStack.push(a);
newStack.push(b);
newStack.push(c);
console.log(newStack.peek());
console.log(newStack.getLength());
newStack.pop();

console.log(countStack(newStack));


