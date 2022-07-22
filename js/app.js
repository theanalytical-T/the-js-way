//Playing With Variables
//Improved hello: Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
// let firstName = prompt('What is your first name?')
// let lastName = prompt('What is your last name?')
// alert(`Hello ${firstName} ${lastName}!`)

//Final Values: Observe the following program and try to predict the final values of its variables.
// let a = 2;
// a -= 1;
// a++;
// let b = 8;
// b += 2;
// const c = a + b * b;
// const d = a * b + b;
// const e = a * (b + b);
// const f = a * b / a;
// const g = b / a * a;
// console.log(a, b, c, d, e, f, g);
//2, 10, 102, 30, 40, 10, 10 CORRECT!
//Check your prediction by executing it.

//VAT Calculation: Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
// let rawPrice = Number(prompt('Give us a price'))
// let calculation = rawPrice * .206
// let finalPrice = rawPrice + calculation

// alert(`This will calulate to a final price of: ${finalPrice}`)

//From Celsius to Fahrenheit Degrees: Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
//The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
// let celsius = Number(prompt('Give a temperature for celsius:'))
// let fahrenheit = celsius * (9 / 5) + 32
// alert(`This converts to ${fahrenheit} degrees fahrenheit.`)

//Variable Swapping: Observe the following program.
// let number1 = 5;
// let number2 = 3;
// TODO: type your code here (and nowhere else!)
// number1 = number2
// let swap = 5
// number2 = swap

// console.log(number1); // Should show 3
// console.log(number2); // Should show 5
//Add the necessary code to swap the values of variables number1 and number2.
// T > This exercise has several valid solutions.You may use more than two variables to solve it.



//Add Conditions
// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day.Incorrect inputs must be taken into account.
// let day = prompt('What day of the week is it?')

// switch (day.toLowerCase()) {
//     case 'monday':
//         console.log('The following day is Tuesday.')
//         break;
//     case 'tuesday':
//         console.log('The following day is Wednesday.')
//         break;
//     case 'wednesday':
//         console.log('The following day is Thursday.')
//         break;
//     case 'thursday':
//         console.log('The following day is Friday.')
//         break;
//     case 'friday':
//         console.log('The following day is Saturday.')
//         break;
//     case 'saturday':
//         console.log('The following day is Sunday.')
//         break;
//     case 'sunday':
//         console.log('The following day is Monday.')
//         break;
//     default:
//         console.log('That is not a valid day!')
// }

// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
// let stacks = Number(prompt('Enter a number for comparison:'))
// let paper = Number(prompt('Enter another number for comparison:'))

// if (stacks > paper) {
//     console.log(`${stacks} is a larger number than ${paper}`)
// } else if (paper > stacks) {
//     console.log(`${paper} is a larger number than ${stacks}`)
// } else if (paper === stacks) {
//     console.log(`${stacks} and ${paper} amount to the same!`)
// } else {
//     console.log('This is not a viable comparison. Please try again.')
// }

// Final values
// Take a look at the following program.

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//     nb1 = nb3 * 2;
// } else {
//     nb1++;
//     if (nb2 > nb3) {
//         nb1 += nb3 * 3;
//     } else {
//         nb1 = 0;
//         nb3 = nb3 * 2 + nb2;
//     }
// }
// console.log(nb1, nb2, nb3);
// Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values.Complete the following table.

// Initial values	nb1 final value	nb2 final value	nb3 final value
// nb1 = nb2 = nb3 = 4           nb1 = 0, nb2 = 4, nb3 = 12 CORRECT!
// nb1 = 4, nb2 = 3, nb3 = 2     nb1 = 4, nb2 = 3, nb3 = 2 CORRECT!
// nb1 = 2, nb2 = 4, nb3 = 0     nb1 = 3, nb2 = 4, nb3 = 0 CORRECT!
// Check your predictions by executing the program.

// Number of days in a month
// Write a program that accepts a month number(between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
// let month = Number(prompt('Enter a month number'))

// switch (month) {
//     case 1:
//         console.log('There are 31 days in the month of January.')
//         break;
//     case 2:
//         console.log('There are 28 days in the month of February.')
//         break;
//     case 3:
//         console.log('There are 31 days in the month of March.')
//         break;
//     case 4:
//         console.log('There are 30 days in the month of April.')
//         break;
//     case 5:
//         console.log('There are 31 days in the month of May.')
//         break;
//     case 6:
//         console.log('There are 30 days in the month of June.')
//         break;
//     case 7:
//         console.log('There are 31 days in the month of July.')
//         break;
//     case 8:
//         console.log('There are 31 days in the month of August.')
//         break;
//     case 9:
//         console.log('There are 30 days in the month of September.')
//         break;
//     case 10:
//         console.log('There are 31 days in the month of October.')
//         break;
//     case 11:
//         console.log('There are 30 days in the month of November.')
//         break;
//     case 12:
//         console.log('There are 31 days in the month of December.')
//         break;
//     default:
//         console.log('That was not a valid month number (Between 1 and 12), please try again.')
// }

// Following second
// Write a program that asks for a time under the form of three information(hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// This is not as simple as it seems... Look at the following results to see for yourself:

//     14h17m59s => 14h18m0s
// 6h59m59s => 7h0m0s
// 23h59m59s => 0h0m0s(midnight)

// let hour = Number(prompt('Please give a number in hours (0 to 23)'))
// let minute = Number(prompt('Please give a number in minutes (0 to 59)'))
// let second = Number(prompt('Please give a number in seconds (0 to 59)'))

// if (hour === 23 && minute === 59 && second === 59) {
//     second = 0
//     minute = 0
//     hour = 0
//     console.log(`The time one second after results to ${hour}h ${minute}m ${second}s or ${hour}:${minute}:${second} (It's midnight!).`)
// } else if (minute === 59 && second === 59) {
//     second = 0
//     minute = 0
//     hour++
//     console.log(`The time one second after results to ${hour}h ${minute}m ${second}s or ${hour}:${minute}:${second}.`)
// } else if (second === 59) {
//     second = 0
//     minute++
//     console.log(`The time one second after results to ${hour}h ${minute}m ${second}s or ${hour}:${minute}:${second}.`)
// } else {
//     console.log('The input was not valid, please try again.')
// }



//Repeat Statements
// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.
// When it's done, improve it so that the number of turns is given by the user.

// let turn = Number(prompt('How many turns do you want for the carousel?'))

// for (let i = 1; i <= turn; i++) {
//     console.log(`This is turn ${i} on the carousel.`)
// }

// Parity
// Check the following program that shows even numbers(divisible by 2) between 1 and 10.

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     }
// }
// This program uses the modulo operator %, which calculates the remainder after division of one number by another.It's often used to assess number parity.

// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

// let bonkers = Number(prompt("Give a number to determine what's odd and what's even"))

// for (let i = 1; i <= bonkers; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even.`)
//     } else if (i % 2 !== 0) {
//         console.log(`${i} is odd.`)
//     } else {
//         console.log('That is not a valid number, please try again.')
//     }
// }
// This program must show exactly 10 numbers including the first one, not 11 numbers!

// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
// When you are done with the above, improve the program so that the terminating number is between 50 and 100.
// let validation = Number(prompt('Please enter a number'))

// while (validation > 100) {
//     if (validation > 100) {
//         validation = Number(prompt('Please enter a number'))
//     } else if (validation <= 100) {
//         alert("Yay you've cracked the code!")//Doesn't actually display the alert but the code works
//     }
// }

// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.
// When you are done, improve the program so it only accepts numbers between 2 and 9(use the previous exercise as a blueprint).
// let input = Number(prompt('Please give a number'))

// console.log(`The multiplication table for ${input} is as follows:`)
// for (i = 1; i <= 12; i++) {
//     let multiplication = input * i
//     console.log(`${input} * ${i} = ${multiplication}.`)
// }

// for (i = 1; i <= 12; i++) {
//     if (input < 2 || input > 9) {
//         input = Number(prompt("That's not in a valid range. Please give a number"))
//     } else {
//         let multiplication = input * i
//         console.log(`${input} * ${i} = ${multiplication}.`)
//     }
// }

// Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
// let input = prompt('Enter a word or type yes or no to exit.')
// input.toLowerCase()

// while (input !== "yes" && input !== "no") {
//     if (input === "yes" || input === "no") {
//         alert('Thanks for playing!')//Doesn't actually alert but it works
//     } else {
//         input = prompt('Enter a word or type yes or no to exit.')
//     }
// }

// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 3.
// It shows "Buzz" instead if the number is divisible by 5.
// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

// This exercise has many, many solutions. It's a job interview classic that a significant number of candidates fail. Try your best!
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else if (i % 3 === 0) {
//         console.log('Fizz')
//     } else {
//         console.log(`${i}`)
//     }
// }




//Write Functions
//Improved hello
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

let firstName = prompt("What's your first name?")
let lastName = prompt("What's your last name?")

function sayHello(f, l) {
    f = firstName
    l = lastName
    alert(`Hi there ${f} ${l}!`)
}

sayHello()

// Say hello to the user
let f = prompt("What's your first name?")
let l = prompt("What's your last name?")

function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}

// TODO: ask user for first and last name
// TODO: call sayHello() and show its result

alert(sayHello(f, l))


// Number squaring
// Complete the following program so that the square1() and square2() functions work properly.

// Square the given number x
function square1(x) {
    return x * x
}
// TODO: complete the function code

// Square the given number x
const square2 = x => x * x
// TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
// When it's done, update the program so that it shows the square of every number between 0 and 10.
for (let i = 0; i <= 10; i++) {
    console.log(square1(i))
    console.log(square2(i))
}

// Writing 10 dumb calls to square() is forbidden! You know how to repeat statements, don't you? ;)

// Minimum of two numbers
// Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// TODO: write the min() function
function min(r2, d2) {
    if (r2 < d2) {
        return r2
    } else {
        return d2
    }
}

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

// Calculator
// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program
function calculate(quantum, s, physics) {
    if (s === "+") {
        return quantum + physics
    } else if (s === "-") {
        return quantum - physics
    } else if (s === "*") {
        return quantum * physics
    } else if (s === "/") {
        return quantum / physics
    } else {
        console.log("I can't calculate that!")
    }
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

// Circumference and area of a circle
// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// Here are some tips for solving this exercise:

// Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away:)
// The value of number π(Pi) is obtained with Math.PI in JavaScript.
// You might want to use the exponentiation operator ** to perform computations.
// console.log(2 ** 3); // 8: 2 * 2 * 2
// console.log(3 ** 2); // 9: 3 * 3
let theRadius = Number(prompt('Please provide the radius'))

function circumferenceOfACircle(radius) {
    return 2 * Math.PI * radius;
}

function areaOfACircle(radius) {
    return Math.PI * (radius ** 2)
}

console.log(circumferenceOfACircle(theRadius))
console.log(areaOfACircle(theRadius))
