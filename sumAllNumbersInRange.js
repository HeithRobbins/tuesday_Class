// creata a range from the lowest to biggest
// loop trought and add each number to the current total

// function sumAll(arr) {

//  var min = Math.min(…arr),
//  max = Math.max(…arr),
//  sum = 0;

//  for (var i = min; i <= max; i++){
//  sum += i;
//  }
//  return sum;
// }
// sumAll([1, 4]);

function sumAll(arr) {
  let sum = 0;
  let min = Math.min(...arr); /// this is funny i just needed to have the spread operater
  let max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([1, 4]));

console.log(sumAll([1, 4]));

function sumAll(arr) {
  let fullArr = [];
  let sum = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = arr[0]; i <= arr[1]; i++) {
    fullArr.push(i);
  }

  sum = fullArr.reduce(reducer);

  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
