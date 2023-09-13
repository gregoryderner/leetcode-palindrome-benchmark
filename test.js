const Benchmark = require('benchmark');
const gcStats = require('gc-stats')();

const fs = require('fs');
const pali = JSON.parse(fs.readFileSync('palindromoArray.json', 'utf8'));

const suite = new Benchmark.Suite;

// Função para verificar se um número é um palíndromo
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  let myString = x.toString().split("").reverse().join("");

  return !!(myString === x.toString());
}

function isPalindrome2(x) {
  if (x < 0) return false;
  var s = x.toString();
  var t = s.split("").reverse().join("");
  return s === t;
}
function isPalindrome3(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }
  var half = 0;
  while (x > half) {
    half = half * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return x === half || x === Math.floor(half / 10);
}

// Garbage Collector: Apenas para versões do Node.js com o flag --expose-gc ativado
if (typeof global.gc === 'function') {
  console.log("Forçando a coleta de lixo antes da execução...");
  global.gc();
  console.log("Coleta de lixo forçada concluída!");
}

// Adicionar testes ao Benchmark.js
suite.add('isPalindrome', () => {
  for (let i = 0; i < pali.length; i++) {
    const palindrome = pali[i];
    isPalindrome(palindrome);
  }
})
  .add('isPalindrome2', () => {
    for (let i = 0; i < pali.length; i++) {
      const palindrome = pali[i];
      isPalindrome2(palindrome);
    }
  })
  .add('isPalindrome3', () => {
    for (let i = 0; i < pali.length; i++) {
      const palindrome = pali[i];
      isPalindrome3(palindrome);
    }
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    // Pega os tempos de execução de cada teste
    let times = this.map(function (bench) {
      return {
        name: bench.name,
        hz: bench.hz
      };
    });

    // Ordena os tempos de execução para que possamos fazer comparações relativas
    times.sort((a, b) => b.hz - a.hz);

    console.log('Fastest is ' + times[0].name);

    for (let i = 1; i < times.length; i++) {
      let percentFaster = ((times[0].hz - times[i].hz) / times[i].hz) * 100;
      console.log(`${times[0].name} is ${percentFaster.toFixed(2)}% faster than ${times[i].name}`);
    }
  })
  .run({ 'async': true });

// Monitorando eventos do Garbage Collector
/* gcStats.on('stats', (stats) => {
  console.log('GC happened:', stats);
}); */