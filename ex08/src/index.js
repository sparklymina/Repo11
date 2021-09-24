// Only change code below this line
function myMutation(arr) {
    var secondEle = [...arr.pop()];
    var firstEle = [...arr.shift()];
    firstEle = firstEle.map(ele => ele.toLowerCase())
    secondEle = secondEle.map(ele => ele.toLowerCase())
    var charCounter = 0;
    for (var i = 0; i < secondEle.length; i++) {
        if (firstEle.includes(secondEle[i])) {
            charCounter++;
        }
    }
    return charCounter === secondEle.length;
}

// Only change code above this line
console.log(myMutation(arr)); // Change this line
module.exports = myMutation;