describe("Split Array function", function() {
  let test_sort_arr = [1, 2, 3, 4, 5, 6, 7, 0];
  let sorted_arr = [[1, 2, 3, 4], [5, 6, 7, 0]];
  it("is able to split an array into two halves", function() {
    // your code here
    const splitArr = split(test_sort_arr);
    expect(splitArr).toEqual(sorted_arr);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    // test the merging algorithm
  });
});
