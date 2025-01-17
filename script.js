console.log("Conditionals, Loops and Functions")

// If

let noOfStudents = 20

// loose equality
if (noOfStudents == 20) {
    console.log("loose")
    console.log("There are 20 students")
}

// Strict equality ===
if (noOfStudents === 20) {
    console.log("strict")
    console.log("There are 20 students")
}

// loose equality compares value of all types but strict equality considers the data type as well


// if...else if ladder
// and - &&
// or - ||

const hour = 8

if (hour < 12) {
    console.log("Good Morning")
 } else if (hour < 17) {
    console.log("Good Afternoon")
 } else if (hour < 20) {
    console.log("Good Evening")
 } else {
    console.log ("Good Night")
 }

// Switch Case - same as match case in python

const day = 8 

switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Wrong day")
}

// Multiple switch cases - below example leverage on JS' fall-through on switch statements

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Week day")
        break
    case 6:
    case 7:
        console.log("Weekend")
        break
    default: 
        console.log("Wrong Day")
}

// Ternary Operator - in JS community, it is extremely common to use ternary operators

const isRaining = true

let action = ""

if (isRaining) {
    action = "Take an umbrella"
} else {
    action = "Nothing"
}

console.log(action)

// ternary syntax - condition ? what to do for true condition : what to do for false condition
// different from python - what to do for true condition if condition else what to do for false condition
 
const action2 = isRaining ? "Take an umbrella" : "Nothing"
console.log(action2)

// short circuit logic - used widely in JS - with the use of && and || to shorten the logic

let num = 5
let den = 10
let division

if (den !== 0){
    division = num / den
}

console.log(division) 

let division2 = den !== 0 && num / den
console.log(division2)

// short circuit logic using ||

let username = ""

let displayName = username

if (!username) {
    displayName = "Guest"
}

console.log(displayName)

let displayName2 = username || "guest" // if first statement is false, an empty string is false i.e. username is false if it's empty it will check second statement

console.log(displayName2)

// Loops