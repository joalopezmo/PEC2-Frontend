function onlyEven(array) {
  const x = (i) => { if(i % 2 === 0){
    return i
   }  
  };
  return array.filter(x);
}

function onlyOneWord(array) {
  const regex = /^\S+$/;
  function proob(i){
    return regex.test(i);
  } ;

  return array.filter(proob);
}

function positiveRowsOnly(array) {
  let result = array.filter(function(ind) {
    return ind.every(function(n) {
      return n >= 0
    });
  });
  return result;
}

function allSameVowels(array) {
  const regex = /[aeiou]/;
  function proob(i){
    return regex.test(i);
  }
  function proobAgain(i){
    let a= i.split("");
  }

  // your code here
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
