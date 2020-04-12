// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}


// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {
  var Arraylen = words.length
  var maxlen = 0;
  if (Arraylen == 0) {
    return null;
  }
  else if (Arraylen == 1) {
    return words[0];
  }
  else {
    for (let i = 0; i < Arraylen; i++) {
      var wrd = words[i].length;
      if (wrd > maxlen) {
        maxlen = wrd;
        var lengthy_word = words[i]
      }
    }
    return lengthy_word;
  }
}


// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  if (numbers.length == 1) {
    var sum = 0;
    return (sum = sum + numbers[0]);
  } else {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      var num = numbers[i];
      sum = num + sum;
    }
    return sum;
  }
}

const Arrary = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156,];

function add(Array) {
  var sum = 0;
  if (Array.length == 0) {
    return 0;
  }
  else if (Array.length == 1) {
    var sum = 0;
    sum = sum + Array[0];
    return sum;
  }
  else {
    for (let i = 0; i < Array.length; i++) {
      if (typeof Array[i] == "string") {
        let len = Array[i].length;
        sum = sum + len;
      }
      if (typeof Array[i] == "boolean") {
        if (Array[i] == true) {
          sum = sum + 1;
        }
      }
      if (typeof Array[i] == "number") {
        sum = sum + Array[i];
      }
    }
    return sum;
  }
}


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  let len_Of_Arr = numbersAvg.length;
  if (len_Of_Arr == 0) {
    return null;
  } else {
    let i;
    let total = 0;
    for (i = 0; i < len_Of_Arr; i++) {
      total = total + numbersAvg[i];
    }
    let average = total / len_Of_Arr;
    return average;
  }
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if (wordsArr.length == 0) {
    return null;
  } else {
    for (let i = 0; i < wordsArr.length; i++) {
      let sum = 0;
      sum += wordsArr[i].length;
    }
    let average = sum / wordsArr.length;
    return average;
  }
}

//Bonus

const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function avg(mixedArr) {
  let sum = 0;
  if (mixedArr.length == 0) {
    return null;
  } else {
    for (let i = 0; i < mixedArr.length; i++) {
      if (typeof mixedArr[i] == "string") {
        let len = mixedArr[i].length;
        sum = sum + len;
      } else if (typeof mixedArr[i] == "boolean") {
        var x = mixedArr[i] / 1;
        sum = sum + x;
      } else if (typeof mixedArr[i] == "number") {
        sum = sum + mixedArr[i];
      } else {
        throw exception(
          "Unsupported data type (object or array) present in the array"
        );
      }
    }
  }
  let avrg = sum / mixedArr.length;
  return avrg;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique) {
  if (wordsUnique == 0) {
    return null;
  }
  let length = wordsUnique.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {

      if (i == j) {

      } else {

      }
    }
  } return wordsUnique;

}
var NewArr = wordsUnique.filter(uniqueArray);

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind, Element) {
  if (wordsFind == 0) {
    return null;
  } else {
    for (let i = 0; i < wordsFind.length; i++) {
      if (wordsFind[i] == Element) {
        return true;
      }
    }
    return false;
  }
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, matter) {
  let count = 0;
  if (wordsCount == 0) {
    return 0;
  } else {
    for (let i = 0; i < wordsCount.length; i++) {
      if (wordsCount[i] == matter) {
        count = count + 1;
      }
    } return count;
  }
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {

}
