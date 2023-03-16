let receta = {
    nombre: "Sandwich",
    ingredientes: [
        {
            nombre: "Pan",
            cantidad : 2
        },
        {
            nombre : "Queso",
            cantidad : 1
        }
    ],
}

console.log(receta.ingredientes[0].nombre);

const sumCantidades = () => {
    const premisa = receta.ingredientes;
    return premisa[0].cantidad + premisa[1].cantidad;
}

console.log(sumCantidades());

