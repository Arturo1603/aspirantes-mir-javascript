const join = (arr) =>{
    let texto = "";
    for (let index = 0; index < arr.length; index ++ ) {
        texto += " "+ arr[index];
    }
    return texto;
}
console.log(join(["a", "b", "c"])) // 1

