//Count Positive, Negative
let arr = [10, -5, 7, -2, 0, -8, 4];

let positive = 0;
let negative = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] >= 0) {
        positive++;
    }

    else if (arr[i] < 0) {
        negative++;
    }
}

console.log("Positive Numbers:", positive);
console.log("Negative Numbers:", negative);