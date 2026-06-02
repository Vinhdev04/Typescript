// void -> tra ra undefined

const sum = (a: number, b: number): number => {
  return a + b;
};

console.log("sum is: ", sum(10, 20));

// void -> ko return gì cả
const printSum = (a: number, b: number): void => {
  console.log(a + b);
};
printSum(10, 20);
