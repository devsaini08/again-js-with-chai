let runs = "33"




//converson to number => 

// string number to  Number
let convertedNumber = Number(runs)
// console.log(convertedNumber, typeof convertedNumber);

// if string have not only number =>     value = Nan typeof = number
runs = "abc123"
let convertedNumber2 = Number(runs)
// console.log(convertedNumber2, typeof convertedNumber2);

// strig without number =>  value- NaN  typeof - Number
let testingNumber = undefined
let convertedNumber3 = Number(testingNumber)
// console.log(convertedNumber3, typeof convertedNumber3);

// console.table([convertedNumber3, convertedNumber2, convertedNumber])

// string No. "33" => 33 Number
// string with no "abc134" => Nan Number
// Boolean => true = 1  false= 0
// null => 0
// undefined => NaN Number



// convert into boolean

let demodata = 0
let convertIntoBoolean = Boolean(demodata)
// console.log(convertIntoBoolean)

// 1 => true 
// 2 => false 
// any number(876) => true
// "" blank string = > false
// "wswfs" => true


// into string

let demodata2 = true

let convertIntoString = String(demodata2)
// console.log(convertIntoString, typeof convertIntoString);

// number => string 
// null => string
// undefined = string
// boolean => string 
