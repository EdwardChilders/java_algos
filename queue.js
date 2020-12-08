// Queue
// FIFO (First in, first out)
class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class Queue {
  constructor() {
      this.front = null; // "front of the line"
      this.rear = null; // "back of the line"
      this.length = 0;
  }

  // add to the rear
  enqueue(node){
    if (this.isEmpty()){
      this.front = node;
      this.rear = node;
    }else{
      this.rear.next = node;
      this.rear = node;
    }
    this.length++;
  }

  // remove from the front
  dequeue(){
    if(this.isEmpty()){
      return null;
    }
    let removed = this.front;
    if (this.front == this.rear){
      this.front = null;
      this.rear = null;
    }else{
      this.front = this.front.next;
    }
    this.length--;
    removed.next = null;
    return removed;
  }

  // check the front of the queue
  checkFront(){
    if(this.isEmpty()){
        return null;
    }else{
        return this.front.data;
    }
  }

  // return if empty
  isEmpty(){
    return this.front === null;
  }

  // return length
  myLength(){
    return this.length;
  }
}

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done





let myQueue = new Queue();
let a = new Node(7);
let b = new Node(3);
let c = new Node(5);
let d = new Node(23);
console.log(myQueue.isEmpty());
myQueue.enqueue(a);
myQueue.enqueue(b);
myQueue.enqueue(c);
myQueue.enqueue(d);
console.log(myQueue.isEmpty());
// console.log(myQueue.dequeue().data)
console.log(myQueue.myLength());
console.log(myQueue.checkFront());

function readQueue(queue){
    let newQueue = new Queue();
    while(queue.front != null){
        let temp = queue.dequeue()
        newQueue.enqueue(temp);
        console.log(temp.data)
    }
    while(newQueue.front != null){
        queue.enqueue(newQueue.dequeue());
    }
    return queue;
}
readQueue(myQueue);





// // Stacks

// // A stack is a LIFO data structure
// // LAST IN, FIRST OUT
// // LIFO

// // first in, first out

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
// }

// class slStack {
//   constructor() {
//       this.top = null; // this.head, this.end
//       this.length = 0;
//   }

//   // add to top
//   push(newNode) {
//       if (this.top === null) {
//           this.top = newNode;
//       } else {
//           newNode.next = this.top;
//           this.top = newNode;
//       }
//       this.length++;
//   }

//   // remove from top
//   pop() {
//       if (this.top === null) return null;

//       const removed = this.top;
//       this.top = this.top.next;
//       removed.next = null;
//       this.length--;

//       return removed;
//   }

//   // aka check top
//   peek() {
//       return this.head ? this.head.data : null;
//   }

//   // check if empty
//   isEmpty() {
//       return this.head === null;
//   }

//   length() {
//       return this.length;
//   }
// }

// // buh buh bonus challenge: countStack

// // write the standalone function countStack
// // given a slStack, count the nodes
// // return the count
// // you may use one stack or array as additional storage
// // the given stack must be returned back to it's original order
// // you may only use public stack methods push pop peek isempty
// function countStack(stack) {
//   let newStack = new slStack();
//   let count = 0;

//   while (!stack.isEmpty()) {
//       let node = stack.pop();
//       newStack.push(node);
//       count++;
//   }

//   while (!newStack.isEmpty()) {
//       stack.push(newStack.pop()); h
//   }

//   return count;
// };



