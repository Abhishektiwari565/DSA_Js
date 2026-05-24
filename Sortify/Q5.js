//Sort Even and Odd Numbers Separately
let arr = [5, 2, 8, 1, 6, 3, 4];

let even = [];
let odd = [];

// Separate Even and Odd
for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
        even.push(arr[i]);
    } else {
        odd.push(arr[i]);
    }
}

// Sort Even Ascending
even.sort(function(a, b) {
    return a - b;
});

// Sort Odd Descending
odd.sort(function(a, b) {
    return b - a;
});

// Merge Arrays
let result = even.concat(odd);

console.log("Final Array:");
console.log(result);