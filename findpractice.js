function findUserByUsername(arr, str){
    return arr.find(function(obj){
        return obj.username === str;
    })

}

function removeUser(arr,str){
    let foundIndex = arr.findIndex(function(obj){
        return obj.username === str;
    })
    if (foundIndex === -1) return;

    return arr.splice(foundIndex,1)[0]
}
