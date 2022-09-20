import './style.css'
//never use var default to const usually and if you have to use let
//let numberOfCupsOfCoffee = 
//const fullName = 'MaraGuluzian'

const fullName: string = 'Mara Guluzian';
const numberOfCupsOfCoffee: number = 10;
console.log(fullName, numberOfCupsOfCoffee)

/*const storesObject: {
fullName: 'Mara Guluzian'
luckyNumber: 5,
favoriteMovies: ['Lord of the RecordingState', 'Dark Night', 'Interstellar'],
}
*/

/*
so can I not do const userName = Number(window.prompt('What is your name?') also im confused are we
getting a string or a number) 
*/

const userName = window.prompt('What is your name?')
console.log(`Hello ${userName}!`)

const firstOperand = window.prompt('Enter a number')


const secondOperand = window.prompt('Enter another number')

//Doing Math 
const sum = parseFloat(firstOperand) + parseFloat(secondOperand)
console.log(
  `If you add ${firstOperand} and ${secondOperand} you get ${sum}.`
)
const difference = parseFloat(firstOperand) - parseFloat(secondOperand)
console.log(
  `The difference is ${firstOperand} minus ${secondOperand}.`
)

const product = parseFloat(firstOperand) * parseFloat(secondOperand)
console.log(
  `If you multiply ${firstOperand} and ${secondOperand} you get ${product}.`
)

const quotient = parseFloat(secondOperand) / parseFloat(firstOperand)
console.log(
  `If you divide ${firstOperand} and ${secondOperand} you get ${quotient}.`
)

const remainder = parseFloat(secondOperand) % parseFloat(firstOperand)
console.log(
  `If you divide ${firstOperand} by ${secondOperand} you get a remainder of ${remainder}.`
)

//using arrays 
const numbers = [35935,	30675,	48053,	35282,	20689,
  11104,	27984,	43239, 	11023,	29129,
  20864,	38849,	14886,	44940,	20900,
  23464,	38270,	36090,	25619,	28863,
  22346,	24070,	21532,	44415,	13809,
  40567,	43026,	36800,	38415,	30170,
  27051,	17034,	36050,	30147,	27515,
  28050,	39991,	24560,	19672,	18396,
  17684,	36083,	48986,	21957,	41214,
  39096,	17093,	30502,	17272,	36599,
  45841,	12394,	39791,	34869,	35547,
  15311,	20703,	28195,	44800,	42169,
  13745,	16926,	14776,	39891,	41548,
  38736,	36926,	15023,	48375,	44966,
  42575,	23300,	27169,	12328,	10511,
  35020,	17563,	12856,	22697,	44410,
  10211,	16805,	11943,	22020,	19861,
  39033,	48779,	35266,	20849,	27371,
  37553,	41900,	43512,	27867,	35256,
  25470,	46464,	36284,	14950,	10418]

  const smallest =(Math.min(...numbers))
  console.log(smallest)

  // could also do a for loop 

  const largest =(Math.max(...numbers))
  console.log(largest)

  const arraySum = numbers.reduce((sValue,currValue)=>sValue+currValue, 0);
/*start with a sum of zer0 so if you wanted to change it to SValue * currValue you should change it ,1 
because it would just equal 0 */
  const arrayAverage = arraySum / numbers.length