function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1; 
}

let arr = [1, 1, 2, 2, 3, 4, 4, 5];

let newSize = removeDuplicates(arr);

for (let i = 0; i < newSize; i++) {
    console.log(arr[i]);
}