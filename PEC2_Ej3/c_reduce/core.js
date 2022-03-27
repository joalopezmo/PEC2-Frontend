function sum(array) {
  const initial = 0;
  const x = array.reduce((previous, current) => previous + current, initial);
  return x;
}

function productAll(array) {
  const result = array.reduce((product, n) => product * n, 1
  );
  return result;
}

function objectify(array) {
  // your code here
}

function luckyNumbers(array) {
  // your code here
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
