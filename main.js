//let nombre = prompt('Ingrese su nombre')
//let apellido = prompt('Ingrese su apellido')
//let output =  'Bienvenido' + ' ' + nombre + ' ' + apellido;

//alert  (output)
//console.log(output);


function edadMinima(){
    const anio = 2022 ;
    const edadUsuario = anio - anioNacimientoUsuario ;
    return edadUsuario;    
}

const nombreUsuario = prompt("¿Cual es tu nombre?");
let anioNacimientoUsuario = parseInt(prompt("¿En que año naciste?"));
const edadUsuario = edadMinima.edadUsuario;

let edad = edadMinima()
if(edad > 17){
alert(`Bienvenido ${nombreUsuario}, tenes ${edad} años`)

console.log(`Bienvenido ${nombreUsuario}, tenes ${edadUsuario} años`);


const mods = [

 {
    id:1, 
    nombre:'Mod Aegis Solo',
    potencia: '100w',
    precio: 14500,
    fabricante: 'GeekVape',
    descripcion:'Aegis Solo 100W de Geekvape es el mod más resistente, preparado para sobrevivir a agua, polvo, arena y golpes. Además de una gran potencia con tan solo una batería de 18650 (no incluida) que llega a 100W. Además incluye el AS-100 Chipset que le proporciona estabilidad y alto rendimiento.'
},

{
    id:2, 
    nombre:'Mod Grus 100w',
    potencia: '100w',
    precio: 13000,
    fabricante: 'LostVape',
    descripcion:'Lost Vape Grus 100w fabricado con material de aleación de zinc, es impresionantemente fuerte y duradero, necesita una sola batería (no incluida) 21700/20700/18650 con un adaptador en el paquete y la potencia máxima es de 100w. Con puerto de carga DC 5V tipo C, integra atomizadores de hasta 30mm pantalla TFT a color de 0.96 pulgadas, con un chip propietario de Lost Vape, high end a precio low cost.'
}, 

{
    id:3, 
    nombre:'Mod Mdura Pro',
    potencia: '230w',
    precio: 16000,
    fabricante: 'Wotofo',
    descripcion:'Wotofo MDura Pro Mod está fabricado con aleación de zinc y caucho duradero, resistente al agua, al polvo y a los golpes. Wotofo MDura Pro 230W Mod funciona con 2 baterías 18650 (No Incluidas) con una salida máxima de 230W. Wotofo MDura Pro Mod cuenta con nexCHIP con la tecnología más avanzada del mercado y pantalla TFT de 1.2 pulgadas, Potente modo VW emparejado con el modo TCR.'
},
]

const atomizers = [
    {
        id:1,
        nombre:'Pearless 24mm' ,
        tipo: 'RDA',
        precio: 4900 ,
        fabricante:'GeekVape' ,
        descripcion:'El GeekVape Peerless RDA es un atomizador de dripeo en seco con un deck reconstruible diseñado para soportar configuraciones de resistencias simples y más complejas, single coil y dual coil. El Peerless RDA presenta unos postes separados por un puente deja crea una cámara abierta para trabajar cómodamente y para que el líquido fluya sin problema. Los huecos adicionales en los postes permiten tener un amplio rango de formas para construir las resistencias más grandes o más pequeñas. También incluye un sistema de flujo de aire ajustable de 9 huecos para la personalización a gusto del usuario.' 
        },


    {
        id:2,
        nombre:'Eclipse 24mm' ,
        tipo: 'RTA',
        precio: 9500 ,
        fabricante:'YachtVape' ,
        descripcion: 'Yachtvape Eclipse RTA es una colaboración entre Mike Vapes y YachtVape. Yachtvape Eclipse presenta un deck de estilo recurvo sin postes de 4 ranuras para soportar resistencias en sentido contrario a las agujas del reloj y en el sentido de las agujas del reloj y una estructura de entrada de panal súper profunda para un mejor sabor. Yachtvape Eclipse RTA tiene vidrio recto de 2 ml y vidrio burbuja de 3,5 ml con diseño de llenado superior.'
    },

    {
        id:3,
        nombre:'Helheim S' ,
        tipo: 'RDTA',
        precio: 11000 ,
        fabricante:'HellVape' , 
        descripcion:'Hellvape Helheim S RDTA está diseñado para vapeo DL y DTL, single coil en deck sin postes. El diseño visualmente impresionante es que su sistema de flujo de aire de panal dual, que permite tres tipos de flujo de aire, incluido el flujo de aire inferior, el flujo de aire lateral y el flujo de aire inferior + lateral, utiliza 4 mechas de acero inoxidable (SS316) y que utiliza un sistema de capilaridad para que el liquido suba de forma automática y uniforme.'
        },
]

const batterys = [
    {
        id:1,
        nombre:'LG Genuine' ,
        capacidad: '20A',
        precio: 2400 ,
        fabricante:'LG' ,
        
        },


    {
        id:2,
        nombre:'Sony VTC5' ,
        capacidad: '35A',
        precio: 2700 ,
        fabricante:'Sony' ,
        },

    {
        id:3,
        nombre:'Samsung 30T' ,
        capacidad: '30A',
        precio: 2900 ,
        fabricante:'Samsung' ,
        },
] 

let producto = parseInt(prompt('¿que estas buscando?\n 1. Mods \n 2. Atomizadores \n 3. Baterias. '));
if( producto == 1){
    let message = 'Selecciona el mod que deseas ver'
mods.forEach(mod => message += `\n${mod.id}.- ${mod.nombre}`);

let modsIds = mods.map(mod => mod.id)
let modId = parseInt(prompt(message));

}
else if(producto == 2){
    let message = 'Selecciona el atomizador que deseas ver'
atomizers.forEach(atomizers => message += `\n${atomizers.id}.- ${atomizers.nombre}`);
let atoIds = atomizers.map(ato => ato.id)
let atoId = parseInt(prompt(message));
switch(message){
    case 1:
    
        alert( atoId.toSource());

}
}
else if(producto == 3){
    let message = 'Selecciona la bateria que deseas ver'
batterys.forEach(batterys => message += `\n${batterys.id}.- ${batterys.nombre}`);

let battIds = batterys.map(batt => batt.id)
let atoId = parseInt(prompt(message));
}else if (producto !== 1, 2,3){
    alert('La opcion ingresada no es valida')
}



}else{
    alert(`${nombreUsuario}, tenes ${edad} años , no podes comprar hasta que tengas 18 años`)
}




 
