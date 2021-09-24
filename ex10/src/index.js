// Only change code below this line
function mySplice(arr1, arr2, n) {
    var arr3 = [...arr2];
    for (var i = 0; i < arr1.length; i++) {
        arr3.splice(n, 0, arr1[i]);
    }
    return arr3;
}

// Only change code above this line
console.log(mySplice(arr1, arr2, n)); // Change this line
module.exports = mySplice;