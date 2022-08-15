class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

//a,b,c,d,e,f
function breadthFirstSearch(root) {
  if (root === null) return []
  let result = []
  let queue = [root]
  while (queue.length > 0) {
    const current = queue.shift()
    result.push(current.value)
    console.log("first value to move forward", current.value)
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
    //NOTE:For reverse breadthFirstSearch() just change the order
    // if (current.right) queue.push(current.right)
    // if (current.left) queue.push(current.left)
  }
  return result
}
console.log(breadthFirstSearch(a))
