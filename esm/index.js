const max = 16, zero = (2 ** max).toString(2).slice(1);

export default () => {
  let i = 0, pos = 0;

  /**
   * A function that generates, on each invoke, a BigInt
   * that can then be used for bitwise operations.
   * @returns {BigInt}
   */
  return () => {
    const str = `0b${(2 ** i++).toString(2)}${zero.repeat(pos)}`;
    if (i === max) {
      i = 0;
      pos++;
    }
    return BigInt(str);
  };
};
