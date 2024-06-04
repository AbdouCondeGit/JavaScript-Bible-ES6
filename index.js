/**
 * CHALLENGE 1-1 TASK
 *
 * Rewrite code below using let, const and var according to
 * variables usage guidelines
 */
"use strict";
const numbers1 = [23, 87, 110, 11, 20, 5, 34];
const numbers2 = [11, 21, 31];

const onlyOddNumbers = function(arr) {
  var  oddNumbers = [];
  var EVEN_NUMBERS_QUANTITY = 0;
  const LEN = arr.length;

  for (let i = 0; i < LEN; i++) {
    arr[i] % 2
      ? oddNumbers.push(arr[i])
      : EVEN_NUMBERS_QUANTITY++;
  }

  if (EVEN_NUMBERS_QUANTITY === 0) {
    let info = "Array contains only odd numbers";
    console.log(info);
  } else {
    let info =
      "There are " +
      EVEN_NUMBERS_QUANTITY +
      " even numbers";
    console.log(info);
  }

  return {
    oddNumbersKey: oddNumbers,
    EVEN_NUMBERS_QUANTITYValue: EVEN_NUMBERS_QUANTITY
  };

};

console.log(onlyOddNumbers(numbers1));
console.log(onlyOddNumbers(numbers2));