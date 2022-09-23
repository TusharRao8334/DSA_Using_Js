//  Bubble Sort in js
// function def
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; //swapping of array elements
            }
        }
    }
    return arr;
}

// driver code
let arr = [0, 5, 98, 65, 112, 12, 45, 63, 9, 15];
let ans = bubbleSort(arr);
console.log(ans);