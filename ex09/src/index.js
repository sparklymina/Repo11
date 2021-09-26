// Only change code below this line
    
function myBouncer(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// Only change code above this line

console.log(myBouncer([7, "ate", "", false, 9]));     // Change this line
module.exports = myBouncer;