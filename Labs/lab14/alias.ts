/**
 * type aliases cho phép ta tạo mới 1 kiểu type từ những type đã tồn tại
 */

const addNumberOrString = (a: params, b: number | string) => {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a.concat(b);
};
console.log("Result: ", addNumberOrString(1, 2));

//  ------------------------------------------- //
type params = number | string | boolean | object;
