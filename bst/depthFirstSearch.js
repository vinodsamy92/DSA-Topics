class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function depthFirstSearch(root) {
  let result = []
  if (root === null) return []

  const stack = [root]
  while (stack.length > 0) {
    const current = stack.pop()
    // console.log("current", current.value)
    result.push(current.value)
    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }
  return result
}

function recursiveDepthFirstSearch(root) {
  if (root === null) return []

  const leftDepthFirstSearch = recursiveDepthFirstSearch(root.left)
  const rightDepthFirstSearch = recursiveDepthFirstSearch(root.right)
  return [root.value, ...leftDepthFirstSearch, ...rightDepthFirstSearch]
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
// console.log(depthFirstSearch(a))
// console.log(recursiveDepthFirstSearch(a))

// console.log("root object is", a)
