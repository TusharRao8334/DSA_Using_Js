// implementation of selection sort in JS
// function Defination  // Time complexity O(n^2)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]]; //swapping of array
    }
    return arr;
}


// driver code
let a = [2, 5, 32, 9, 1, 18, 65, 32];
console.log(selectionSort(a));