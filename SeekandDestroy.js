// function destroyer(arr) {
//   return arr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function (val) {
    return !args.includes(val);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

const destroyer = (arr, ...valsToRemove) =>
  arr.filter((elem) => !valsToRemove.includes(elem));
