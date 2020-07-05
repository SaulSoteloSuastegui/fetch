//comentario
var arreglo = ['html', 15,true];

console.log(arreglo[1]);

//objeto propiedades nombre valor
var objeto ={
    nombre: 'HTML',
    duracion: 15,
    estado: true
}

console.log(objeto);
console.log(objeto.duracion);


//objeto con metodos
var objeto = {
    nombre: 'HTML',
    duracion: 15,
    estado: true,
    capitulos:{
        nombre:'Introduccion',
        videos:20
    }
}

console.log(objeto.capitulos);
console.log(objeto.capitulos.nombre);

//array de objetos

var arrayObjetos = [
    {
        nombre:'HTML',
        estado:true
    },
    {
        nombre:'CSS',
        estado:true
    },
    {
        nombre:'JS',
        estado:false
    }
]

//console.log(arrayObjetos[1])
//console.log(arrayObjetos[0].nombre)
//console.log(arrayObjetos[1].nombre)

for(let indice of arrayObjetos){
    console.log(indice)
    //console.log(indice.estado)
}

//https://mindicador.cl/api/dolar

var dolar = [{"fecha":"2020-07-03T04:00:00.000Z","valor":803.98},{"fecha":"2020-07-02T04:00:00.000Z","valor":816.29},{"fecha":"2020-07-01T04:00:00.000Z","valor":821.23},{"fecha":"2020-06-30T04:00:00.000Z","valor":816.36},{"fecha":"2020-06-26T04:00:00.000Z","valor":813.25},{"fecha":"2020-06-25T04:00:00.000Z","valor":820.68},{"fecha":"2020-06-24T04:00:00.000Z","valor":817.9},{"fecha":"2020-06-23T04:00:00.000Z","valor":816.02},{"fecha":"2020-06-22T04:00:00.000Z","valor":817.33},{"fecha":"2020-06-19T04:00:00.000Z","valor":812.19},{"fecha":"2020-06-18T04:00:00.000Z","valor":798.53},{"fecha":"2020-06-17T04:00:00.000Z","valor":779.1},{"fecha":"2020-06-16T04:00:00.000Z","valor":796.87},{"fecha":"2020-06-15T04:00:00.000Z","valor":790.73},{"fecha":"2020-06-12T04:00:00.000Z","valor":784.65},{"fecha":"2020-06-11T04:00:00.000Z","valor":767.93},{"fecha":"2020-06-10T04:00:00.000Z","valor":771.96},{"fecha":"2020-06-09T04:00:00.000Z","valor":769.26},{"fecha":"2020-06-08T04:00:00.000Z","valor":764.97},{"fecha":"2020-06-05T04:00:00.000Z","valor":775.58},{"fecha":"2020-06-04T04:00:00.000Z","valor":769.13},{"fecha":"2020-06-03T04:00:00.000Z","valor":782.86},{"fecha":"2020-06-02T04:00:00.000Z","valor":796.46},{"fecha":"2020-06-01T04:00:00.000Z","valor":806.32},{"fecha":"2020-05-29T04:00:00.000Z","valor":812.74},{"fecha":"2020-05-28T04:00:00.000Z","valor":816.47},{"fecha":"2020-05-27T04:00:00.000Z","valor":802.1},{"fecha":"2020-05-26T04:00:00.000Z","valor":803.74},{"fecha":"2020-05-25T04:00:00.000Z","valor":805.75},{"fecha":"2020-05-22T04:00:00.000Z","valor":806.17},{"fecha":"2020-05-20T04:00:00.000Z","valor":819.08}]


for(let i of dolar){
    //console.log(i)
    console.log(i.valor)
}

