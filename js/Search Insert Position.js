// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

function searchInsert(nums, target) {
  // o(n*2)
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element >= target) return index;
  }

  // o(log n)
}
console.log(searchInsert([1, 3, 52, 6], 5));

// User function Template for javascript

class Solution {
  // Function returns the second largest element
  getSecondLargest(arr) {
    // Code Here
    let largest = -1;
    let secondLargest = -1;

    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
      }
    }

    return secondLargest;
  }
}
const slo = new Solution();
// console.log(slo.getSecondLargest([10, 1, 10, 5]));

function getSecondLargest(arr) {
  const n = arr.length;
  // as sorting the array takes O(n*logn)
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = n - 2; i >= 0; i--) {
    if (sortedArr[i] !== sortedArr[i + 1]) {
      return sortedArr[i];
    }
  }
  return -1;
}
console.log(getSecondLargest([10, 10, 10]));

function getSecondLargest_two_pass(array) {
  let largest = -1;
  let secondLargest = -1;
  // first approach
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > largest) largest = element;
  }
  // second approach
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element > secondLargest && element !== largest) {
      secondLargest = element;
    }
  }
  return secondLargest;
}
console.log(getSecondLargest_two_pass([10, 5, 10]));

function findDuplicateIndices(arr) {
  const elementCount = {}; // Stores the count of each element (1st pass)
  const duplicateIndices = []; // Stores indices of duplicates (2nd pass)

  // First pass: Count occurrences of each element
  arr.forEach((element) => {
    elementCount[element] = (elementCount[element] || 0) + 1;
  });
  console.log(elementCount);

  // Second pass: Collect indices of duplicate elements
  arr.forEach((element, index) => {
    console.log(element, index);

    if (elementCount[element] > 1) {
      duplicateIndices.push(index);
    }
  });

  return duplicateIndices;
}

// Test the function
const array = [1, 2, 3, 2, 4, 1, 5, 3];
console.log(findDuplicateIndices(array));
// Output: [0, 1, 3, 5, 2, 7]
