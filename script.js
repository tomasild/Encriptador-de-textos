var inputTexto = document.querySelector(".input-texto");
var mensaje = document.querySelector(".mensaje");
var botonCopiar = document.querySelector(".copiar");

// -----------------------------------------------------------------------------------------------------

function botonEncriptar(){
   var textoEncriptado = encriptar(inputTexto.value);
   mensaje.value = textoEncriptado;
   mensaje.style.backgroundImage = "none";
   inputTexto.value = "";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

// -----------------------------------------------------------------------------------------------------

function botonDesencriptar(){
    var textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

// -----------------------------------------------------------------------------------------------------

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}