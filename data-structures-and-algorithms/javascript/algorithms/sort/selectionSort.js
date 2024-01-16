const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//                             1                     0
function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let smallestIndex = i;
    let smallestNum = array[i];
    for (let j = i; j < length - 1; j++) {
      if (array[j + 1] < array[smallestIndex]) {
        smallestIndex = j + 1;
      }
    }
    array[i] = array[smallestIndex];
    array[smallestIndex] = smallestNum;
    console.log(smallestIndex);
  }
}

selectionSort(numbers);
console.log(numbers);
