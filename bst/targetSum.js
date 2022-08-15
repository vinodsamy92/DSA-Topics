class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const a = new Node(6)
const b = new Node(4)
const c = new Node(3)
const d = new Node(1)
const e = new Node(7)
const f = new Node(2)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

// console.log("a", a)

function targetSum(root) {
  if (root === null) return 0
  let sum = 0
  const stack = [root]
  while (stack.length > 0) {
    const current = stack.pop()
    console.log("currentVal", current.value)
    sum += current.value
    if (current.left) stack.push(current.left)
    if (current.right) stack.push(current.right)
  }
  return sum
}

// console.log(targetSum(a))

function recursiveTargetSum(root) {
  if (root === null) return 0
  return root.value + recursiveTargetSum(root.left) + recursiveTargetSum(root.right)
}

console.log(recursiveTargetSum(a))
