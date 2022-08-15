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

const treeMinValue = (root) => {
  let smallest = Infinity
  if (root === null) return 0

  const stack = [root]
  while (stack.length > 0) {
    const current = stack.pop()

    if (current.value < smallest) smallest = current.value

    if (current.left) stack.push(current.left)
    if (current.right) stack.push(current.right)
  }
  return smallest
}

// console.log(treeMinValue(a))

const recursiveTreeMinValue = (root) => {
  if (root === null) return Infinity

  const leftMin = recursiveTreeMinValue(root.left)
  const rightMin = recursiveTreeMinValue(root.right)

  return Math.min(root.value, leftMin, rightMin)
}

console.log(recursiveTreeMinValue(a))
