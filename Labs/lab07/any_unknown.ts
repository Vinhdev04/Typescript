/*
    any vs unknown
*/

const processInput = (input:unknown) => {
    if(typeof input === 'string'){
        console.log(`Đây là một chuỗi: ${input.toLocaleUpperCase()}`);
    }else if(typeof input === 'number'){
        if(Number.isInteger(input))
            console.log(`Đây là một số nguyên: ${input}`);
        else
            console.log(`Đây là một số thực: ${input.toFixed(2)}`);
    }else if(typeof input === 'boolean'){
        console.log(`Đây là một boolean: ${input}`);
    }else{
        console.log('Kiểu dữ liệu không xác định');
    }
}

processInput("Hello, TypeScript!");
processInput(10);      // Đây là số nguyên: 10
processInput(10.556);  // Đây là số thập phân, làm tròn: 10.56
processInput(true);    // Đây là một boolean: true


const processInputAny = (input: any) => {
    // Adny quên dùng IF để kiểm tra, cứ thế gọi hàm luôn
    console.log(input.toUpperCase()); 
}

processInputAny(10); 
// TS: ✅ Im lặng (không báo lỗi lúc code)
// Runtime: 🔴 Sập! (Error: input.toUpperCase is not a function)