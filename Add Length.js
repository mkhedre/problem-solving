// Code wars Kata8 Solutions

// Add Length

// What if we need the length of the words separated
//  by a space to be added at the end of that same word and have it returned as an array?

// Convert the String into Array by Space Sperator
// Loop through the Array
// Return the New Word with it's Length

function addLength(str) {
  return str.split(' ').map((element) => element + ' ' + element.length);
}

function binarySearch(arr, low, high, key) {
  let mid = Math.round((low + high) / 2);
  if (high < low) return -1;
  if (key == arr[mid]) return mid;
  if (key > arr[mid]) {
    return binarySearch(arr, mid + 1, high, key);
  }
  return binarySearch(arr, 0, mid - 1, key);
}
let arr = [5, 6, 7, 8, 9, 10];
let n, key;

n = arr.length;
key = 10;

console.log(binarySearch(arr, 0, n - 1, key));

function searchInsert(nums, target) {
  let min = 0;
  let max = arr.length;
  let mid = (min + max) / 2;
}
// nums = [1,3,5,6], target = 5
// 2
