function plus(p1, p2) {
  console.log(this);
  return p1 + p2;
}

const minus = (p1, p2) => {
  console.log(this);
  return p1 - p2;
};

// div, multi

const div = (p1, p2) => {
  return p1 / p2;
};

const mul = (p1, p2) => {
  return p1 * p2;
};

console.log(plus(2, 4));
console.log(minus(5, 6));
console.log(div(2, 4));
console.log(mul(5, 6));
