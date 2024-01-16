'use strict';
// https://leetcode.com/problems/move-zeroes/

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// worst - O(n^2) - loop nesting - splice O(n) operation
var moveZeroes = function (nums) {
  if (nums.length === 1) return nums;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) nums.push(nums.splice(i, 1)[0]);
  }
};

var moveZeroes2 = function (nums) {
  if (!nums || !Array.isArray(nums) || nums.length <= 1) return nums;

  let zeroIndex = null;
  let moveNum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0 && zeroIndex === null) zeroIndex = i;

    if (nums[i] === moveNum && nums[i + 1] !== moveNum) {
      [nums[zeroIndex], nums[i + 1]] = [nums[i + 1], nums[zeroIndex]];
      zeroIndex++;
    }
  }
};

// Most simpler, but not better because it's swapping values with itself
// Worst for array no zero, as it'll swap with itself until it finds a zero
var moveZeroes3 = function (nums) {
  if (!Array.isArray(nums) || nums.length <= 1) return nums;

  // 2 1 0 0 3   ip 0
  // 2 1 0 0 3   ip 1
  // 2 1 0 0 3   ip 2
  // 2 1 0 0 3   ip 2
  // 2 1 3 0 0   ip 3
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];
      insertPos++;
    }
  }
  return nums; // Optional, depending on whether you want to return the array.
};

// little better
// records the first occurrence of zero
// then swaps the value with the position of zero, zero's position incremented after
// will skip if there is no zero, avoiding swapping
var moveZeroes4 = function (nums) {
  if (!Array.isArray(nums) || nums.length <= 1) return nums;
  let insertPos = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && insertPos === null) insertPos = i;
    if (insertPos !== null && nums[i] !== 0) {
      [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];
      insertPos++;
    }
  }
};

// two loops, not good as well
// swap happening for all non zeroes
var moveZeroes5 = function (nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i];
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// 0 1 0 0 3 12
// 1 0 0 0 3 12 zero index 1
// 1 0 0 0 3 12            1
// 1 3 0 0 0 12            2
// 1 3 12 0 0 0            3

// loop
// if current is 0 and next is zero
// record the index of current
// else next is not zero then
// switch pointer

// console.log('switching', nums[i], zeroIndex);
// let temp = nums[zeroIndex];
// nums[zeroIndex] = nums[i + 1];
// nums[i + 1] = temp;

let nums = [0, 0, 5, 4, 0, 0, 1, 0, 0, 0, 3, 12, 0, 0];
// let nums = [2, 1, 0, 3, 12];
// let nums = [0, 0, 0];
moveZeroes4(nums);
console.log(nums);
