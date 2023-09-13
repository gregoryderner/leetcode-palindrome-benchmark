const fs = require('fs');

const isPalindrome = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }
  var half = 0;
  while (x > half) {
    half = half * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return x === half || x === Math.floor(half / 10);
};

const loadPalindromesFromFile = () => {
  const data = fs.readFileSync('palindromoArray.json', 'utf8');
  return JSON.parse(data);
};

const testEfficiency = (palindromes) => {
  const startUsage = process.memoryUsage().heapUsed;
  console.time('isPalindrome Execution Time');

  for (let i = 0; i < palindromes.length; i++) {
    const palindrome = palindromes[i];
    //console.log(`Testing value: ${palindrome}`);
    if (isPalindrome(palindrome)) {
      console.log(`Value ${palindrome} is a palindrome!`)
    }
  }

  console.timeEnd('isPalindrome Execution Time');

  const endUsage = process.memoryUsage().heapUsed;
  console.log(`Memory used: ${(endUsage - startUsage) / 1024 / 1024} MB`);
};

const palindromes = loadPalindromesFromFile();
testEfficiency(palindromes);
