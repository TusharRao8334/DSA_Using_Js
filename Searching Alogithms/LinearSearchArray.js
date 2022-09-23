// Linear Search Algorithms For Array O(n)
// function defination
function linearSearch(a, e) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == e) {
            return i;
        }
        else {
            return -1;
        }
    }
}

// driver code
let arr = [25, 52, 65, 35, 89, 19, 17];
let x = 13;

// function calling
let ans = linearSearch(arr, x);
console.log(ans);


