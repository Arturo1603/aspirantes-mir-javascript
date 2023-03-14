const maxIndex = (arr) => {
    let numeroMayor = 0;
    let indexMayor = 0;
    if(arr.length === 0) return -1;
    for(let i = 0; i < arr.length; i++){
        if(numeroMayor < arr[i]) {
            numeroMayor = arr[i];
            indexMayor = i;
        }
    }
    return indexMayor;
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
