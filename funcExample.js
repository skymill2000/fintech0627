function plus(p1, p2) {
  console.log(this);
  return p1 + p2;
}

const minus = (p1, p2) => {
  console.log(this);
  return p1 - p2;
};

// div, multi

console.log(plus(2, 4));
console.log(minus(5, 6));
