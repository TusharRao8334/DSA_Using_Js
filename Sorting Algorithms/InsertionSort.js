function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = key
    }
    return arr;
}

// Driver Code
let arr = [0, 1, 98, 65, 45, 2, 11];
let sorted = insertionSort(arr);
console.log(sorted);