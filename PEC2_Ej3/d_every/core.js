// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  function areEven(i){
    return i % 2 === 0;
  };
  return input.every(areEven);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((val, i, arr) => typeof val === typeof arr[0]);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {

  function isPositive(i){
    return i > 0;
  }

  return input.every( e => (e.every(isPositive)));

}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  return input;
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
