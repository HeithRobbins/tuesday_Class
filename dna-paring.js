//www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

// https: function pairElement(str) {
//   return str;
// }

// pairElement("GCG");

// function pairElement(str) {
//   // Return each strand as an array of two elements, the original and the pair.
//   var paired = [];

//   // Function to check with strand to pair.
//   var search = function (char) {
//     switch (char) {
//       case "A":
//         paired.push(["A", "T"]);
//         break;
//       case "T":
//         paired.push(["T", "A"]);
//         break;
//       case "C":
//         paired.push(["C", "G"]);
//         break;
//       case "G":
//         paired.push(["G", "C"]);
//         break;
//     }
//   };

//   // Loops through the input and pair.
//   for (var i = 0; i < str.length; i++) {
//     search(str[i]);
//   }

//   return paired;
// }

// // test here
// console.log(pairElement("GCG"));

//change it to a dictionnary in stand of a swicth case

String.prototype.map = function (func) {
  return this.split("").map(func);
};
function pairElement(dna) {
  let lookUpObject = {
    A: ["A", "T"],
    T: ["T", "A"],
    C: ["C", "G"],
    G: ["G", "C"],
  };
  let result = dna.map((item) => lookUpObject[item]);
  // return dna.map((item) => lookUpObject[item])
  return result;
}
