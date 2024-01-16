// Give n, find index value of n where n is the index. Example n=5, answer=3
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987
// 0, 1, 2, 3, 4, 5
function fibonacciRecursive(n) {
  // better: n < 2
  if (n === 0) {
    return n;
  }

  let first = 0;
  let second = 1;
  function fibonacci(num) {
    if (num > 1) {
      let temp = second;
      second = first + second;
      first = temp;
      console.log(first, second);
      fibonacci(num - 1);
    }
  }
  fibonacci(n);
  return second;
}

function fibonacciIterative(number) {
  if (number < 2) {
    return number;
  }

  let first = 0;
  let second = 1;

  for (let i = 1; i < number; i++) {
    let temp = second;
    second = first + second;
    first = temp;
    console.log(first, second, i);
  }
  return second;
}

console.log(fibonacciIterativeRecursive(12));
