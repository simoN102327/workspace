function positivo(){
    const numero = document.getElementById("numero");
    numero = parseInt(numero.value);

    if(numeroInt>=0){
         alert("el numero es positivo");
    }else{
        alert("el numero es negativo")

    }
        
    
}

function esPar(){
    const numero = document.getElementById("par")
    const numeroInt = parseInt(numero.value);

    if(numeroInt %2 == 0){
        alert("el numero es par");
    }else{
        alert("el numero es impar");
    }

}

