const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = Encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    mensaje.style.backgroundImage = "none"
}

function Encriptar(stringEncriptada){
    let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada

}

function btnDesencriptar(){
    const textoEncriptado = Desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    
}

function Desencriptar(stringDesencriptada){
    let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada

}

const textoCopiar = document.getElementById("textoCopiar");
const botonCopiar = document.getElementById("botonCopiar");

// Función para copiar el texto al portapapeles
function copiarTexto() {
    // Selecciona el contenido del textarea
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");

    // Muestra una alerta o un mensaje de confirmación
    alert("Texto copiado: " + textoCopiar.value);
}

// Asocia la función copiarTexto al evento click del botón
botonCopiar.addEventListener("click", copiarTexto);

