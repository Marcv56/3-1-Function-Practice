(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  let max = (num1, num2) => {
    if (num1 >= num2) {
      return num1;
    } else {
      return num2;
    }
  }

  console.assert(max(5, 6) === 6, 'error: max() function');
  console.assert(max(3, 2) === 3, 'error: max() function');

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  let maxOfThree = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  }

  console.assert(max(5, 4, 3) === 5, 'error: max() function');

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  let isVowel = (char) => {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return true;
    } else {
      return false;
    }
  }

  console.assert(isVowel('a') === true, 'error: isVowel() function');
  console.assert(isVowel('e') === true, 'error: isVowel() function');
  console.assert(isVowel('i') === true, 'error: isVowel() function');
  console.assert(isVowel('o') === true, 'error: isVowel() function');
  console.assert(isVowel('u') === true, 'error: isVowel() function');
  console.assert(isVowel('n') === false, 'error: isVowel() function');

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
  function translate(str) {
    var q = '';

    str.split("").map(function(p, c) {
      if (p != ' ') q += p + 'o' + p;
      else q += ' ';
    });

    return q;
  }

  var phrase = 'this is fun',
    x = translate(phrase);

  console.log(translate("this is fun"));

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }

  console.log(sum([1, 2, 3, 4]));

  function multiply(numbers) {
    var total = 1;
    for (var i = 0; i < numbers.length; i++) {
      total *= numbers[i];
    }
    return total;
  }

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  function reverse(str) {
    var text = '';

    for (let i = 0; i < str.length; i++) {
      text = str[i] + text;
    }

    return text.toLowerCase();
  }
  console.log(reverse("jag testar"));

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  function findLongestWordLength(arr) {

    let maxLength = 0;

    for (var i = 0; i < arr.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }

    return maxLength;
  }

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
  var filterLongWords = function(array, i) {
    var newArray = [];
    array.forEach(function(element) {
      if (element.length > i) {
        newArray.push(element)
      };
    });
    return newArray;
  }

  console.log(filterLongWords(["hello", "my", "name", "is", "Marcos"], 3));


  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  function charFreq(str) {
    var frequencies = {}
    for(let i = 0; i < str.length; i++){
      if(frequencies[str[i]] !== undefined) {
        // if the char exists in the frequencies object ...
        frequencies[str[i]] += 1;
      } else {
        // if the character does not exist ...
        frequencies[str[i]] = 1;
      }
    }
    return frequencies
  }
})();
