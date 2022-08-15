class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value)
    this.count = 1
  }

  insertValue(value) {
    this.count++

    let newNode = new Node(value)

    const searchTree = (node) => {
      if (node.value > value) {
        if (!node.left) {
          node.left = newNode
        } else {
          searchTree(node.left)
        }
      } else if (node.value < value) {
        if (!node.right) {
          node.right = newNode
        } else {
          searchTree(node.right)
        }
      }
    }

    searchTree(this.root)
  }

  size() {
    return this.count
  }
  min() {
    let currentNode = this.root

    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }
  max() {
    let currentNode = this.root

    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.value
  }
  contains(value) {
    let currentNode = this.root
    while (currentNode) {
      if (value === currentNode.value) {
        return true
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return false
  }

  // depth first search

  //left root right
  dfsInOrder() {
    let result = []
    const traverse = (node) => {
      //if left child exists traverse again
      console.log("node dfsInOrder", node.left)

      if (node.left) traverse(node.left)
      //capture the root node values
      result.push(node.value)
      //if right child exists traverse again
      if (node.right) traverse(node.right)
    }
    console.log("root value", this.root)
    traverse(this.root)
    return result
  }
  //root left right
  dfsPreOrder() {
    let result = []
    const traverse = (node) => {
      //capture the root node values
      result.push(node.value)
      //if left child exists traverse again

      if (node.left) traverse(node.left)

      //if right child exists traverse again
      if (node.right) traverse(node.right)
    }
    traverse(this.root)

    return result
  }
  //left right root
  dfsPostOrder() {
    let result = []
    const traverse = (node) => {
      //if left child exists traverse again

      if (node.left) traverse(node.left)

      //if right child exists traverse again
      if (node.right) traverse(node.right)

      //capture the root node values
      result.push(node.value)
    }
    traverse(this.root)

    return result
  }

  bfs() {
    let result = []
    let queue = []

    queue.push(this.root)
    while (queue.length) {
      let currentNode = queue.shift()
      result.push(currentNode.value)
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return result
  }
}
const bst = new BST(15)

bst.insertValue(3)
bst.insertValue(36)
bst.insertValue(39)
bst.insertValue(2)
bst.insertValue(12)
bst.insertValue(28)
bst.insertValue(29)
console.log(bst)
console.log(bst.size())
console.log(bst.min())
console.log(bst.max())
console.log(bst.contains(2))

console.log(bst.dfsInOrder())
