const anybitwise = require('../cjs');

const next = anybitwise();

const a = next();
const b = next();

console.assert(!(a & b));
console.assert((a | b) === 3n);

for (let i = 0; i < 0xFFF; i++)
  next();

const c = next();

console.assert(!(a & c));
console.assert((a | c) === (c + a));
