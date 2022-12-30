// EXPRESARE EL VALOR DE CADA MOTO con DESCUENTO EN EFECTIVO Y EL PRECIO EN 3, 6, 9 Y 12 CUOTAS SIN INTERES


let porcentaje = 0.90

///////////// Objeto constructor para base de las motos
function Moto (nombre, precio, cc, peso){
    this.nombre=nombre;
    this.precio=precio;
    this.cc=cc
    this.peso=peso
    
}


const fz = new Moto("Yamaha Fz250", 1415600, "250cc", "325kg")
const cb = new Moto("Honda CB250", 1168800, "250cc", "405kg")
const bajaj = new Moto("Bajaj Dominar 250", 977900, "250cc", "425kg")
const leon = new Moto("Benelli Leoncino 250", 1370000, "250cc", "450kg")


///////////////////////////////// FUNCIONES



///funcion para elegir el medio de pago
function elegirPago(precio){
    alert(`El valor total de la unidad es de: $ ${precio}`)
let medio = parseInt(prompt(`Seleecione la opción correspondiente a su medio de pago

1: Efectivo (10% de descuento)

2: Tarjeta de credito

`))

switch (medio) {
    case 1:
        precioEfectivo(precio)
        break;
    case 2:
        precioCuotas(precio)
        break;
    default:
        alert("La opcion ingresada no es correcta.")
        break;
}
}

function precioEfectivo(precio) {
    let efectivo = precio * porcentaje
alert(`Valor al contado: $${efectivo}`)
}

function precioCuotas(precio){
    for (let i = 1; i <= 4; i++) {
        let cuotas = i*3
        let resultado = precio / cuotas
        alert(`${cuotas} cuotas de $ ${resultado}`)
    }
    const datosTarjeta = [] //array para los datos de la tarjeta
    let tarjeta = prompt("Ingrese los 16 digitos de su tarjeta")
    datosTarjeta.push(tarjeta)
    let codigo = prompt("Ingrese los 3 digitos del codigo de seguridad de su tarjeta")
    datosTarjeta.push(codigo)
    let dni = prompt("Ingrese el DNI del titular de la tarjeta ingresada")
    datosTarjeta.push(dni)

    alert("A continuación le detallaremos los datos ingresados. Si los mismos son correctos nos comunicaremos con usted a la brevedad para finalizar la operación")
    alert(datosTarjeta[0])
    alert(datosTarjeta[1])
    alert(datosTarjeta[2])
    alert("Muchas gracias por confiar en nosotros")
}

function info(cilindrada,peso){
    alert(`Su cilindrada es: ${cilindrada} y su peso es de: ${peso} `)
}



////////////////////////////////////////////////

function consulta() {
    let consulta = prompt(`Seleccione el modelo a cotizar:

1: ${fz.nombre}
    
2: ${cb.nombre}
    
3: ${bajaj.nombre}
    
4: ${leon.nombre}
`)
    
    switch (consulta) {
        case "1":
            info(fz.cc,fz.peso)
            elegirPago(fz.precio)
            break;
        case "2":
            info(cb.cc,cb.peso)
            elegirPago(cb.precio)
            break;
        case "3":
            info(bajaj.cc,bajaj.peso)
            elegirPago(bajaj.precio)
            break;
        case "4":
            info(leon.cc,leon.peso)
            elegirPago(leon.precio)
            break;
    
        default:
            alert("La opcion ingresada no es correcta.")
            break;
    }  
}

//consulta()


//

let nuevoBoton = document.createElement("button")
nuevoBoton.setAttribute("class", "btn btn-primary")
nuevoBoton.setAttribute("id", "bot1")
nuevoBoton.textContent = ("Precio en efectivo")

let nuevoBoton2 = document.createElement("button")
nuevoBoton2.setAttribute("class", "btn btn-primary")
nuevoBoton2.setAttribute("id", "bot2")
nuevoBoton2.textContent = ("Precio en cuotas")



document.querySelector(".tarjfz").appendChild(nuevoBoton)
document.querySelector(".tarjfz").appendChild(nuevoBoton2)


let nuevoBoton3 = document.createElement("button")
nuevoBoton3.setAttribute("class", "btn btn-primary")
nuevoBoton3.setAttribute("id", "bot3")
nuevoBoton3.textContent = ("Precio en efectivo")

let nuevoBoton4 = document.createElement("button")
nuevoBoton4.setAttribute("class", "btn btn-primary")
nuevoBoton4.setAttribute("id", "bot4")
nuevoBoton4.textContent = ("Precio en cuotas")



document.querySelector(".tarjhd").appendChild(nuevoBoton3)
document.querySelector(".tarjhd").appendChild(nuevoBoton4)



let nuevoBoton5 = document.createElement("button")
nuevoBoton5.setAttribute("class", "btn btn-primary")
nuevoBoton5.setAttribute("id", "bot5")
nuevoBoton5.textContent = ("Precio en efectivo")

let nuevoBoton6 = document.createElement("button")
nuevoBoton6.setAttribute("class", "btn btn-primary")
nuevoBoton6.setAttribute("id", "bot6")
nuevoBoton6.textContent = ("Precio en cuotas")



document.querySelector(".tarjbaj").appendChild(nuevoBoton5)
document.querySelector(".tarjbaj").appendChild(nuevoBoton6)


let nuevoBoton7 = document.createElement("button")
nuevoBoton7.setAttribute("class", "btn btn-primary")
nuevoBoton7.setAttribute("id", "bot7")
nuevoBoton7.textContent = ("Precio en efectivo")

let nuevoBoton8 = document.createElement("button")
nuevoBoton8.setAttribute("class", "btn btn-primary")
nuevoBoton8.setAttribute("id", "bot6")
nuevoBoton8.textContent = ("Precio en cuotas")



document.querySelector(".tarjben").appendChild(nuevoBoton7)
document.querySelector(".tarjben").appendChild(nuevoBoton8)

