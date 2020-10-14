function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let start = alphabet.indexOf(str[0])
    for (let i =0; str.length; i++, start++) {
        if (alphabet[start] !=str[i]) {
            return alphabet[start]
        }
    }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"))
console.log(fearNotLetter("stvwx"))
consoel.log(fearNotLetter("bcdf"))



function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first charcter + no of iteration
    hence character has been escaped*/
    if ( code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return*/
      return String.fromCharCode(code-1);
    }  
  }
  return undefined;
}

// test here
console.log(fearNotLetter("abcefh"));