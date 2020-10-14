// function uniteUnique(arr) {
//   return arr;
// }

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// ////////
//this workes
function uniteUnique(arr1, arr2, arr3) {
    //The call() allows for a function/method belonging to one 
    // object to be assigned and called for a different object. 
    // call() provides a new value of this to the function/method. 
    // With call() , you can write a method once and then inherit 
    // it in another object, without having to rewrite the method 
    // for the new object.
  var args = Array.prototype.slice.call(arguments);
  let newArr = args.reduce(function(arrA,arrB){
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;                    
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


