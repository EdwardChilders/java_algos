// https://www.cs.usfca.edu/~galles/visualization/BST.html

class BSTNode {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
};

class BST {
  constructor() {
      this.root = null;
  }

  isEmpty(){
      return this.root === null;
  };

  // return true or false is val exists within the current tree
  // if current is undefined, current = this.root
  find(val, current) {
      if (current === undefined) {
          current = this.root;
          if(this.isEmpty()){
            return false;
          }
      }
      if(current.val == val){
        return true;
      }else if(val < current.val){
        if(current.left == null){
          return false;
        }else{
          return this.find(val, current.left);
        }
      }else{
        if(current.right == null){
          return false;
        }else{
          return this.find(val, current.right);
        }
      }
  }

  // remove and return the smallest node of a given tree
  removeSmallest(current, runner) {
      if (current === undefined) {
          current = this.root;
          if (this.isEmpty()){
            return null;
          }
          if (current.left == null){
            this.root = current.right;
            current.right = null;
            return current;
          }
      }
      if(current.left==null){
        runner.left = current.right;
        current.right = null;
        return current;
      }else{
        runner = current;
        return this.removeSmallest(current.left, runner);
      }
  }

  insert(node, current){
      if (current === undefined) {
          current = this.root;
      };

      // empty tree
      if (current === null) {
          this.root = node;
          return;
      };

      // go left
      if (current.val > node.val) {
          // check if null and add
          if (current.left === null) {
              current.left = node;
              return;
          } else {
              // else recurse left
              return this.insert(node, current.left);
          }
      // else go right
      } else if (current.val < node.val) {
          // check if null and add
          if (current.right === null) {
              current.right = node;
              return;
          } else {
              // else recurse right
              return this.insert(node, current.right);
          }
      }
  };

  // recursive
  getLargestFromSubtree(current) {
      // if no tree, tree is root
      if (current === undefined) {
          current = this.root;
      }

      // if tree becomes null, return null
      if (current === null) {
          return null;
      }

      // if there is no further nodes, return tree
      if (current.right === null) {
          return current.val;
      }

      // else recurse to the right and try again
      return this.getLargestFromSubtree(current.right);
  }

  // iterative
  getSmallestFromSubtree(current) {
    if (current === undefined) {
      current = this.root;
    }
    if(current===null){
      return null;
    }
    if(current.left === null){
      return current.val;
    }

    return this.getSmallestFromSubtree(current.left);
  }

};

// function that calls itself
// modifies the inputs
// so that the inputs eventual fail and end the recursive call

var myBST = new BST();
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(15));
myBST.insert(new BSTNode(5));
myBST.insert(new BSTNode(20));
myBST.insert(new BSTNode(1));
myBST.insert(new BSTNode(2));
myBST.insert(new BSTNode(7));
myBST.insert(new BSTNode(12));
console.log(myBST.getSmallestFromSubtree());
console.log(myBST.removeSmallest());
console.log(myBST.getSmallestFromSubtree());
console.log(myBST.find(3));
