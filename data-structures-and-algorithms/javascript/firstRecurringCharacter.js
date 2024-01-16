//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  const charsSet = new Set();

  for (let i = 0; i < array.length; i++) {
    if (charsSet.has(array[i])) {
      return array[i];
    }
    charsSet.add(array[i]);
  }
  return undefined;
}

function firstRecurringCharacter2(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return undefined;
  }
  const map = {};

  for (let i = 0; i < input.length; i++) {
    // must be for undefined as number 0 evaluates to false in javascript
    if (map[input[i]] !== undefined) {
      return input[i];
    }
    map[input[i]] = true;
  }
  return undefined;
}

// from the course below
function firstRecurringCharacterV(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

function firstRecurringCharacterV2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
