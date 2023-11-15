function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  const mergedArray = [];

  while (left.length > 0 && right.length > 0) {
    let arrayMin;

    if (left[0] < right[0]) arrayMin = left;
    else arrayMin = right;

    const mergeEle = arrayMin.shift();
    mergedArray.push(mergeEle);
  }
  return mergedArray.concat(left, right);
}
console.log(mergeSort([5, 10, 25, -1, 3, 18, -4, 7, 18]));

console.log(mergeSort([1, 3, 4, 6, 7, 78, 11]));
