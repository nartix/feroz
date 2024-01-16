// validate input
// store first item from both arrays
// loop the total length of both arrays
// stop if first item of second array is small than current item of first array.

function mergeSortedArrays(array1, array2) {
  if (!Array.isArray(array1) && !Array.isArray(array2)) {
    return [];
  }
  if (array1.length === 0 || !Array.isArray(array1)) {
    return array2;
  }
  if (array2.length === 0 || !Array.isArray(array2)) {
    return array1;
  }

  total = array1.length + array2.length;
  const mergedArray = new Array(total);

  let array1Item = array1[0];
  let array2Item = array2[0];

  let array1Index = 0;
  let array2Index = 0;

  for (let i = 0; i < total; i++) {
    console.log(array1Item, array2Item);
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray[i] = array1[array1Index];
      array1Index++;
      array1Item = array1[array1Index];
      // else array2Item is equal to or less than array1Item
    } else {
      mergedArray[i] = array2[array2Index];
      array2Index++;
      array2Item = array2[array2Index];
    }
  }

  return mergedArray;
}

// from course
function mergeSortedArrays2(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item !== undefined || array2Item !== undefined) {
    console.log(array1Item, array2Item);
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0, 1, 2, 3], [0, 1, 3, 4]));
