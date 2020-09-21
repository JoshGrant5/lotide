// Return a "flattened" array 
const flatten = array => {
  let flattened = [];
  for (let item of array) {
    Array.isArray(item) ? flattened = flattened.concat(item) : flattened.push(item);
  }
  return flattened;
}

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]]))