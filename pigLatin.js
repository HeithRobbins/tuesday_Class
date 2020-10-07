//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
// Intermediate Algorithm Scripting: Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// let listOfConsonent = ["b", "c", "d", "e", "f", "g", "h", "j", "k"];

// function translatePigLatin(word) {
//   if (listOfConsonant.includes(word[0])) {
//     console.log(word);
//   }
// }

// //this one work and passes
// function translatePigLatin(str) {
//   let vowelRegEx = /[aeiou]/g;

//   // if string starts with a vowel append `way` at end
//   if (str[0].match(vowelRegEx)) {
//     str += "way";
//     // if str contains a vowel move first consonant (or consonant cluster)
//     // to the end of the str and add `ay`
//   } else if (str.match(vowelRegEx)) {
//     str = str.replace(/([^aeiou]+)(\w*)/, "$2$1" + "ay");
//   } else {
//     // if we have no vowels just add `ay` at end of string
//     str = str + "ay";
//   }

//   return str;
// }

function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let ind = [...str.toLowerCase()].findIndex((s) => vowels.includes(s));
  return ind
    ? str.slice(ind) + str.slice(0, ind) + "ay" // doesn't start with vowel
    : str + "way";
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));
