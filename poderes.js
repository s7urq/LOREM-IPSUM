console.log("Hola")

var santi = "santiagour";

console.log("soy " + santi);

let santi2 = 2*3;
const santi0 = "jesus"

console.log(santi2 + santi0)
console.log(santi2 /3)

// condicionales god

let san0 = 5
if (san0+2 == 7){
    console.log( "es 7!")   
} else{
    console.log("no es 7 :(")
}

let resPreg = san0+5==7

if (resPreg=true){
    console.log("vamo los pibe")
}

let miNombre =  "2"

if(miNombre == 2){
    console.log("goddededd")
} 
//contador
let contador = 0
while( contador <= 5){
    console.log(contador)
    contador = contador + 1
    console.log( "y sube!")
}

for(let i = 0 ; i < 10 ; i++){
    console.log("-" + i)
}

//funciones

function saludar(santi){
    console.log("hola " + santi)
}
saludar(santi)

let n11 = 5
let n12 = 2
function multiplicar(n1,n2){
    let resu = n1*n2
    return resu
}
console.log(multiplicar(n11,n12))

//arrays

let matriz = ["coca","fernet","hielo"]
for (let i=0 ; i < 3 ; i++){
    console.log("accediendo al ..." + i)
    console.log(matriz[i])
}

//OBJETOS

let person = {
    nombre : santi,
    edad: 23,
    masc: true,
}
console.log(person)

person.comidaFav = "paty"

let person2 = {
    nombre: "lurdes",
    edad: 24,
    masc: false,
}
person2.comidaFav = "ravioli"

console.log(person)
console.log(person2)

