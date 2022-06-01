var caracteres = document.getElementById("textarea")

//Listener sobre el textarea, cada vez que se pulsa una tecla cuenta los caracteres y los agrega al DOM
caracteres.addEventListener('keydown', function(){

    document.getElementById("nroCaracteres").innerText = "Cantidad caracteres: " + caracteres.value.length;
    }
);
