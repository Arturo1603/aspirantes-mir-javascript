// escribe la función suma acá

    const sum = (numero) => {
        let resultado = 0;
        if(Math.sign(numero)==1){
            for(let i = 1; i <= numero ; i++){
                resultado = resultado + i;
            }
        }else{
            return "no es un numero positivo";
        }
        return resultado;
    }
// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120

