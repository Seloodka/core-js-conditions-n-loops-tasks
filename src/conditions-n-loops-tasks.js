/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    return a > c ? a : c;
  }

  return b > c ? b : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }

  if (queen.x === queen.y && king.x === king.y) {
    return true;
  }

  if (queen.x + queen.y === king.x + king.y) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }

  return a === b || b === c || a === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
  };

  if (num < 10) {
    return romanNumerals[num];
  }

  let romanNum = '';
  let buffNum = num;

  while (buffNum > 0) {
    if (buffNum > 10) {
      romanNum += romanNumerals[10];
    } else {
      romanNum += romanNumerals[buffNum];
    }

    buffNum -= 10;
  }

  return romanNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let stringNumbers = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    const key = numberStr[i];

    switch (key) {
      case '0':
        stringNumbers += 'zero';
        break;
      case '1':
        stringNumbers += 'one';
        break;
      case '2':
        stringNumbers += 'two';
        break;
      case '3':
        stringNumbers += 'three';
        break;
      case '4':
        stringNumbers += 'four';
        break;
      case '5':
        stringNumbers += 'five';
        break;
      case '6':
        stringNumbers += 'six';
        break;
      case '7':
        stringNumbers += 'seven';
        break;
      case '8':
        stringNumbers += 'eight';
        break;
      case '9':
        stringNumbers += 'nine';
        break;
      case '-':
        stringNumbers += 'minus';
        break;
      case '+':
        stringNumbers += 'plus';
        break;
      case '.':
      case ',':
        stringNumbers += 'point';
        break;
      default:
        break;
    }

    if (i !== numberStr.length - 1) {
      stringNumbers += ' ';
    }
  }

  return stringNumbers;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const strNum = String(num);
  for (let i = 0; i < strNum.length; i += 1) {
    if (Number(strNum[i]) === digit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let totalSum = 0;
  let leftSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    totalSum += arr[i];
  }

  for (let i = 0; i < arr.length; i += 1) {
    totalSum -= arr[i];

    if (leftSum === totalSum && i > 0) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  const finNum = size ** 2;
  let currNum = 1;

  let row = 0;
  let col = 0;

  let left = 0;
  let top = 0;
  let right = size - 1;
  let bottom = size - 1;

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  while (currNum < finNum) {
    while (row === top && col < right) {
      matrix[row][col] = currNum;
      currNum += 1;

      col += 1;
    }
    top += 1;

    while (col === right && row < bottom) {
      matrix[row][col] = currNum;
      currNum += 1;

      row += 1;
    }
    right -= 1;

    while (row === bottom && col > left) {
      matrix[row][col] = currNum;
      currNum += 1;

      col -= 1;
    }
    bottom -= 1;

    while (col === left && row > top) {
      matrix[row][col] = currNum;
      currNum += 1;

      row -= 1;
    }
    left += 1;
  }

  matrix[row][col] = currNum;

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrix90 = matrix;
  for (let i = 0; i < matrix90.length; i += 1) {
    for (let j = i; j < matrix90.length; j += 1) {
      [matrix90[i][j], matrix90[j][i]] = [matrix90[j][i], matrix90[i][j]];
    }
  }

  for (let i = 0; i < matrix90.length; i += 1) {
    for (let j = 0; j < matrix90.length / 2; j += 1) {
      const k = matrix90.length - 1 - j;

      [matrix90[i][j], matrix90[i][k]] = [matrix90[i][k], matrix90[i][j]];
    }
  }

  return matrix90;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(array) {
  const partition = (arr, low, high) => {
    const pArr = arr;
    const pivot = pArr[high];

    let i = low - 1;

    for (let j = low; j < high; j += 1) {
      if (pArr[j] < pivot) {
        i += 1;
        [pArr[i], pArr[j]] = [pArr[j], pArr[i]];
      }
    }

    [pArr[i + 1], pArr[high]] = [pArr[high], pArr[i + 1]];
    return i + 1;
  };

  const quickSort = (arr, low, high) => {
    if (low >= high) {
      return arr;
    }

    const pivotIndex = partition(arr, low, high);

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);

    return arr;
  };

  const sortedArr = quickSort(array, 0, array.length - 1);

  return sortedArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let shuffledStr = str;
  let i = 0;
  const iterationStrings = {};

  do {
    let evenChars = '';
    let oddChars = '';

    for (let j = 0; j < shuffledStr.length; j += 2) {
      evenChars += shuffledStr[j];
      oddChars += shuffledStr[j + 1];
    }

    shuffledStr = evenChars + oddChars;
    i += 1;

    if (i === iterations) {
      return shuffledStr;
    }

    iterationStrings[i] = shuffledStr;
  } while (shuffledStr !== str);

  return iterationStrings[iterations % i];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  const splitNum = [];
  let tempNum = number;
  let switchInd;

  while (tempNum) {
    splitNum.unshift(tempNum % 10);
    tempNum = Math.floor(tempNum / 10);

    if (switchInd !== undefined) {
      switchInd += 1;
    }

    if (!switchInd && splitNum[0] < splitNum[1]) {
      switchInd = 0;
    }
  }

  const rightHalf = splitNum.splice(switchInd + 1).sort();
  const switchInd2 =
    rightHalf.findIndex((dig) => splitNum[switchInd] < dig) + splitNum.length;

  const ansArr = [...splitNum, ...rightHalf];

  [ansArr[switchInd], ansArr[switchInd2]] = [
    ansArr[switchInd2],
    ansArr[switchInd],
  ];

  let multiplier = 1;
  const ans = ansArr.reduceRight((acc, digit) => {
    const num = digit * multiplier + acc;
    multiplier *= 10;

    return num;
  }, 0);

  return ans;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
