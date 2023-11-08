function fib(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  return arr;
}

console.log(fib(10));
