// using greedy method
// function defination
function getPosition(arr, target) {
    let left = 0;
    let right = a.length - 1;
    while (left <= right) {
        if (arr[left] + arr[right] == target) {
            return [left, right];
        }
        else if (arr[left] + arr[right] < target)
            left += 1;
        else
            right -= 1;
    }
}


// driver code
let a = [20, 40, 60, 80, 90, 120, 240];
let target = 170;
let result = getPosition(a, target);
console.log(result);