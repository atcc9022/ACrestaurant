// FUNCIONALIDAD DE BOTON MAS Y MENOS

// MENU UNO

let precio = document.getElementById("precio").valueAsNumber;
let cantidadinicial = 0
let cantidadMenuUno = document.getElementById("sumar");
let valorTotal = document.getElementById("valor")
let pedidoTotal = 0


let compraMenuUno = document.getElementById("masuno");
compraMenuUno.addEventListener('click', () => {
    cantidad += 1;
    cantidadMenuUno.textContent = cantidad;
  });

let BorrarMenuUno = document.getElementById("menos");
let cantidad = parseInt(cantidadMenuUno.textContent);

BorrarMenuUno.addEventListener('click' , () =>{
    if (cantidad > 0){
        cantidad -= 1
        cantidadMenuUno.textContent = cantidad;
    }
})

let agregarMenuUno = document.getElementById("agregar");
agregarMenuUno.addEventListener('click', () =>{
    let total = (cantidad * precio)
    valorTotal.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotal()
})

let inputPrecio = document.getElementById("precio");
inputPrecio.addEventListener('input', () =>{
    precio = inputPrecio.valueAsNumber;
    let total = (cantidad * precio);
    valorTotal.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotal()
})

function actualizaPedidoTotal(){
    pedidoTotal = calcularPedidoTotal();
    document.getElementById("Totalpedido").textContent = `TOTAL DE PEDIDO: ${pedidoTotal}`;
}

function calcularPedidoTotal(){
    subTotalmenuUno = cantidad * precio;
    let total = subTotalmenuUno;

    return total
}





// MENU DOS

let precioDos = document.getElementById("precioMenuDos").valueAsNumber;
let cantidadinicialDos = 0
let cantidadMenuDos = document.getElementById("sumar_dos");
let valorTotalDos = document.getElementById("valorDos")
let pedidoTotalDos = 0


let compraMenuDos = document.getElementById("masdos");
compraMenuDos.addEventListener('click', () => {
    cantidadDos += 1;
    cantidadMenuDos.textContent = cantidadDos;
  });

let BorrarMenuDos = document.getElementById("menos_dos");
let cantidadDos = parseInt(cantidadMenuDos.textContent);

BorrarMenuDos.addEventListener('click' , () =>{
    if (cantidadDos > 0){
        cantidadDos -= 1
        BorrarMenuDos.textContent = cantidadDos;
    }
})

let agregarMenuDos = document.getElementById("agregarMenudos");
agregarMenuDos.addEventListener('click', () =>{
    let total = (cantidadDos * precioDos)
    valorTotalDos.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotalDos()
})

let inputPrecioDos = document.getElementById("precioMenuDos");
inputPrecioDos.addEventListener('input', () =>{
    precioDos = inputPrecioDos.valueAsNumber;
    let total = (cantidadDos * precioDos);
    valorTotalDos.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotalDos()
})

function actualizaPedidoTotalDos(){
    pedidoTotalDos = calcularPedidoTotalDos();
    document.getElementById("Totalpedido").textContent = `TOTAL DE PEDIDO: ${pedidoTotal + pedidoTotalDos}`;
}

function calcularPedidoTotalDos(){
    let subTotalmenuDos = cantidadDos * precioDos;
    return subTotalmenuDos
}






// MENU TRES


let precioTres = document.getElementById("precioMenutres").valueAsNumber;
let cantidadinicialTres = 0
let cantidadMenuTres = document.getElementById("sumar_tres");
let valorTotalTres = document.getElementById("valorTres")
let pedidoTotalTres = 0


let compraMenuTres = document.getElementById("mastres");
compraMenuTres.addEventListener('click', () => {
    cantidadTres += 1;
    cantidadMenuTres.textContent = cantidadTres;
  });

let BorrarMenuTres = document.getElementById("menos_tres");
let cantidadTres = parseInt(cantidadMenuTres.textContent);

BorrarMenuTres.addEventListener('click' , () =>{
    if (cantidadTres > 0){
        cantidadTres -= 1
        BorrarMenuTres.textContent = cantidadTres;
    }
})

let agregarMenuTres = document.getElementById("agregarMenutres");
agregarMenuTres.addEventListener('click', () =>{
    let total = (cantidadTres * precioTres)
    valorTotalTres.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotalTres()
})

let inputPrecioTres = document.getElementById("precioMenutres");
inputPrecioTres.addEventListener('input', () =>{
    precioTres = inputPrecioTres.valueAsNumber;
    let total = (cantidadTres * precioTres);
    valorTotalTres.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotalTres()
})

function actualizaPedidoTotalTres(){
    pedidoTotalTres = calcularPedidoTotalTres();
    document.getElementById("Totalpedido").textContent = `TOTAL DE PEDIDO: ${pedidoTotal + pedidoTotalDos + pedidoTotalTres}`;
}

function calcularPedidoTotalTres(){
    let subTotalmenuTres = cantidadTres * precioTres;
    return subTotalmenuTres
}



// BEBIDAS

let precioBebida = document.getElementById("preciobebidaUno").valueAsNumber;
let cantidadBebidaInicial = 0;
let cantidadBebidaUno = document.getElementById("sumarBebidaUno");
let valorTotalBebidaUno = document.getElementById("valorBebidaUno");
let pedidoTotalBebidaUno = 0


let compraBebidaUno = document.getElementById("bebidaUno");
compraBebidaUno.addEventListener('click', () => {
  cantidadBebidaInicial += 1;
  cantidadBebidaUno.textContent = cantidadBebidaInicial;
});


let BorrarBebidaUno = document.getElementById("menosBebidaUno");
BorrarBebidaUno.addEventListener('click' , () =>{
    if (cantidadBebidaInicial > 0){
        cantidadBebidaInicial -= 1
        cantidadBebidaUno.textContent = cantidadBebidaInicial;
    }
})

let agregarBebidaUno = document.getElementById("agregarBebidaUno");
agregarBebidaUno.addEventListener('click', () =>{
    let total = (cantidadBebidaInicial * precioBebida)
    valorTotalBebidaUno.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotalBebida()
})

let inputPrecioBebida = document.getElementById("preciobebidaUno");
inputPrecioBebida.addEventListener('input', () =>{
    precioBebida = inputPrecioBebida.valueAsNumber;
    let total = (cantidadBebidaInicial * precioBebida);
    valorTotal.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotalBebida()
})


function actualizaPedidoTotalBebida(){
    pedidoTotalBebidaUno = calcularPedidoTotalBebida();
    document.getElementById("Totalpedido").textContent = `TOTAL DE PEDIDO: ${pedidoTotal + pedidoTotalDos + pedidoTotalTres + pedidoTotalBebidaUno}`;
}

function calcularPedidoTotalBebida(){
    let subTotalBebidaUno = cantidadBebidaInicial * precioBebida;
    return subTotalBebidaUno
}



// bebdiaDos

let precioBebidaDos = document.getElementById("preciobebidaDos").valueAsNumber;
let cantidadBebidaInicialDos = 0;
let cantidadBebidaDos = document.getElementById("sumarBebidaDos");
let valorTotalBebidaDos = document.getElementById("valorBebidaDos");
let pedidoTotalBebidaDos = 0

let compraBebidaDos = document.getElementById("bebidaDos");
compraBebidaDos.addEventListener('click', () => {
  cantidadBebidaInicialDos += 1;
  cantidadBebidaDos.textContent = cantidadBebidaInicialDos;
});


let BorrarBebidaDos = document.getElementById("menosBebidaDos");
BorrarBebidaDos.addEventListener('click' , () =>{
    if (cantidadBebidaInicialDos > 0){
        cantidadBebidaInicialDos -= 1
        cantidadBebidaDos.textContent = cantidadBebidaInicialDos;
    }
})

let agregarBebidaDos = document.getElementById("agregarBebidaDos");
agregarBebidaDos.addEventListener('click', () =>{
    let total = (cantidadBebidaInicialDos * precioBebidaDos)
    valorTotalBebidaDos.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotalBebidaDos()
})

let inputPrecioBebidaDos = document.getElementById("preciobebidaDos");
inputPrecioBebidaDos.addEventListener('input', () =>{
    precioBebidaDos = inputPrecioBebidaDos.valueAsNumber;
    let total = (cantidadBebidaInicialDos * precioBebidaDos);
    valorTotalDos.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotalBebidaDos()
})


function actualizaPedidoTotalBebidaDos(){
    pedidoTotalBebidaDos = calcularPedidoTotalBebidaDos();
    document.getElementById("Totalpedido").textContent = `TOTAL DE PEDIDO: ${pedidoTotal + pedidoTotalDos + pedidoTotalTres + pedidoTotalBebidaUno + pedidoTotalBebidaDos}`;
}

function calcularPedidoTotalBebidaDos(){
    let subTotalBebidaDos = cantidadBebidaInicialDos * precioBebidaDos;
    return subTotalBebidaDos
}




// bebdiatres

let precioBebidaTres = document.getElementById("preciobebidaTres").valueAsNumber;
let cantidadBebidaInicialTres = 0;
let cantidadBebidaTres = document.getElementById("sumarBebidaTres");
let valorTotalBebidaTres = document.getElementById("valorBebidaTres");
let pedidoTotalBebidaTres = 0

let compraBebidaTres = document.getElementById("bebidaTres");
compraBebidaTres.addEventListener('click', () => {
  cantidadBebidaInicialTres += 1;
  cantidadBebidaTres.textContent = cantidadBebidaInicialTres;
});


let BorrarBebidaTres = document.getElementById("menosBebidaTres");
BorrarBebidaTres.addEventListener('click' , () =>{
    if (cantidadBebidaInicialTres > 0){
        cantidadBebidaInicialTres -= 1
        cantidadBebidaTres.textContent = cantidadBebidaInicialTres;
    }
})

let agregarBebidaTres = document.getElementById("agregarBebidaTres");
agregarBebidaTres.addEventListener('click', () =>{
    let total = (cantidadBebidaInicialTres * precioBebidaTres)
    valorTotalBebidaTres.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotalBebidaTres()
})

let inputPrecioBebidaTres = document.getElementById("preciobebidaTres");
inputPrecioBebidaTres.addEventListener('input', () =>{
    precioBebidaTres = inputPrecioBebidaTres.valueAsNumber;
    let total = (cantidadBebidaInicialTres * precioBebidaTres);
    valorTotalTres.textContent = `TOTAL INGRESADO = ${total}`
    actualizaPedidoTotalBebidaTres()
})


function actualizaPedidoTotalBebidaTres(){
    pedidoTotalBebidaTres = calcularPedidoTotalBebidaTres();
    document.getElementById("Totalpedido").textContent = `TOTAL DE PEDIDO: ${pedidoTotal + pedidoTotalDos + pedidoTotalTres + pedidoTotalBebidaUno + pedidoTotalBebidaDos + pedidoTotalBebidaTres}`;
}

function calcularPedidoTotalBebidaTres(){
    let subTotalBebidaTres = cantidadBebidaInicialTres * precioBebidaTres;
    return subTotalBebidaTres
}


let metodoDePago = document.getElementById("tarjetas")
metodoDePago.addEventListener('change', () =>{
    let medioPagoSeleccionado = metodoDePago.value;
    alert(`Tu medio de pago seleccionado fue ${medioPagoSeleccionado}. Esta seguro de Continuar? si lo estás, presiona Finalizar`)
})

// ________________

// FINALIZAR

// Código para actualizar la boleta con los datos seleccionados

function actualizarBoleta(pedidoTotal, metodoPago) {
    let itemsPedido = document.getElementById("itemsPedido");
    let subtotal = document.getElementById("subtotal");
    let metodoPagoElement = document.getElementById("metodoPago");
    let total = document.getElementById("total");
  
    // Limpia los elementos anteriores
    itemsPedido.innerHTML = "";
    subtotal.textContent = "";
    metodoPagoElement.textContent = "";
    total.textContent = "";
  
    // Arreglo de elementos seleccionados
    const items = [
      { nombre: "COMPLETO ITALIANO", cantidad: getCantidadSeleccionada("sumar"), precio: parseInt(document.getElementById("precio").value) },
      { nombre: "COMPLETO CHUCRUT", cantidad: getCantidadSeleccionada("sumar_dos"), precio: parseInt(document.getElementById("precioMenuDos").value) },
      { nombre: "COMPLETO AS", cantidad: getCantidadSeleccionada("sumar_tres"), precio: parseInt(document.getElementById("precioMenutres").value) },
      { nombre: "COCA COLA", cantidad: getCantidadSeleccionada("sumarBebidaUno"), precio: parseInt(document.getElementById("preciobebidaUno").value) },
      { nombre: "CERVEZAS 320CC", cantidad: getCantidadSeleccionada("sumarBebidaDos"), precio: parseInt(document.getElementById("preciobebidaDos").value) },
      { nombre: "AGUA MINERAL", cantidad: getCantidadSeleccionada("sumarBebidaTres"), precio: 2500 }
    ];
  
    // Agrega los elementos seleccionados y sus precios al detalle del pedido
    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (item.cantidad > 0) {
          let listItem = document.createElement("li");
          listItem.textContent = `${item.nombre} x ${item.cantidad}: $${item.precio * item.cantidad}`;
          itemsPedido.appendChild(listItem);
      }
    }
  
    // Calcula el subtotal del pedido
    let subtotalPedido = 0;
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      subtotalPedido += item.precio * item.cantidad;
    }
    subtotal.textContent = `PAGO TOTAL: ${subtotalPedido}`;
  
    // Muestra el método de pago
    metodoPagoElement.textContent = `Método de pago: ${metodoPago}`;

  }
  
  // Función para obtener la cantidad seleccionada de un elemento
  function getCantidadSeleccionada(elementId) {
    let cantidadElement = document.getElementById(elementId);
    return parseInt(cantidadElement.textContent);
  }
  
  // Obtén el botón "Finalizar" y agrega el evento click para actualizar la boleta
  let finalizarButton = document.getElementById("pagototal");
  finalizarButton.addEventListener("click", function() {
    let pedidoTotal = 0;
  
    // Obtén el valor del pedido total
    let valorTotalElement = document.getElementById("Totalpedido");
    pedidoTotal = parseFloat(valorTotalElement.textContent.replace("TOTAL DE COMPRA: $", ""));
  
    // Obtén el método de pago seleccionado
    let metodoPagoSelect = document.getElementById("tarjetas");
    let metodoPago = metodoPagoSelect.value;
  
    // Actualiza la boleta con los datos seleccionados
    actualizarBoleta(pedidoTotal, metodoPago);
  });
  
  // Ejemplo de uso inicial
  