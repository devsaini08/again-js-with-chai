//primitive data types =>

//  7 => string , number ,boolean , null , undefined, symbel, bigInt
let num = 25;              // Number
let name = "Sid";          // String
let isStudent = true;      // Boolean
let value;                 // Undefined
let empty = null;          // Null
let bigNumber = 123n;      // BigInt
let unique = Symbol("34"); // Symbol

// console.log(unique);


// refrence (non primitive data type)

// 3 ==> Aaray, Object, Function

let arr = [1, 4, 6, 64, 33,]

let obj = {
    name: "dev",
    age: 27,
}
console.log(obj);

// datatype of primitive data types is = function , and function is called obj function
// array = object
// obj = object
// function = function 

// ************************************************************************************

// stack(primitive data types)    heap(non - primitive data types)   =>

//                 ===> Valur chnaged but in first variable have old value
//                 ===> because stack memory take copy value 
let str = "nameABC"
let str2 = str
str2 = "nameDEF"

// console.log(str);
// console.log(str2);



// ====> in this heap memory oldear variable also changed because this will take refrence 
let demoObj = {
    name: "rahul",
    upiID: "rahul@ybk"
}

let demoObj2 = demoObj
demoObj2.name = "sagar"

console.log(demoObj);
console.log(demoObj2);



