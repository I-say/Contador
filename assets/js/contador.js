// Necesito que este contador haga 3 cosas
// Incremente de uno en uno
// Decremente de uno en un
// Borre toda la cuenta
// Necesitamos iniciar en 0

var valorContador = 0; //Iniciamos nuestra variable en 0

function incrementar(){
    valorContador++; //incrementar de 1 en 1
    document.getElementById("contador").innerHTML = valorContador;
}

function decrementar(){
    valorContador--; //decrementa de 1 en 1
    document.getElementById("contador").innerHTML = valorContador;
}

function resetear(){
    valorContador = 0;
    document.getElementById("contador").innerHTML = valorContador;
}