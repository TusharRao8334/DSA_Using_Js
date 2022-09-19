// Binary Search for Array
// Function Defination
function binarySearch(arr, x, left, right) {
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] == x)
            return mid;
        else if (arr[mid] < x) {
            return binarySearch(arr, x, mid + 1, right);
        }
        else
            return binarySearch(arr, x, left, mid - 1);
    }
    return -1;
}

// Driver code 
let a = [8, 12, 15, 18, 21, 65, 78, 95];
let x = 62;
let left = 0;
let right = a.length - 1;
// Function Calling
let ans = binarySearch(a, x, left, right);
console.log(ans);