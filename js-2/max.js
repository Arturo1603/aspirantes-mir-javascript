// escribe la función max acá
const max = (arr) => {
    let numeroMayor = 0;
    if(arr.length === 0) return undefined;
    for (let i = 0; i < arr.length; i++){
        if(numeroMayor < arr[i]) numeroMayor = arr[i];
    }
    return numeroMayor;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined