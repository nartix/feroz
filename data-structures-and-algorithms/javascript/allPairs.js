const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) { // O(n)
  for (let j = 0; j < array.length; j++) { // O(n)
    if (j === i) continue;
    console.log(array[i], array[j]);
  }
}

// Big O(n*n) = O(n^2)