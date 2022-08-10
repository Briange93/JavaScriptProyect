
const edadStorage = localStorage.getItem('anioNacimiento');

function edadMinima (nacimiento) {
    const anio = 2022 ;
    const edadUsuario = anio - nacimiento ;
    return edadUsuario;    
}

const nombreUsuario = document.getElementById('nombre-usuario');
const anioNacimiento =localStorage.getItem('añoNacimiento');
const input = document.getElementById('searchInput');
const botonSalir = document.getElementById('btn-salir');

const contenedor = document.getElementById('contenedor');
const contenedorCarrito = document.getElementById('carrito');
const mensajeMenoriaEdad = document.getElementById('contenedor-menores');
const formularioCompra = document.getElementById('formulario-compra');




const renderProducts = ( target) => {
    fetch(`./products.json`)
    .then ((response)=> response.json())
    .then((products)=>{
    
    let acumulador = '';
    products.map(product => {
        acumulador += `
        <div class="card m-4" style="width: 25rem;">
            <div class="div-card">
                 
                <img src="${product.imgURL}" class="card-img-top" alt="${product.nombre}">
                <div class="card-body">
            </div>
                <h5 class="card-title">${product.nombre}</h5>
                <p class="card-text">${product.fabricante}</p>
                <p class="card-text">Precio: $${product.precio}\n</p>
                <p class="card-text">${product.descripcion}</p>
                
                
                <button ref=${product.id} class="btn btn-primary button">Añadir al carrito</button>
            </div>
        </div>
        `}
    )
   target.innerHTML = acumulador;
   const buttons = document.querySelectorAll('.button');
   buttons.forEach(button => button.addEventListener('click', handleAgregarCarrito));
})
}

const handleAgregarCarrito =(e) => {
    const id = parseInt(e.target.getAttribute('ref'));
    fetch(`./products.json`)
    .then ((response)=> response.json())
    .then((products)=>{
    const product = products.find(product => product.id === id);
    if(carrito.some(el => el.id === product.id)){
        const position = carrito.findIndex(el => el.id === product.id)
        carrito[position].cantidad = carrito[position].cantidad + 1;
    }else{
        carrito.push({
            id:product.id,
            imgURL: product.imgURL,
            nombre: product.nombre,
            fabricante: product.fabricante,
            precio: product.precio,
            descripcion: "",
            cantidad: 1
     })
     console.log(contenedorCarrito);
    }
    ingresoCarrito(carrito);
    renderProducts(carrito, contenedorCarrito);
    renderCarrito(carrito,contenedorCarrito);
})}
const renderCarrito = (caract, target) => {
    let acumulador = '';
    caract.map(product => {
        acumulador += `
        <div class=" col-4 m-4" style="width: 25rem" ;>
            <div class="card-body m-4">
                <h5 class=" m-2 card-title">${product.nombre}</h5>
                <img src=${product.imgURL} width="100" height="175" class="card-img-top" alt="${product.nombre}">
                <p class="mt-2 card-text"> Cantidad selecionada: ${product.cantidad} </br> Precio: $${product.precio} </br> Precio Total: $${product.precio * product.cantidad}.</p>
                <div class="row justify-content-around">
                    <button ref=${product.id} class="boton_venta BCA btn btn-secondary my-2 col-md-3" id="botonCarritoAgregar" onclick= eliminarProducto("${product.id}",0)> Agregar </button>
                    <button ref=${product.id} class="boton_venta BCQ btn btn-secondary my-2 col-md-3" id="botonCarritoQuitar" onclick= eliminarProducto("${product.id}",1)> Quitar </button>
                </div>
            </div>
        </div>   
        `
    })

    target.innerHTML = acumulador;   

}
const carrito = JSON.parse(localStorage.getItem('carrito')) ||[];

function chequearEdad (edad) {
    console.log(edad)
    if(edad > 17){
       const incluirNombre = () =>{
        nombreUsuario.innerText =( localStorage.getItem('nombre') || '' );
       }
       addEventListener('click' ,incluirNombre)
       botonSalir.innerText ='Salir'

     const buscador = (array, texto) => {
        return array.filter(producto => producto.nombre.toLowerCase().includes(texto.toLowerCase()))
    }
    

    
    const buscar = (e) => {
        e.preventDefault();    
        renderProducts(buscador(products, input.value), contenedor);
    }
    mensajeMenoriaEdad.innerText= '';

    input.addEventListener('input', buscar);
    renderProducts(contenedor);
    renderProducts(carrito, contenedorCarrito);
    renderCarrito(carrito,contenedorCarrito);


}else{

contenedor.innerHTML = '';
contenedorCarrito.innerHTML = '';
mensajeMenoriaEdad.innerText = 'Lo sentimos  ' + (localStorage.getItem('nombre') || '') + ', no podes comprar hasta cumplir 18 años de edad.'
botonSalir.innerText = 'Ingresar'
}
}

function ingresoUsuario () {
    Swal.fire({
        title: 'Bienvenido',
        html: `<input type="text" class="swal2-input name" placeholder="Nombre">
        <input type="text" class="swal2-input anioNacimiento" placeholder="Año de Nacimiento">`,
        confirmButtonText: 'Ingresar',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('.name')
          const anioNacimiento = Swal.getPopup().querySelector('.anioNacimiento')      
          
        localStorage.setItem('nombre', login.value);
        localStorage.setItem('anioNacimiento',anioNacimiento.value);
        chequearEdad(edadMinima(anioNacimiento.value))
    }
    })
}

function handleSalir () {
    localStorage.removeItem('nombre');
    localStorage.removeItem('anioNacimiento');
    ingresoUsuario ()
}

if (edadStorage) {
    chequearEdad(edadMinima(edadStorage));
} else {

    ingresoUsuario()
}

botonSalir.addEventListener('click', handleSalir)

function ingresoCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}