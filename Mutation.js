function mutation(arr) {
  var fristArray = arr[0].toLowerCase();
  var secondArray = arr[1].toLowerCase();
  for (var i = 0; i < fristArray.length; i++) {
    if (secondArray.indexOf(fristArray[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
