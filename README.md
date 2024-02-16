# anybitwise

[![build](https://github.com/WebReflection/anybitwise/actions/workflows/node.js.yml/badge.svg)](https://github.com/WebReflection/anybitwise/actions/workflows/node.js.yml)

This module makes you forget about bitwise limitations by using [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) instead.

The amount of bitwise operations is theoretically without upper bound limits so that way more than 32 variables become possible.

```js
// grab the utility creator
import bigwise from 'anybitwise';

// create a 0n to Xn bits per each invoke
const next = bigwise();

const A = next();
const B = next();
const C = A | B;

A & B;  // falsy
A & C;  // truthy
```

That's it.
