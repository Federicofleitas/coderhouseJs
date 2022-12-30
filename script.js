// EXPRESARE EL VALOR DE CADA MOTO con DESCUENTO EN EFECTIVO Y EL PRECIO EN 3, 6  Y 12 CUOTAS SIN INTERES



///////////// Objeto constructor para base de las motos
function Moto (nombre, precio, info, cash, cuotas,id){
    this.nombre=nombre;
    this.precio=precio;
    this.info=info;
    this.cash=cash;
    this.cuotas=cuotas;
    this.id=id;
    
}


const fz = new Moto("Yamaha Fz250", 1415600, "Cilindrada: 250cc <br> Peso: 325kg", 1274040, 1415600, 1)
const cb = new Moto("Honda CB250", 1168800, "Cilindrada: 250cc <br> Peso: 405kg", 1051920, 1168800, 2)
const bajaj = new Moto("Bajaj Dominar 250", 977900, "Cilindrada: 250cc <br> Peso: 425kg", 880110, 977900, 3)
const leon = new Moto("Benelli Leoncino 250", 1370000, "Cilindrada: 250cc <br> Peso: 450kg", 1233000, 1370000, 4)

// ARRAY

const productos = [fz, cb, bajaj, leon]




// muestro los productos con el DOM

const contenedorProductos = document.getElementById('contenedorProductos');

productos.forEach((producto) => {
  const divProducto = document.createElement('div');
  divProducto.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12');
  divProducto.innerHTML = `
                          <div>
                              <div class="card-body" id="card${producto.id}">
                                  <h3 class="card-title"> ${producto.nombre} </h3>
                                  <p class="card-text">Precio total: $${producto.precio} </p>
                                  <button id="boton${producto.cash}" class="btn btn-primary"> Precio en efectivo </button>
                                  <button id="boton${producto.cuotas}" class="btn btn-primary"> Precio en cuotas </button>
                                  <button id="boton${producto.info}" class="btn btn-primary"> Mas informacion </button>
                              </div>
                          </div>`;
  contenedorProductos.appendChild(divProducto);

// CTA MAS INFORMACION
  const boton1 = document.getElementById(`boton${producto.info}`);
  const contenedor = document.getElementById(`card${producto.id}`)

  boton1.addEventListener('click', () => {
    contenedor.innerHTML += `<div>
        <p>${producto.info}</p>
        </div>`
  });
  /*boton1.addEventListener('mouseup', () => {
    contenedor.innerHTML += "-"
  });
  */


// CTA EFECTIVO 
  const boton2 = document.getElementById(`boton${producto.cash}`);
  const contenedor2 = document.getElementById(`card${producto.id}`)

  boton2.addEventListener('click', () => {
    contenedor2.innerHTML += `<div>
        <p>El precio en efectivo tiene un descuento del 10% <br>
        Precio final: $${producto.cash}</p>
        </div>`
  });
  /*boton1.addEventListener('mouseup', () => {
    contenedor.innerHTML += "-"
  });
  */

// CTA CUOTAS
  const boton3 = document.getElementById(`boton${producto.cuotas}`);
  const contenedor3 = document.getElementById(`card${producto.id}`)

  boton3.addEventListener('click', () => {
    contenedor3.innerHTML += `<div>
    <p>3 cuotas sin interes: $${producto.cuotas/3} <br>
    6 cuotas sin interes: $${producto.cuotas/6} <br>
    12 cuotas sin interes: $${producto.cuotas/12}</p>
    </div>`
  });
  /*boton1.addEventListener('mouseup', () => {
    contenedor.innerHTML += "-"
  });
  */


});

///////////////////////////////// FUNCIONES



///funcion para elegir el medio de pago
/*
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
    /*const datosTarjeta = [] //array para los datos de la tarjeta
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
    */

/*
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
*/
//consulta()


//
/*
let nuevoBoton = document.createElement("button")
nuevoBoton.setAttribute("class", "btn btn-primary")
nuevoBoton.setAttribute("id", "bot1")
nuevoBoton.textContent = ("Precio en efectivo")

let nuevoBoton2 = document.createElement("button")
nuevoBoton2.setAttribute("class", "btn btn-primary")
nuevoBoton2.setAttribute("id", "bot2")
nuevoBoton2.textContent = ("Precio en cuotas")

let nuevoBoton3 = document.createElement("button")
nuevoBoton3.setAttribute("class", "btn btn-danger")
nuevoBoton3.setAttribute("id", "bot3")
nuevoBoton3.textContent = ("Mas información")


document.querySelector(".tarjfz").appendChild(nuevoBoton3)
document.querySelector(".tarjfz").appendChild(nuevoBoton)
document.querySelector(".tarjfz").appendChild(nuevoBoton2)

const productos = [fz]
const contenedor = document.getElementById('tj1');

nuevoBoton3.addEventListener("mousemove", () =>{
    productos.forEach(producto => {
        contenedor.innerHTML += `<div>
        <p>Cilindrada: ${producto.cc}<br>
        Peso:${producto.peso}</p>
        </div>`
    });
})

nuevoBoton3.addEventListener("mouseover", () =>{
    contenedor.innerHTML += ""
    });

*/



/*let nuevoBoton3 = document.createElement("button")
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
*/



