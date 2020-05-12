function factorial(n) {
  if (!this.cache) {
    this.cache = {};
  }
  if (this.cache[n]) {
    return this.cache[n];
  }
  if (n === 0) return 1;

  this.cache[n] = n * factorial(n - 1);
  return this.cache[n];
}

console.time("t1");
console.log(factorial(10));
console.timeEnd("t1");
