// ternary search
function ternarySearch(arr, l, r, key) {
    let mid1 = Math.floor(l + (r - l) / 3);
    let mid2 = Math.floor(r - (r - l) / 3);
    while (l <= r) {
        if (arr[mid1] == key)
            return mid1;
        if (arr[mid2] == key)
            return mid2;

        if (key < arr[mid1])
            return ternarySearch(arr, l, mid1 - 1, key);
        else if (key > arr[mid2])
            return ternarySearch(arr, mid2 + 1, r, key);
        else
            return ternarySearch(arr, mid1 + 1, mid2 - 1, key);
    }
    return -1;
}

// driver code
let arr = [12, 15, 18, 23, 28, 30, 33, 35, 38, 43, 49, 51, 54, 60];
let key = 28;
let r = arr.length - 1;
let l = 0;
let ans = ternarySearch(arr, l, r, key);
console.log((ans == -1) ? 'Element is not present' : `The element present in the array is at ${ans} position`);
