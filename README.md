# Benchmark for Palindrome Algorithms

## Motivation

I decided to go back to some problem-solving platforms to test my algorithms and came across this [palindrome question on LeetCode](https://leetcode.com/problems/palindrome-number/). When running the tests, I noticed that the same code would give me different execution times, even though it was the exact same code. I saw that the final code I submitted was basically the same one another user had submitted (ranking at 98%), and mine was at 88%. Therefore, I decided to isolate the test to truly know the performance of my algorithm. Here it is.

We need to keep in mind that the platform probably generates a random number of palidromes or even the values of each one. And this will make the tests really different. Furthermore, if the tests are not carried out in isolation and there are competitions being processed, we can definitely have different results.

## File Structure

- `generatePalindorme.js`: Script that generates random numbers and converts a percentage of them into palindromes, saving them to a file named `palindromoArray.json`.
- `package.json`: Contains the necessary dependencies and the scripts to run the benchmark.
- `palindrome.js`: it's just a way to return some palidromes found in the generated file.
- `test.js`: Script to benchmark the three palindrome implementations using the Benchmark.js library.

- There is a "gc-stats" dependency which is to calculate how much memory was used. But I didn't finish the implementation.

## How to Run

1. Install the necessary dependencies: `npm install`
2. Run the script `generatePalindorme.js` to generate the random numbers and palindromes: `npm run generate`
3. To benchmark the palindrome implementations, use: `npm run bench`
