/*
 * union type: kiểu hợp
 * nó là tổ hợp của 2 hoặc nhiều kiểu dữ liệu
 * ví dụ: string | number
 */

const addSum = (a: number | string, b: number | string) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Param is not supported!");
};

console.log("result: ", addSum(1, 2)); // 3
console.log("result: ", addSum("vinh ", "pham")); // vinh pham
console.log("result: ", addSum(true, "pham")); //  eror
