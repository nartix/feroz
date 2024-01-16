// Note: check from course file for better answer!!!

// 5! = 5*4*3*2*1
function FindFactorialRecursive(number) {
  let result = 1;
  function factorial(number) {
    if (number > 1) {
      result *= number;
      factorial(number - 1);
    }
  }
  factorial(number);
  return result;
}
console.log(FindFactorialRecursive(5));
