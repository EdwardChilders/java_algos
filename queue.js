// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers
function isStackSorted(stack) {
  let sorted = true;
  let newStack = new slStack();
  while(stack.top!=null){
    newStack.push(stack.pop());
    if(stack.peek()<newStack.peek() && stack.top != null){
      sorted = false;
    }
  }
  while (newStack.top!=null){
    stack.push(newStack.pop());
  }
  return sorted
}

// bonus
// given two queues, return the one with the greater sum.
// return the queues to their original order
// assume node.data are integers
function greaterOfTwoQueues(queue1, queue2) {
  let sum1 = 0;
  let sum2 = 0;
  let length1 = queue1.myLength();
  let length2 = queue2.myLength();

  for(let i = 0; i<length1; i++){
    sum1 += queue1.checkFront();
    queue1.enqueue(queue1.dequeue());
  }
  for(let j = 0; j<length2; j++){
    sum2 += queue2.checkFront();
    queue2.enqueue(queue2.dequeue());
  }
  if (sum1>sum2){
    return queue1;
  }else{
    return queue2;
  }

}



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



// queue: isPalindrome
// return true or false if the queue is a palindrome
// a palindrome is a string or number that is equal to itself when reversed

// racecar === racecar
// race !=== ecar

// you may not linearly iterate through your queue
// only use public queue methods (enqueue, dequeue, checkFront, isEmpty, length)
// return the queue back to it's original order

// you may use stacks queues arrays or dictionaries as additional storage
// you may create helper methods to break this challenge down into smaller parts
function isPalindrome(queue) {
  if(queue.isEmpty()){
    return false;
  }
  let tempQueue = new Queue();
  let arr1 = [];
  let arr2 = [];
  while (queue.front !== null){
    let temp = queue.dequeue();
    tempQueue.enqueue(temp);
    arr1.push(temp.data);
  }
  while (tempQueue.front !== null){
    let temp2 = tempQueue.dequeue();
    queue.enqueue(temp2);
    arr2.push(temp2.data);
  }
  for(let i=0;i<arr2.length/2;i++){
    if(arr2[i]!=arr1.pop()){
      return false
    }
  }
  return true;
}



let myQueue = new Queue();
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(2);
let e = new Node(1);
myQueue.enqueue(a);
myQueue.enqueue(b);
myQueue.enqueue(c);
myQueue.enqueue(d);
myQueue.enqueue(e);

let myOtherQueue = new Queue();
let a1 = new Node(1);
let b1 = new Node(40);
let c1 = new Node(3);
let d1 = new Node(2);
let e1 = new Node(1);
myOtherQueue.enqueue(a1);
myOtherQueue.enqueue(b1);
myOtherQueue.enqueue(c1);
myOtherQueue.enqueue(d1);
myOtherQueue.enqueue(e1);

console.log(greaterOfTwoQueues(myQueue, myOtherQueue));

// console.log(isPalindrome(myQueue)); // true
// console.log(isPalindrome(myOtherQueue)); // false

// let myQueue = new Queue();
// let a = new Node(7);
// let b = new Node(3);
// let c = new Node(5);
// let d = new Node(23);
// console.log(myQueue.isEmpty());
// myQueue.enqueue(a);
// myQueue.enqueue(b);
// myQueue.enqueue(c);
// myQueue.enqueue(d);
// console.log(myQueue.isEmpty());
// // console.log(myQueue.dequeue().data)
// console.log(myQueue.myLength());
// console.log(myQueue.checkFront());
// readQueue(myQueue);

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

class slStack {
  constructor() {
      this.top = null; // this.head, this.end
      this.length = 0;
  }

  // add to top
  push(newNode) {
      if (this.top === null) {
          this.top = newNode;
      } else {
          newNode.next = this.top;
          this.top = newNode;
      }
      this.length++;
  }

  // remove from top
  pop() {
      if (this.top === null) return null;

      const removed = this.top;
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

  length() {
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
  let newStack = new slStack();
  let count = 0;

  while (!stack.isEmpty()) {
      let node = stack.pop();
      newStack.push(node);
      count++;
  }

  while (!newStack.isEmpty()) {
      stack.push(newStack.pop()); h
  }

  return count;
};


let aa = new Node(1);
let bb = new Node(2);
let cc = new Node(3);
let newStack = new slStack();
newStack.push(aa);
newStack.push(bb);
newStack.push(cc);

console.log(isStackSorted(newStack));
