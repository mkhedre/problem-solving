function summitation(n, arr) {
  //  return sum of abs
  return Math.abs(arr.reduce((prev, current) => prev + current));
}

console.log(summitation(4, [-1, 2, -3]));
