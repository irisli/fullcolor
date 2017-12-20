const fullcolor = require('./fullcolor');

// NOTE: \u001b is the same as \x1b
// I use \x1b instead of \u001b so that the strings work in the command line.

// Try this in shell (it works):
// printf '\x1b[38;2;102;204;255mLet there be blue!\x1b[0m'

// Compared to this (it doesnt work):
// printf '\u001b[38;2;102;204;255mLet there be blue!\u001b[0m'

let passed = 0;
let total = 0;

function test(name, value, expected) {
  total++;
  if (value === expected) {
    console.log('Passed: ' + name)
    passed++;
  } else {
    console.error('Failed: ' + name)
    console.log('Got:');
    console.dir(value);
    console.log('Expected:');
    console.dir(expected);
  }
}

function testError(name, args) {
  total++;
  try {
    let value = fullcolor.apply(null, args);
    console.error('Failed: ' + name)
    console.log('Got:');
    console.dir(value);
    console.log('Expected error');
  } catch(e) {
    console.log('Passed: ' + name)
    passed++;
  }

}

test(
  '0.1.0: Basic 3 char hex',
  fullcolor('Let there be blue!', '#6cf'),
  '\x1b[38;2;102;204;255mLet there be blue!\x1b[0m',
);

test(
  '0.1.0: Basic 6 char hex',
  fullcolor('Let there be pink!', '#fa829a'),
  '\x1b[38;2;250;130;154mLet there be pink!\x1b[0m',
);

test(
  '0.1.0: Simple r, g, b',
  fullcolor('Let there be green!', 56, 247, 114),
  '\x1b[38;2;56;247;114mLet there be green!\x1b[0m',
);

testError(
  'Empty arguments',
  [],
)

testError(
  'Single argument',
  ['text'],
)

testError(
  'Empty hex',
  ['text', '#'],
)

testError(
  'Invalid hex3',
  ['text', '#ggg'],
)

testError(
  'Invalid hex6',
  ['text', '#gggggg'],
)

console.log()
console.log('Passed ' + passed + '/' + total + ' cases.')

if (passed !== total) {
  process.exit(1);
}
