//Find the Largest and Second Largest Element
let arr = [10, 20, 40, 40, 30, 50];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    }

    else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}

console.log("Largest Element:", largest);
console.log("Second Largest Element:", secondLargest);