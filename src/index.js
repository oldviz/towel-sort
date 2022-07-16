module.exports = function towelSort (matrix) {
  r = []
  if (matrix === undefined) {
    return r
  } else {
  for (let i = 0; i < matrix.length; i++){
    i % 2 === 0 ? r = r.concat(matrix[i]) : r = r.concat(matrix[i].reverse())
  }
  return r
}
}
