function chunkArrayInGroups(arr, size) {
  let result = [];
  let len = arr.length;
  for (let i = 0; i < len / size; i++) {
    result.push(arr.splice(0, size));
    // arr.splice(0, size);
    console.log(" " + i + " :" + result);
    console.log(arr);
  }
  console.log(result);
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 3);
chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups(["a", "b", "c", "d"], 1);
