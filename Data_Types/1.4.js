//Numbers
let score = 50;
//console.log(score, typeof score);

//Mathematical Operator +,-,/,%,*,**,()

//let result = score / 2; //quotient
//let result = score % 2; //Remainder
//console.log(result);


let result = score * 2 + (4*3) - 8 / 2 % 4; //100+12-0

//Using Priority and precedence
//1. Bracket()
//2. ** Exponential Operator
//3. * / % (From Left to Right)
//4. + - (From Left to right)


console.log(result);

//Concatenation of number
//let resultLine = 'My Total score is = ' + result; //it converted number into string

let resultLine = '1' + 2; //if any of the operands is string  + operator merge it to string
console.log(resultLine);

let sum = 2+2+"1"; // the first + operator sum two number then + add the string 1
console.log(sum);

let conCatenation = "1" + 2 + 2;
console.log(conCatenation); //it treat all number as string bcs its first operands is string

//Only "+" operator supports string in such a way, All Other Arithmetic operator does'nt do anything with numbers

//Loose Equality(==) Vs Strict Equality(===)

//Loose Equaluity(==)
let age = 22; 
console.log(age=="22"); //Focus only on value but not Type

console.log(age==="22"); //Focus on Both value and its type



