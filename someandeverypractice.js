function hasOddNumber(arr){
    return arr.some(function(i){
        return i%2 != 0;
    })
}

function hasAZero(num){
    numArr = num.toString().split("");
    return numArr.some(function(n){
        return n === '0';
    })
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val % 2 !== 0;
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
}

function hasCertainKey(arr,key){
    return arr.every(function(obj){
        return key in obj;
    })
}

function hasCertainValue(arr,key,value){
    return arr.every(function(obj){
        return obj[key] === value;
    })
}