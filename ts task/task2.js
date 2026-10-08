"use strict";
function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}
const arr = ["apple", "banana", "apple", "orange", "apple"];
const element = "apple";
const result = countOccurrences(arr, element);
console.log("Array   :", arr);
console.log("Element :", element);
console.log(`'${element}' appears ${result} time(s) in the array.`);
