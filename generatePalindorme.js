const fs = require('fs');

const MIN = -Math.pow(2, 31);
const MAX = Math.pow(2, 31) - 1;

const generateRandomNumber = () => {
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
};

const createPalindrome = num => {
    const strNum = num.toString().replace("-", "");
    return Number(strNum + strNum.split('').reverse().join(''));
};

const generatePalindromes = () => {
    const palindromes = [];

    for (let i = 0; i < 10000; i++) {
        const randomNumber = generateRandomNumber();
        palindromes.push(randomNumber);
    }

    return palindromes;
};

const convertToPalindromesByPercentage = (numbers, percentage = 10) => {
    const totalToConvert = Math.floor((numbers.length * percentage) / 100);

    let indicesToConvert = [];

    while (indicesToConvert.length < totalToConvert) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        if (!indicesToConvert.includes(randomIndex)) {
            indicesToConvert.push(randomIndex);
        }
    }

    for (const index of indicesToConvert) {
        numbers[index] = createPalindrome(numbers[index]);
    }

    return numbers;
};

const saveToFile = (filename, data) => {
    fs.writeFileSync(filename, JSON.stringify(data, null, 4));
};

// Gerar números
const numbers = generatePalindromes();
// Converter um percentual dos números em palíndromos
const percentageToConvert = 30;  // Por exemplo, 30%
const convertedNumbers = convertToPalindromesByPercentage(numbers, percentageToConvert);
// Salvar para um arquivo
saveToFile('palindromoArray.json', convertedNumbers);
