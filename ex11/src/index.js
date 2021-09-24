// Only change code below this line
function splitArrayInGroups(arr, n) {
    var result = [];
    while (arr.length > n) {
        result.push(arr.splice(0, n))
    }
    result.push(arr)
    return result;
}

// Only change code above this line
console.log(splitArrayInGroups(arr, n)); // Change this line
module.exports = splitArrayInGroups;