let arr = [1,2,3]
arr.forEach(function(element, index, arr){
    arr[index]=element*2
})

console.log(arr)