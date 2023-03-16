let persona = {
    nombre: "ash Ketchup",
    edad: 10,
    ciudad: "Paleta",
    profesion: "Maestro Pokemon"
}

console.log(persona);

const presentacion = (persona) => {
    return "Mi nombre es "+ persona.nombre + " y tengo "+ persona.edad + " años, vivo en  " + persona.ciudad;
};

let mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["atrapar pokemon", "jugar con pikachu", "abandonar pokemones fuertes"];

console.log(persona.hobbies);

for (hobbie of persona.hobbies){
    console.log(hobbie);
}