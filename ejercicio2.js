//Primera parte
const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad += 6

console.log(jedi)

//Segunda Parte
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

const presentacion = "Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.";

console.log(presentacion)

//Tercera parte
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
const precioTotal = sable1.precio + sable2.precio;

console.log(precioTotal)

//Cuarta Parte
let precioBaseGlobal = 10000;

precioBaseGlobal += 15000

console.log(precioBaseGlobal)

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;

console.log(nave1);
console.log(nave2);