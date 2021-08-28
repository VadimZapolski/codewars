function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2).sort(function(a, b) {
  return a - b;
})
  let arr = [...new Set(arr3)];
  return arr
}
