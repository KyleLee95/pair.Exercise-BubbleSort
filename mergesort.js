function split(wholeArray) {
  let midpoint = Math.floor(wholeArray.length / 2);
  if (wholeArray.length === 1) {
    //done splitting
    return wholeArray;
  }
  let left = wholeArray.slice(0, midpoint);
  let right = wholeArray.slice(midpoint, wholeArray.length); //right larger than the left
  return [left, right];
}

// console.log(split([2,1]));

function merge(splitArray) {
  if (splitArray.length === 1) {
    return splitArray[0]; //splitArray[0]
  }
  if (splitArray[0].length !== 1) {
    split(splitArray[0]);
    split(splitArray[1]);
  }

  //Merging when splitArray.length > 1
  let cur = splitArray[0][0];
  let next = splitArray[1][0];
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

// console.log(split([1]));

function mergeSort(arr) {
  if (!arr.length) {
    return [];
  }
  if (arr.length === 1) {
    return merge(arr);
  } else {
    return mergeSort(split(arr));
  }
}

console.log(merge([[2, 4], [1, 5]]));
