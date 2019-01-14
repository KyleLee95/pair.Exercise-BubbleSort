function split(wholeArray) {
  let midpoint = Math.floor(wholeArray.length / 2);
  let left = wholeArray.slice(0, midpoint);
  let right = wholeArray.slice(midpoint, wholeArray.length); //right larger than the left

  return [left, right];
}

console.log(split([1, 2, 3, 4, 5, 6, 7]));
