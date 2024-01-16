const array1 = ["a", "b", "c", "s"];
const array2 = ["p", "k", "r"];

function compareTwoArrays(array1, array2) {
  // not good, as the spread operator adds time complexity of n^2,
  // as nested loop is happening as it accumulates the obj
  const object1 = array1.reduce((obj, val, i) => ({ ...obj, [val]: i }), {});

  for (let i = 0; i < array2.length; i++) {
    if (object1.hasOwnProperty(array2[i])) {
      return true;
    }
  }
  return false;
}

// best - compares null, numbers; not arrays or objects - only memory references are compared
const compareTwoArrays2 = (array1, array2) => {
  let array1Set = new Set(array1);

  console.log([...array1Set]);

  for (let i = 0; i < array2.length; i++) {
    if (array1Set.has(array2[i])) {
      return true;
    }
  }
  return false;
};

// good but manual loop, very verbose
// this compare everything
function compareTwoArrays3(array1, array2) {
  let objArray1 = {};
  for (let i = 0; i < array1.length; i++) {
    if (!objArray1[array1[i]]) {
      // if (!objArray1.hasOwnProperty(array1[i])) {
      // should not be i as it has 0, which would mean false when checking
      objArray1[array1[i]] = true;
    }
  }
  for (let j = 0; j < array2.length; j++) {
    if (objArray1[array2[j]]) {
      // if (objArray1.hasOwnProperty(array2[j])) {
      return true;
    }
  }
  return false;
}

console.log(compareTwoArrays3(array1, array2), array1.toString());
