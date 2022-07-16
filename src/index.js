
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if (matrix === undefined) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) { 
    if (i === 0 || i % 2 === 0) {
      newArr.push(matrix[i]);
    } else {
      matrix[i] = matrix[i].reverse();
      newArr.push(matrix[i]);
    }
  }
  return newArr.flat();
}
