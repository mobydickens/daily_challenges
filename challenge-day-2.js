// FizzBuzz - Bob Ross edition

// Write a function that takes in one number.
// Starting at 1, console log every number up to the number passed in.
// If the number being logged is divisible by 3 log 'Bob' instead.
// If the number is divisible by 5 we will log 'Ross' instead.
// If they are divisible by both 3 and 5 we will log 'Bob Ross'.

// Challenge Mode
// Use a 'while' or 'do while' loop.


//function using if/else statements
function challenge(num) {
    for(let i=1; i<=num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Bob Ross");
        } else if (i % 3 === 0) {
            console.log("Bob");
        } else if (i % 5 === 0) {
            console.log("Ross");
        } else {
            console.log(i);
        }
    }
}
console.log("should print 0, 1, 2, 'bob', 4, 'ross', 'bob', 7, 8, 'bob', 'ross', 11, 'bob', 13, 14, 'bob ross'", challenge(15));

//function using while
function challenge(num) {
    let i = 1;
    while (i<=num) {
        if (i % 3 === 0 && i % 5 === 0) {
                console.log("Bob Ross");
            } else if (i % 3 === 0) {
                console.log("Bob");
            } else if (i % 5 === 0) {
                console.log("Ross");
            } else {
                console.log(i);
            }
        i++;
    }
}
console.log("should print 0, 1, 2, 'bob', 4, 'ross', 'bob', 7, 8, 'bob', 'ross', 11, 'bob', 13, 14, 'bob ross'", challenge(15));

//function using do/while
function challenge(num) {
    let i = 1;
    do {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Bob Ross");
        } else if (i % 3 === 0) {
            console.log("Bob");
        } else if (i % 5 === 0) {
            console.log("Ross");
        } else {
            console.log(i);
        } 
        i++;
    } while (i<=num);
}
console.log("should print 0, 1, 2, 'bob', 4, 'ross', 'bob', 7, 8, 'bob', 'ross', 11, 'bob', 13, 14, 'bob ross'", challenge(15));

