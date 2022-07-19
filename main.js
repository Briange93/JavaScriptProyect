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
    localStorage.setItem('añoNacimiento',anioNacimiento.value);}})
    
    const nombreUsuario = document.getElementById('nombre-usuario');
    const anioNacimiento =localStorage.getItem('anioNacimiento');
  
  
    function edadMinima(){
        const anio = 2022 ;
        const edadUsuario = anio - anioNacimiento ;
        return edadUsuario;    
    }
    
    let edad = edadMinima()
    console.log(edad);
    if(edad > 17){
       const incluirNombre = () =>{
        nombreUsuario.innerText = 'Bienvenido ' +( localStorage.getItem('nombre') || 'Extraño' );
       }
       addEventListener('click' ,incluirNombre)
            

const products = [

    {
        id:1, 
        nombre:'Mod Aegis Solo',
        potencia: '100w',
        precio: 14500,
        fabricante: 'GeekVape',
        descripcion:'Aegis Solo 100W de Geekvape es el mod más resistente, preparado para sobrevivir a agua, polvo, arena y golpes. Además de una gran potencia con tan solo una batería de 18650 (no incluida) que llega a 100W. Además incluye el AS-100 Chipset que le proporciona estabilidad y alto rendimiento.',
        imgURL:'https://ss-static-01.esmsv.com/id/110613/productos/obtenerimagen/?id=814&useDensity=true&width=1280&height=913&tipoEscala=contain', 
        cantidad:0,
    },

    {
        id:2, 
        nombre:' Mod Grus 100w',
        potencia: '100w',
        precio: 13000,
        fabricante: 'LostVape',
        descripcion:'Lost Vape Grus 100w fabricado con material de aleación de zinc, es impresionantemente fuerte y duradero, necesita una sola batería (no incluida) 21700/20700/18650 con un adaptador en el paquete y la potencia máxima es de 100w. Con puerto de carga DC 5V tipo C, integra atomizadores de hasta 30mm pantalla TFT a color de 0.96 pulgadas, con un chip propietario de Lost Vape, high end a precio low cost.',
        imgURL: 'https://ss-static-01.esmsv.com/id/110613/productos/obtenerimagen/?id=818&useDensity=false&width=1280&height=720&tipoEscala=contain',
        cantidad:0,
    }, 

    {
        id:3, 
        nombre:'Mod Mdura Pro',
        potencia: '230w',
        precio: 16000,
        fabricante: 'Wotofo',
        descripcion:'Wotofo MDura Pro Mod está fabricado con aleación de zinc y caucho duradero, resistente al agua, al polvo y a los golpes. Wotofo MDura Pro 230W Mod funciona con 2 baterías 18650 (No Incluidas) con una salida máxima de 230W. Wotofo MDura Pro Mod cuenta con nexCHIP con la tecnología más avanzada del mercado y pantalla TFT de 1.2 pulgadas, Potente modo VW emparejado con el modo TCR.',
        imgURL:'https://ss-static-01.esmsv.com/id/110613/productos/obtenerimagen/?id=870&useDensity=false&width=1280&height=720&tipoEscala=contain',
        cantidad:0,
    },

    {
        id:4,
        nombre:'Pearless 24mm' ,
        tipo: 'RDA',
        precio: 4900 ,
        fabricante:'GeekVape' ,
        descripcion:'El GeekVape Peerless RDA es un atomizador de dripeo en seco con un deck reconstruible diseñado para soportar configuraciones de resistencias simples y más complejas, single coil y dual coil.', 
        imgURL:'https://ss-static-01.esmsv.com/id/110613/productos/obtenerimagen/?id=211&useDensity=false&width=1280&height=720&tipoEscala=contain'    ,
        cantidad:0,
    },

    {
        id:5,
        nombre:'Eclipse 24mm' ,
        tipo: 'RTA',
        precio: 9500 ,
        fabricante:'YachtVape' ,
        descripcion: 'Yachtvape Eclipse RTA es una colaboración entre Mike Vapes y YachtVape. Yachtvape Eclipse presenta un deck de estilo recurvo sin postes de 4 ranuras para soportar resistencias en sentido contrario a las agujas del reloj y en el sentido de las agujas del reloj',
        imgURL:'https://ss-static-01.esmsv.com/id/110613/productos/obtenerimagen/?id=1020&useDensity=false&width=1280&height=720&tipoEscala=contain',
        cantidad:0,
    },

    {
        id:6,
        nombre:'Helheim S' ,
        tipo: 'RDTA',
        precio: 11000 ,
        fabricante:'HellVape' , 
        descripcion:'Hellvape Helheim S RDTA está diseñado para vapeo DL y DTL, single coil en deck sin postes. El diseño visualmente impresionante es que su sistema de flujo de aire de panal dual, que permite tres tipos de flujo de aire, incluido el flujo de aire inferior.',
        imgURL: 'https://ss-static-01.esmsv.com/id/110613/productos/obtenerimagen/?id=1040&useDensity=false&width=1280&height=720&tipoEscala=contain'    ,
        cantidad:0,
    },

    {
        id:7,
        nombre:'LG Genuine' ,
        capacidad: '20A',
        precio: 2400 ,
        fabricante:'LG' ,
        imgURL: 'https://ss-static-01.esmsv.com/id/110613/productos/obtenerimagen/?id=331&useDensity=false&width=1280&height=720&tipoEscala=contain',
        cantidad:0,
    },


    {
        id:8,
        nombre:'Sony VTC5' ,
        capacidad: '35A',
        precio: 2700 ,
        fabricante:'Sony' ,
        imgURL: 'https://ss-static-01.esmsv.com/id/110613/productos/obtenerimagen/?id=886&useDensity=false&width=1280&height=720&tipoEscala=contain'    ,
        cantidad:0,
    },

    {
        id:9,
        nombre:'Samsung 30T' ,
        capacidad: '30A',
        precio: 2900 ,
        fabricante:'Samsung' ,
        imgURL: 'https://ss-static-01.esmsv.com/id/110613/productos/obtenerimagen/?id=918&useDensity=false&width=1280&height=720&tipoEscala=contain',
        cantidad:0,
    },
] 


const carrito = JSON.parse(localStorage.getItem('carrito')) ||[];
const contenedor = document.getElementById('contenedor');
const contenedorCarrito = document.getElementById('carrito');

const renderProducts = (products, target) => {
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
                <p class="card-text">Cantidad: ${product.cantidad}</p>
                
                <button href=${product.id} class="btn btn-primary button">Añadir al carrito</button>
            </div>
        </div>
        `}
    )
   target.innerHTML = acumulador;
   const buttons = document.querySelectorAll('.button');
   buttons.forEach(button => button.addEventListener('click', handleClick));
}

const handleClick =(e) => {
    const id = parseInt(e.target.getAttribute('href'));
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
     })
     console.log(carrito, contenedorCarrito);
    }
    //Se utiliza localStorage y JSON para guardar los productos en el carrito aun dsps de actualizar la pagina
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    renderProducts(carrito, contenedorCarrito);
    }
     const buscador = (array, texto) => {
        return array.filter(producto => producto.nombre.toLowerCase().includes(texto.toLowerCase()))
    }
   const form = document.getElementById('form');
    const input = document.getElementById('searchInput');
    
    const buscar = (e) => {
        e.preventDefault();
    
        renderProducts(buscador(products, input.value), contenedor);
    }
    
    input.addEventListener('input', buscar);
    renderProducts(products, contenedor);
    renderProducts(carrito, contenedorCarrito);

}else{
const mensajeMenoriaEdad = document.getElementById('contenedor-menores');
mensajeMenoriaEdad.innerText = 'Lo sentimos  ' + (localStorage.getItem('nombre') || 'Extraño') + ', no podes comprar hasta cumplir 18 años de edad.'
}




