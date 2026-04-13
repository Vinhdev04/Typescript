/*
    Bigint Type
*/


const maxNumber = Number.MAX_SAFE_INTEGER;
console.log(`Giá trị lớn nhất của Number: ${maxNumber}`); // 9007199254740991

const minNumber = Number.MIN_SAFE_INTEGER;
console.log(`Giá trị nhỏ nhất của Number: ${minNumber}`); // -9007199254740991


let maxN:bigint = BigInt(Number.MAX_SAFE_INTEGER);
console.log(`Giá trị lớn nhất của BigInt: ${maxN}`); // 9007199254740991n

// practices
type Operator = '+' | '-' | '*' | '/';

const calculatorAB = (a: number, x: Operator, b: number): number | string => {
    switch (x) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            return b !== 0 ? a / b : "Lỗi: Không thể chia cho 0";
        default:
            // Nhờ có Operator ở trên, đoạn này gần như không bao giờ xảy ra
            return "Phép toán không hợp lệ";
    }
}

console.log(calculatorAB(10,"+",20));
console.log(calculatorAB(10,"-",20));
console.log(calculatorAB(10,"*",20));
console.log(calculatorAB(10,"/",20));
console.log(calculatorAB(10,"*",0))
console.log(calculatorAB(10,"/",0))