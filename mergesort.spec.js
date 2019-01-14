describe("Split Array function", function() {
  let test_sort_arr = [1, 2, 3, 4, 5, 6, 7, 0];
  let sorted_arr = [[1, 2, 3, 4], [5, 6, 7, 0]];
  it("is able to split an array into two halves", function() {
    const splitArr = split(test_sort_arr);
    expect(splitArr).toEqual(sorted_arr);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    let test_split_arr = [[2], [1]];
    let merged_arr = [1, 2];
    const splitArr = merge(test_split_arr);
    expect(splitArr).toEqual(merged_arr);
  });
});
