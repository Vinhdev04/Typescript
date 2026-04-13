/*
    Booleant Type (true/ false)
*/

let isName:boolean  = false
let isActive:boolean = true;
let hasStarted:boolean = false;

console.log(isName);
console.log(isActive);
console.log(hasStarted);



// practices

const isDivisibleBy4And8 = (num:number):boolean => {
    return (num % 8 === 0);
}
const result1 = isDivisibleBy4And8(32);
const result2 = isDivisibleBy4And8(12);
console.log(`Kết quả 32: ${result1}`);
console.log(`Kết quả 12: ${result2}`);
