/*
   any -> bất kỳ giá trị nào
   any -> bo qua việc kiểm tra type
   any -> using when convert javascript -> typescript
   any anywhere = javascript not typescript
   
   Ưu điểm:
      - Linh hoạt
   Nhược điểm:
      - Mất đi tính an toàn
*/

// let nameX = "vinh";
let nameX: any = "vinh";
let nameY: any = "vinh";
nameX = 1;

console.log("default name is: ", nameY); // vinh
console.log("change type name is: ", nameX); // 1

let x: string | number = "Megalodon";

x = 10;
console.log("Show x is: ", x); // 10
console.log("Show type of x is: ", typeof x); // number

// type guard

function type(a: string | number) {
  if (typeof a === "string") {
    console.log("a is string");
  } else {
    console.log("a is number");
  }
}

type(1); // number
type("x"); // string
