

function getUnique(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(var value of array){
        if(uniqueArray.indexOf(value) === -1){
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}

var names = ["John", "Peter", "Clark", "Harry", "John", "Alice","Alice"];
var uniqueNames = getUnique(names);
console.log(uniqueNames);