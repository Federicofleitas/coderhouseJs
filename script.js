// EXPRESARE EL VALOR DE CADA MOTO con DESCUENTO EN EFECTIVO Y EL PRECIO EN 3, 6  Y 12 CUOTAS SIN INTERES



///////////// Objeto constructor para base de las motos
function Moto(nombre, precio, info, cash, cuotas, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.info = info;
    this.cash = cash;
    this.cuotas = cuotas;
    this.id = id;

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
    divProducto.innerHTML = `<div>
                              <div class="card-body" id="card${producto.id}">
                                  <h3 class="card-title"> ${producto.nombre} </h3>
                                  <p class="card-text">Precio total: $${producto.precio} </p>
                                  <button id="boton${producto.cash}" class="btn btn-primary"> Precio en efectivo </button>
                                  <button id="boton${producto.cuotas}" class="btn btn-primary"> Precio en cuotas </button>
                                  <button id="boton${producto.info}" class="btn btn-primary"> Mas informacion </button></div>
                                  <div id="info${producto.id}"></div>
                                  </div>`;
    contenedorProductos.appendChild(divProducto);

    // CTA MAS INFORMACION
    const boton1 = document.getElementById(`boton${producto.info}`);
    const contenedor = document.getElementById(`info${producto.id}`)

    boton1.addEventListener('click', () => {
        contenedor.innerHTML = "";
        contenedor.innerHTML += `<div>
    <p>${producto.info}</p>
    </div>`
    });



    // CTA EFECTIVO 
    const boton2 = document.getElementById(`boton${producto.cash}`);

    boton2.addEventListener('click', () => {
        contenedor.innerHTML = "";
        contenedor.innerHTML += `<div>
    <p>El precio en efectivo tiene un descuento del 10% <br>
    Precio final: $${producto.cash}</p>
    </div>`
    });


    // CTA CUOTAS
    const boton3 = document.getElementById(`boton${producto.cuotas}`);

    boton3.addEventListener('click', () => {
        contenedor.innerHTML = "";
        contenedor.innerHTML += `<div>
    <p>3 cuotas sin interes: $${producto.cuotas / 3} <br>
    6 cuotas sin interes: $${producto.cuotas / 6} <br>
    12 cuotas sin interes: $${producto.cuotas / 12}</p>
    </div>`
    
    });


});


//   FORMULARIO POR DOM 
const formulario = document.getElementById('formContacto');
const divForm = document.createElement('div');

divForm.classList.add('mb-3');
divForm.innerHTML = `<div id="formCard">
                    <h5 class="text-center" >Completa con tu correo electrónico y consulta. </h5>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Correo electronico</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@hotmail.com"></div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Consulta</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></div>
                        <button type="submit" class="btn btn-primary" id="botonSubmit">Enviar</button></div>`;
formulario.appendChild(divForm);


// guardar los datos en localstorage


function tomarDatos(e) {
    e.preventDefault()
    const email = document.getElementById(`exampleFormControlInput1`).value
    const consulta = document.getElementById(`exampleFormControlTextarea1`).value

    let user = {
        email: email,
        consulta: consulta
    }

    localStorage.setItem(JSON.stringify(user.email), JSON.stringify(user.consulta))
}

// mensaje de submit y ejecutar funcion cuando hago click en submit
const botonSub = document.getElementById(`botonSubmit`);
const contenedor = document.getElementById(`formCard`)

botonSub.addEventListener('click', (e) => {
    tomarDatos(e);

    contenedor.innerHTML += ``

    //Cambio el mensaje por un toastify

    Toastify({
        text: " Su mensaje ha sido enviado",
        duration: 5000,
        destination: "",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "black",
        },
        onClick: function(){} // Callback after click
      }).showToast();

});


// Toastify para click en enviar 




// ASYNC para los numeros de contacto 

const botonSuc = document.querySelector(`.botsuc`);
const lista = document.querySelector(`#lista`);


function mostrarSucursales() {
    fetch("/data.json")
        .then((resp) => resp.json())
        .then((data) => {
            data.forEach((producto) => {
                const li = document.createElement("li")
                li.innerHTML = `
                    <h4>${producto.sucursal}</h4>
                    <h5>${producto.telefono}</h5>
                    `

                lista.append(li)
            })
        })
}


// Evento para hacer el boton sucursales
botonSuc.addEventListener('click', () => {
    mostrarSucursales();

});


