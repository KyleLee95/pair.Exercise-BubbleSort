function bubbleSort(arr) {
  debugger;
  if (arr.length === 0) {
    return undefined;
  }
  if (arr.length === 1) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let cur = arr[j];
        let next = arr[j + 1];
        //Breaks right here after the first call. because cur is defined but next = undefined
        //so it won't step into the loop
        if (next === undefined) {
          continue;
        } else if (cur !== undefined && next !== undefined) {
          let newArr = swap(cur, next);
          arr[j] = newArr[0];
          arr[j + 1] = newArr[1];
        }
      }
      console.log(arr);
    }
    return arr;
  }
}

function swap(cur, next) {
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
