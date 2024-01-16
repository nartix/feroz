class Stack {
  constructor() {
    this.array = new Array();
    // this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}
const stack = new Stack();
stack.push('google');
stack.push('bing');
stack.push('udemy');
// stack.pop();
// stack.pop();

console.log(stack);
console.log(stack.peek());
