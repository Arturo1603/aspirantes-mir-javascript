let pedro = {
    nombre : "Pedro Perez",
    edad : 30,
    activo : true,
    hobbies : ["programar", "squash", "piano"]
};

console.log(pedro.edad);

pedro.estatura = 1.8;

delete pedro.activo;

for (const propiedades in pedro ) {
    console.log(propiedades +": "+ pedro[propiedades]);
}

const saluda = () => {
    return "Hola, me llamo " + pedro.nombre;
}

console.log(saluda());