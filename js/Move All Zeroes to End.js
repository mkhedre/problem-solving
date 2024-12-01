function pushZerosToEnd(array) {
  const filterArr = array.filter((item) => item == 0);
  const filternonArr = array.filter((item) => item !== 0);

  return [...filternonArr, ...filterArr];
}
console.log(pushZerosToEnd([1, 2, 3, 3, 0, 0, 130, 0]));
