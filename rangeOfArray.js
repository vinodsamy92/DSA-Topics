// Given an array arr of integer elements, the task is to find the range and coefficient of range of the given array where:
// Range: Difference between the maximum value and the minimum value in the distribution.
// Coefficient of Range: (Max – Min) / (Max + Min).
const rangeArr = [15, 16, 10, 9, 6, 7, 17]

const max = rangeArr.reduce((acc, cur) => acc < cur && cur)
const min = rangeArr.reduce((acc, cur) => (acc < cur ? acc : cur))
// return acc < val ? acc : val
// const min = Math.min(...rangeArr)
console.log(max, min)
// const range = max - min
// const coefficientRange = (max - min) / (max + min)
// console.log(range, coefficientRange)
