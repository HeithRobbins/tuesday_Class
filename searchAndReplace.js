// //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

// // https: function myReplace(str, before, after) {
// //   return str;
// // }

// // i still can't get one of them to work and not able found out why this isn't working

// function myReplace(str, before, after) {
//   let newStr = str.split(" ");
//   for (var a = 0; a < str.length; a++) {
//     if (before === newStr[a]) {
//       str = str.replace(before, after);
//     }
//     if (before[0] === before[0].toUpperCase()) {
//       var swap = after[0].toUpperCase() + after.slice(1);
//       str = str.replace(before, swap);
//     }
//   }
//   return str;
// }

// console.log(
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
// );

// String.prototype.capitalize = function () {
//   return this.charAt(0).toUpperCase() + this.slice(1);
// }

//////////////////////////////////
// very cool prototype method //
//////////////////////////////////
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
String.prototype.lowerCase = function () {
  return this.charAt(0).toLowerCase() + this.slice(1);
};
function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()) {
    return str.replace(before, after.capitalize());
  } else {
    return str.replace(before, after.lowerCase());
  }
}
