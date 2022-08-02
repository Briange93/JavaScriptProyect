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
const carrito = JSON.parse(localStorage.getItem('carrito')) ||[];
const contenedor = document.getElementById('contenedor');
const contenedorCarrito = document.getElementById('carrito');
const mensajeMenoriaEdad = document.getElementById('contenedor-menores')
;



const renderProducts = ( target) => {
    fetch(`./products.json`)
    .then ((response)=> response.json())
    .then((products)=>{
    
    let acumulador = '';
    products.map(product => {
        acumulador += `
        <div class="card m-4" style="width: 25rem;">
            <div class="div-card">
                <button type="button" class="btn-close btn-cerrar" aria-label="Close"></button> 
                <img src="${product.imgURL}" class="card-img-top" alt="${product.nombre}">
                <div class="card-body">
            </div>
                <h5 class="card-title">${product.nombre}</h5>
                <p class="card-text">${product.fabricante}</p>
                <p class="card-text">Precio: $${product.precio}\n</p>
                <p class="card-text">${product.descripcion}</p>
                
                
                <button href=${product.id} class="btn btn-primary button">Añadir al carrito</button>
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
    const id = parseInt(e.target.getAttribute('href'));
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
            cantidad: product.cantidad
     })
     console.log(carrito, contenedorCarrito);
    }
    //Se utiliza localStorage y JSON para guardar los productos en el carrito aun dsps de actualizar la pagina
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    renderProducts(carrito, contenedorCarrito);
})}


function chequearEdad (edad) {
    console.log(edad)
    if(edad > 17){
       const incluirNombre = () =>{
        nombreUsuario.innerText = 'Bienvenido ' + ( localStorage.getItem('nombre') || 'Extraño' );
       }
       addEventListener('click' ,incluirNombre)
       botonSalir.innerText ='Salir'

     const buscador = (array, texto) => {
        return array.filter(producto => producto.nombre.toLowerCase().includes(texto.toLowerCase()))
    }
//    const form = document.getElementById('form');

    
    const buscar = (e) => {
        e.preventDefault();    
        renderProducts(buscador(products, input.value), contenedor);
    }
    mensajeMenoriaEdad.innerText= '';

    input.addEventListener('input', buscar);
    renderProducts(contenedor);
    renderProducts(carrito, contenedorCarrito);


}else{

contenedor.innerHTML = '';
contenedorCarrito.innerHTML = '';
mensajeMenoriaEdad.innerText = 'Lo sentimos  ' + (localStorage.getItem('nombre') || 'Extraño') + ', no podes comprar hasta cumplir 18 años de edad.'
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
// SweetAlert completamente funcional
    ingresoUsuario()
}

botonSalir.addEventListener('click', handleSalir)

/*class ProductoCarrito{
    constructor(...products){
        this.imagen = products.imgURL;
        this.nombre = products.nombre;
        this.precio = products.precio;
        this.cantidad = products.cantidad;
    }
}
const productoElegido = new ProductoCarrito(products.imagen, products.nombre, products.precio, products.cantidad);
carrito.push(productoElegido)*/