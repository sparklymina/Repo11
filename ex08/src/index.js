// Only change code below this line
function myMutation(arr){
    var status = true;
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    for(var i=0; i < arr[1].length; i++){
       if (!arr[0].includes(arr[1][i])) {
           return !status;
       }
       }
       return status;
}

// Only change code above this line

console.log(myMutation(["hello", "hey"]));     // Change this line
module.exports = myMutation;