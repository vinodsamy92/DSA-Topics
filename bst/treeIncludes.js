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

// console.log(a)
// function isValueContains(root, c) {
//   if (root === null) return false
//   const stack = [root]
//   while (stack.length > 0) {
//     let current = stack.pop()
//     console.log("current.value", current.value)
//     console.log("comp", current.value === c)
//     if (current.value === c) {
//       return true
//     }
//     if (c < current.value) {
//       stack.push(current.left)
//     } else {
//       stack.push(current.right)
//     }
//   }
//   return false
// }
// console.log(isValueContains(a, "c"))

function iterativeTreeIncludes(root, target) {
  if (root === null) return false
  let queue = [root]
  while (queue.length > 0) {
    let current = queue.shift()
    if (current.value === target) {
      return true
    }
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
  return false
}

function treeIncludes(root, target) {
  if (root === null) return false
  if (root.value === target) return true
  return treeIncludes(root.left, target) || treeIncludes(root.right, target)
}
// console.log(treeIncludes(a, "h"))
console.log(iterativeTreeIncludes(a, "e"))
