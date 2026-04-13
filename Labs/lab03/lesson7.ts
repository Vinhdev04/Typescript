let count: number = 10;
// Error: Type 'string' is not assignable to type 'number'.
// count = "Vinh" 
count = 200;
console.log(count);  // 200


let user:  {
    name: string,
    id: number
} = {
    name: "mynameisvinh",
    id: 10
}
user.name = "Vinh";
user.id = 20;
console.log(user);


// typescript tự động gán kiểu dữ liệu dựa trên giá trị khởi tạo (type inference)
let arrX= ["A","B","C",100];
arrX[0] = "Vinh";
arrX.push(200);
console.log(arrX);

