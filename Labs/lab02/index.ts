
/* 
    function sumJS(a,b){
        return a+b;
    }
    console.log(sumJS(2,"Vinh"));
*/

function sumTS(a:number, b:number):number{
    return a + b;
}

// console.log(sumTS(2,`Vinh`));
console.log(sumTS(2,3));


function calculatorArea(width:number, height:number):number{
    return width*height;
}

console.log(calculatorArea(5,10));


const result = calculatorArea(5,10);
function displayArea(area:number):void{
    console.log(`The area is ${area}`); // The area is 50
}


const re = displayArea(result);
console.log(re); // undefined
