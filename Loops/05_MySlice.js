//Write a function mySlice that accepts up to three arguments:

//originalString (string)
//startIdx (number, optional)
//endIdx (number, optional)
//mySlice should return a string.
//The returned string should be a copy of the original string.
//If the user defines a startIdx, the returned string should start at that index:

let mySlice = (str, startIdx, endIdx) => {
  if (startIdx === undefined && endIdx === undefined) {
    return str;
  }

  let newArr = [];
  if (startIdx && endIdx === undefined) {
    let arr = str.split('');
    for (i = startIdx; i < arr.length; i++) {
    newArr.push(arr[i]);
    }
  }

  if (startIdx && endIdx) {
    let arr = str.split('');
    for (i = startIdx; i < endIdx; i++) {
    newArr.push(arr[i]);
    }
  }

  return newArr.join('');
}
