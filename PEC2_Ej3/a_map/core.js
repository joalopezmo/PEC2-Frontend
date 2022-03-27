function multiplyBy10(array) {
  const variable = array.map(x => x*10);
  return variable;
}

function shiftRight(array) {
  return array.map((_, i, a) => a[(i + a.length - 1) % a.length]);
}

function onlyVowels(array) {
  return array.map(x => x.replace(/[bcdfghjklmnpqrstvwxysz]/gi,""));
}

function doubleMatrix(array) {
  return array.map(function(i){
    return i.map(x => x*2);
  });
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};

