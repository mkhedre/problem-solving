function reverse(arr) {
  //   let temp = [];
  //   for (let index = 0; index < array.length; index++) {
  //     temp[index] = array[array.length - 1 - index];
  //   }

  //   return temp;
  //   two pointer
  let left = 0,
    right = arr.length - 1;
  //   for (let i = 0; i < arr.length / 2; i++) {
  //     const element = arr[i];
  //     // [arr[left], arr[right]] = [arr[right], arr[left]];
  //     let temp = arr[i];
  //     arr[i] = arr[n - i - 1];
  //     arr[n - i - 1] = temp;
  //   }
  // Iterate till left is less than right
  while (left < right) {
    // Swap the elements at left and right position
    [arr[left], arr[right]] = [arr[right], arr[left]];

    // Increment the left pointer
    left++;

    // Decrement the right pointer
    right--;
  }
  return arr;
}
console.log(reverse([1, 2, 3, 4, 5]));
