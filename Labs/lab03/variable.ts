/*
    Khai báo Type Anotation cho variable
*/

// 1. String
let myName: string = "Vinh";
console.log("Yourname is " + myName);

// 2. Number: Số (bao gồm cả số nguyên và số thực)
let numberOne: number = 4;
let numberTwo: number = 3.14;
console.log("Number One: " + numberOne);
console.log("Number Two: " + numberTwo);



// 3. Boolean: Đúng hoặc Sai
let isDone: boolean = true;
console.log("Is Done: " + isDone);



// 4. Null & Undefined: Giá trị rỗng
let empty: null = null;
let notFound: undefined = undefined;
console.log("Empty: " + empty);
console.log("Not Found: " + notFound);


// 5. Array: Mảng (có 2 cách khai báo)
let listArr1: number[] = [1, 2 , 3 , 4 , 5];
let listArr2: Array<string> = ["a ", "b ", "c "];
console.log("List Array 1: " + listArr1);
console.log("List Array 2: " + listArr2);

// 6. Object: Đối tượng
let userInfo: {
    name: string,
    id: number,
    address: string
} = {
    name: "Vinh",
    id: 1,
    address: "Hanoi"
}

console.log("User Info: ", userInfo);
console.log("User Info: " + userInfo.name + ", " + userInfo.id + ", " + userInfo.address);


// 7. Tuple: Mảng có độ dài cố định và kiểu dữ liệu cố định từng vị trí
let person: [string,number] = ["Vinh", 30];
console.log("Person: " + person);

// 8. Any: Chấp nhận mọi kiểu dữ liệu (hạn chế dùng) -> Rất dễ gây lỗi runtime.
let randomValue: any = 10;
console.log("Old Random Value: " + randomValue);
randomValue = "Chuyển sang chuỗi thoải mái";
console.log("New Random Value: " + randomValue);


// 9. Unknown: Giống any nhưng an toàn hơn 
// (bạn phải kiểm tra kiểu trước khi thực hiện các phép toán)
let youDontKnow: unknown = 20;
console.log("Unknown Value: " + youDontKnow);

// let result = unknownValue + 5; 
// ❌ LỖI: Object is of type 'unknown'. TS không cho phép cộng vì chưa biết nó có phải là số không.

if (typeof youDontKnow === "number") {
    let result = youDontKnow + 5;
    console.log("Result: " + result);
}

// 10. Void: Dùng cho hàm không trả về giá trị
function sayHello(): void {
    console.log("Xin chào!");
}