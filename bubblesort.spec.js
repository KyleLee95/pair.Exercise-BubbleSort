// describe("Bubble Sort", function() {
//   const arr = [];
//   arr.swap = function() {
//     let retArr = [];
//     if (cur > next) {
//       let temp = cur;
//       cur = next;
//       next = temp;
//       retArr = [cur, next];
//     }
//     return retArr;
//   };
//   arr.bubbleSort = function() {};
//   beforeAll(function() {
//     spyOn(window, "swap").and.callThrough(); // replace existing `tootsiepop['lick']` method
//   });
//   it("counts the number of times function swap was called", function() {
//     arr.bubbleSort();
//     expect(arr.swap.calls.count()).toEqual(0);
//   });

//   it("handles an empty array", function() {
//     expect(bubbleSort([])).toEqual(undefined);
//     arr.bubbleSort([]);
//     expect(arr.swap.calls.count()).toEqual(0);
//   });

//   it("handles a single item", function() {
//     arr.push(0);
//     expect(bubbleSort([0])).toEqual([0]);
//     expect(arr.swap.calls.count()).toEqual(0);
//   });

//   it("handles many items (nums)", function() {
//     arr.push(0, 2, 5, 6, 3);
//     expect(bubbleSort([0, 2, 5, 6, 3])).toEqual([0, 2, 3, 5, 6]);

//     expect(arr.swap.calls.count()).toEqual(2);
//   });

//   it("handles many items (letters)", function() {
//     arr.push("d", "c", "a", "f", "e");
//     expect(bubbleSort(["d", "c", "a", "f", "e"])).toEqual([
//       "a",
//       "c",
//       "d",
//       "e",
//       "f"
//     ]);
//     expect(arr.swap.calls.count()).toEqual(4);
//   });
// });

// describe("bubble sort", function() {
//   let test_sort_arr = [1, 2, 3, 4, 5, 6, 7, 0];
//   let sorted_arr = [0, 1, 2, 3, 4, 5, 6, 7];

//   it("sorts the array", function() {
//     const sorted = bubbleSort(test_sort_arr);
//     expect(sorted).toEqual(sorted_arr);
//   });

//   it("uses swap the right amount of times", function() {
//     spyOn(window, "swap");
//     bubbleSort(test_sort_arr);
//     expect(swap.calls.count()).toEqual(7);
//   });
// });
