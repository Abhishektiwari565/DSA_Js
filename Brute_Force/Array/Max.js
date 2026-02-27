function FindMaxInArray(arr){
    let max=arr[0];
    for(let i=1;i<arr.length-1;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(FindMaxInArray([7,4,5,1,9]));