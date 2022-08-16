

function edadMinima (nacimiento) {
    const anio = 2022 ;
    const edadUsuario = anio - nacimiento ;
    return edadUsuario;    
}

    
const edadStorage = localStorage.getItem('anioNacimiento');
const nombreUsuario = document.getElementById('nombre-usuario');
const anioNacimiento =localStorage.getItem('añoNacimiento');
const searchInput = document.getElementById('searchInput');
const botonSalir = document.getElementById('btn-salir');
const contenedor = document.getElementById('contenedor');
const contenedorCarrito = document.getElementById('carrito');
const mensajeMenoriaEdad = document.getElementById('contenedor-menores');
const confirmaCompra = document.getElementById('confirmar-compra');
const input = document.getElementById('input-form');
const botonComprar = document.getElementById('btn-comprar');
const carrito = JSON.parse(localStorage.getItem('carrito')) ||[];




const renderProducts = ( target) => {
    fetch(`./products.json`)
    .then ((response)=> response.json())
    .then((respuesta)=>{
    let products = respuesta;
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
    validoCarrito();
})}

const renderCarrito = (caract, target) => {
    let acumulador = '';
    caract.map(product => {
        acumulador += `
        <div class=" col-4 m-4" style="width: 25rem" ;>
            <div class="card-body m-4">
                <h5 class=" m-2 card-title">${product.nombre}</h5>
                <img src=${product.imgURL} width="100" height="175" class="card-img-top" alt="${product.nombre}">
                <p class="mt-2 card-text" id="subtotales"> Cantidad selecionada: ${product.cantidad} </br> Precio: $${product.precio} </br> Sub Total: $${product.precio * product.cantidad}.</p>
                <div class="row justify-content-around">
                    <button ref=${product.id} class=" btn button  btn-secondary  my-2 col-md-3">Añadir al carrito</button>
                    <button ref=${product.id} class=" BCQ btn btn-secondary my-2 col-md-3" id="botonCarritoQuitar" onclick= eliminarProducto("${product.id}",1)> Quitar </button>
                </div>
            </div>
        </div>   
        `
    })

    target.innerHTML = acumulador;   

}


function chequearEdad (edad) {
    console.log(edad)
    if(edad > 17){
       const incluirNombre = () =>{
        nombreUsuario.innerText =( localStorage.getItem('nombre') || '' );
       }
       addEventListener('click' ,incluirNombre)
       botonSalir.innerText ='Salir'

    
    
    mensajeMenoriaEdad.innerText= '';

    
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
const buscador = (array, texto) => {
    
    return array.filter(products => products.nombre.toLowerCase().includes(texto.toLowerCase()))
    
}

const buscar = (e) => {
    e.preventDefault();    
    renderProducts(buscador(products, searchInput.value), contenedor);
   
}
searchInput.addEventListener(searchInput, buscar);

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
function eliminarProducto(id, condicion){
    let productoCarrito = carrito;
    let posicionEliminar = productoCarrito.findIndex(productoCarrito => productoCarrito.id== id);
   if (condicion == 1 ){

        productoCarrito[posicionEliminar].cantidad -=1;}
    if (productoCarrito[posicionEliminar].cantidad == 0){
            productoCarrito.splice(posicionEliminar,1);
        }
    ingresoCarrito(productoCarrito);       
    renderCarrito(carrito, contenedorCarrito);
    validoCarrito();
  
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

const compraConfirmada = () =>{
    if (input.value){
        Swal.fire({
            icon: 'success',
            title: 'Gracias por tu compra!',
            text: 'Todos los detalles de tu compra seran enviados via Email.',
            
          })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Regresa!',
            text: 'Te faltan completar algunos campos obligatorios',
          })
    }
}
confirmaCompra.addEventListener('click', compraConfirmada);

function validoCarrito() {
    if (carrito == ''){
        botonComprar.disabled = true;
    }else{
        botonComprar.disabled = false;
    }
    }
 
    validoCarrito();