var runs = 0;
function fibonacci(n) {
  runs++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let steps = 0;
function fibonacciMemoized() {
  const cache = {};
  return function fibonacci(n) {
    steps++;
    if (n in cache) {
      return cache[n];
    }
    if (n < 2) {
      return n;
    }
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  };
}

const index = 10;
console.log('Fibonacci', fibonacci(index), 'Steps', runs);
console.log('Fibonacci', fibonacciMemoized()(index), 'Steps', steps);
