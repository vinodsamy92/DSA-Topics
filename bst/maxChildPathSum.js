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
console.log(a)
const maxChildPathSum = (root) => {
  if (root === null) return -Infinity
  if (root.left === null && root.right === null) return root.value

  const maxSum = Math.max(maxChildPathSum(root.left), maxChildPathSum(root.right))
  return root.value + maxSum
}
console.log(maxChildPathSum(a))
