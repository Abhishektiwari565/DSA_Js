//Remove Duplicate Elements from Array

let arr = [1, 2, 3, 2, 4, 1, 5];

console.log("Unique Elements:");

for (let i = 0; i < arr.length; i++) {

    let isDuplicate = false;

    for (let j = 0; j < i; j++) {

        if (arr[i] === arr[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        console.log(arr[i]);
    }
}