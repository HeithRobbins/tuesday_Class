function frankenSplice(arr1, arr2, n) {
  let joinArray = arr2.slice();
  joinArray.splice(n, 0, ...arr1);
  return joinArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
