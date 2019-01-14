function split(wholeArray) {
  let midpoint = Math.floor(wholeArray.length / 2);
  let left = wholeArray.slice(0, midpoint);
  let right = wholeArray.slice(midpoint, wholeArray.length); //right larger than the left

  return [left, right];
}

console.log(split([1, 2, 3, 4, 5, 6, 7]));

function merge(splitArray) {
  let cur = splitArray[0][0]
  let next = splitArray[1][0]
  let retArr = [];
  if (cur > next) {
    let temp = cur;
    cur = next;
    next = temp;
    retArr = [cur, next];
  } else {
    retArr = [cur, next];
  }
  return retArr;
}

console.log(merge([[2], [1]]))
