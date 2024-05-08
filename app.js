// // variables
// // var
// console.log(`~ nombre:`,nombre)
// var nombre
// console.log(`~ nombre:`,nombre)
// var nombre = "Ale"
// nombre = "Yo"
// console.log(`~ nombre:`,nombre)

// // let
// // console.log(`~ apellido: `, apellido)
// let apellido
// console.log(`~ apellido: `, apellido)
// apellido = "Lukacher"
// console.log(`~ apellido: `, apellido)
// // let apellido = "Novikov"

// // const
// // const edad
// // console.log(`~ edad: `, edad)
// const edad = 58
// // edad = 20
// // const edad = 20
// console.log(`~ edad: `, edad)
// ---------------------------------
// tipos de datos en js

// datos primitivos
// 1. String
// let str = "Hola, soy un string";
// console.log(`~ str: `, str);
// console.log(`~ str: `, typeof str);
// // 2. Number
// let numb = 45;
// console.log(`~ numb: `, numb)
// console.log(`~ numb: `, typeof numb)
// // 3. Bigint
// const bigint = 9007199254740991n
// console.log(`~ bigint: `, bigint)
// console.log(`~ bigint: `, typeof bigint)
// // 4. Boolean
// let bool = true; // false
// console.log(`~ bool: `, bool)
// console.log(`~ bool: `, typeof bool)
// // 5. Undefined
// let und = undefined;
// console.log(`~ und: `, und)
// console.log(`~ und: `, typeof und)
// // 6. Null
// let nl = null
// console.log(`~ nl: `, nl)
// console.log(`~ nl: `, typeof nl)
// // 7. Symbol
// let simbolo = Symbol("sim")
// console.log(`~ simbolo: `, simbolo)
// console.log(`~ simbolo: `, typeof simbolo)

// // datos complejos
// // 8. Object
// let objData = "nombre"
// const obj = {
//     nombre: "Ale",
//     edad: 58
// }
// console.log(`~ obj: `, obj)
// console.log(`~ obj: `, typeof obj)
// obj.edad = 30;
// console.log(`~ obj: `, obj)
// obj["nombre"] = "otroNombre"
// obj[objData] = "otroNombre"
// obj.apellido = "Lukacher"
// obj["apellido"] = "Lukacher"
// console.log(`~ obj: `, obj)


// const obj = {
//     nombre: "Ale",
//     edad: 58
// };

// const nuevoObj = {
//     nombre: 'otroNombre',
//     apellido: 'Lukacher',
//     edad: 30,
    
//     ...obj // Agregar las propiedades del objeto original al nuevo objeto
// };

// console.log(obj);
// console.log(nuevoObj);




// 9. Array
// const arr = [1, "hola", "soy", true]
// console.log(`~ arr: `, arr)
// console.log(`~ arr: `, typeof arr)
// // arr.length = 0
// // console.log(`~ arr: `, arr)

// // 10. Date
// const dt = Date()
// console.log(`~ dt: `, dt)
// console.log(`~ dt: `, typeof dt)
// const ndt = new Date()
// console.log(`~ ndt: `, ndt)
// console.log(`~ ndt: `, typeof ndt)

// funciones
// saludar()
// function saludar() {
//     console.log("Hola equipo")
// }
// saludar()

// console.log(saludar());
// console.log(typeof saludar());

// console.log(saludar);
// console.log(typeof saludar);


// funciones con parámetros
// function saludar(params) {
//       return `Hola ${params}`
// }

// console.log(saludar)
// console.log(saludar("Ale"))
// console.log(typeof saludar)
// console.log(typeof saludar("Ale"))


// funciones anónimas
// const saludar = function(params) {
//     console.log(`~saludar ~nombre:`, params )
// }

// saludar("Ale")



// arrow function
//const saludar = () => console.log("Hola Ale")

// const saludar = () => "Hola Ale"

// const data = saludar();

// console.log(`~data:`, data)

// const saludar = () => {
//     return "Hola Ale"
// }

// const data = saludar();

// console.log(`~data:`, data)


// this
// function whoIsThis() {
//     console.log(`~whoIsThis ~whoIsThis:`, this)
// }

// whoIsThis()



// const whoIsThisInArrow = () => console.log(`~whoIsThisInArrow ~whoIsThisInArrow:`, this)

// whoIsThisInArrow()


// callback
// function saludar(fcn) {
//     return fcn();
// }

// function buenosDias() {
//     console.log(`~buenosDias ~buenosDias:`)
// }

// function buenasNoches() {
//     console.log(`~buenasNoches ~buenasNoches:`)
// }

// saludar(buenosDias)
// saludar(buenasNoches)

// callback con sintaxis arrow function
const saludar = (fcn) => fcn()
const buenosDias = () => console.log(`~buenosDias ~buenosDias:`)
const buenasNoches = () => console.log(`~buenasNoches ~buenasNoches:`)

saludar(buenosDias)
saludar(buenasNoches)




