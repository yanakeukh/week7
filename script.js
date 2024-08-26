// 1. Create an array...

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

//in this line we substract first element from the last element of the array.
//we took the last eement, counts element and minus 1 and minus last element in array
console.log(ages[ages.length-1] - ages[0]);


// using push() function we add a new value to our array
ages.push(25);

console.log(ages);

//we declaire function avarageSum and declair summ = 0, than we count length in array 
//and devided amount in array on quantity.

let avarageSumm = (numbers) => {
    let summ = 0;
    for (let i = 0; i < numbers.length; i++) {
        summ = summ + numbers[i];
    }
    return summ/numbers.length;
}

console.log(avarageSumm(ages));





//2. Create an array

//I declare an array. Than I made a loop and account amount of letters for each element
//of array. Than I devided total amount of letters on length of array elements.


let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];


let total = 0;
let sum = 0;
for(let i = 0; i<names.length; i++) {
    total = total + names[i].length;
    console.log(names[i], 'total:', total);
    sum = sum + total;
    console.log(sum);

    let avarag = sum/names.length;
    console.log(avarag);
}


//Here I concatenate all elements together separated by spaces;

console.log(names.join(' '));


// 3. Here I access to the last element of array.

let num = [1, 3, 4, 5, 6, 7];

console.log(num[num.length - 1]);

// 4. I access to the first element using the next code

console.log(num[0]);

//5. Here i create empty array and add amount of each elements in array;

let numm = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

let nameLengths = [];

for (let i = 0; i<numm.length; i++) {
    nameLengths.push(numm[i].length);
    console.log(nameLengths);
}


//6. Here we declair new array and count sum of each element;


let words = [1, 3, 4, 5, 6, 7];

let char = 0

for (let i = 0; i<words.length; i++) {
    char = char + words[i];
    console.log(char);
}


//7. Using repeat() function I declared word 3 TimeRanges;


function concat(word, n) {
    let concat = word.repeat(3);
    console.log(concat);
}

concat("Hello", 3);


//8. Here I add lastName to first name and declared fullName

function connect (firstName, lastName) {
     let fullName = firstName + " " + lastName;
     console.log(fullName);
}


connect ("Yana", "Gotron"); 

//9. Here we make a function and using loop account length of all elements of array. 
// than we declare if summ more than 100, show in console true, is less - false;


let num2 = [2, 3, 4, 6, 3, 4, 5];

function numGreater() {
    let sum = 0
    for(let i=0; i<num2.length; i++) {
        sum = sum + num2[i];
    if(sum > 100) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}
}

numGreater();

// 10. Here we find summ of each element of array and devided it on length
// of elements in array.

let number = [1, 2, 5, 2, 3, 5, 9]
let summ = 0;
function newArray() {
     for(let i=0; i<number.length; i++) {
        summ = summ + number[i];
        let average = summ/number.length
        console.log(average);
     }
}


newArray()


//11. Here i found average amount of first array and the second and after
// compare using if.


let numb1 = [1, 2, 5, 2, 3, 5, 9]
let numb2 = [2, 3, 4, 7, 9, 0, 9]

let sum1 = 0;
let sum2 = 0;

function avarageArr() {
    for(let i=0; i<numb1.length; i++) {
       sum1 = sum1 + numb1[i]
    }

    let average1 = sum1/numb1.length;

    for(let m=0; m<numb2.length; m++) {
        sum2 = sum2 + numb2[m]
     }

     let average2 = sum2/numb2.length;
     if(average1>average2) {
        console.log(true);
        return true
     } else {
        console.log(false)
        return false
     }

}

avarageArr()

//12. Here we rigth a condition if isHotOutside is true and moneyInPocket less 
// than 10.5 than we will have lets drink outside.

function willByDrink(isHotOutside, moneyInPocket) {
   let drinkOutside = isHotOutside === true && moneyInPocket < 10.5
   console.log(drinkOutside);
}

willByDrink(true, 5);


//13. Here I create a funcion that count sum of all elements in array. 



let number6 = [1, 2, 5, 2, 3, 5, 9]
let summm = 0;
function joinArray() {
   for(let i=0; i<number6.length; i++) {
        summm = summm + number6.length;
         console.log(sum);
 }
}

joinArray()


















































