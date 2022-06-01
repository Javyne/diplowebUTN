
//Función para cambiar de color el body y los bordes de los cuadros, segun el color del body
//si el body es negro los bordes son blancos, caso contrario los bordes son negros
function cambioColorBody(color){
    document.getElementById("body").style.backgroundColor = color;
    
    
    if (color == "black"){
        cambioColorBordesCuadrados("white");
    }
    else{
        cambioColorBordesCuadrados("black");
    };
};

function cambioColorBordesCuadrados(color){

    var elementos = document.getElementsByClassName("cuadrado");

    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.border = "2px solid " + color;
    };

};