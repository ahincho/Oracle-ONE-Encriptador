
// Funcion que recupera el texto ingresado como input
function encriptar() {
    let inputText = document.getElementById("input").value;
    let encripted = encriptarCadena(inputText);
    document.getElementById("output").value = encripted;
}
// Funcion que recupera el texto ingresado como output
function desencriptar() {
    let outputText = document.getElementById("output").value;
    let desencripted = desencriptarCadena(outputText);
    document.getElementById("input").value = desencripted;
}
// Funcion que encripta los mensajes enviados
function encriptarCadena(inputText) {
    let encriptedText = inputText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    return encriptedText;
}
// Funcion que desencripta los mensajes enviados 
function desencriptarCadena(outputText) {
    let desencriptedText = outputText.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    return desencriptedText;
}
// Funcion que recupera el texto del output y lo guarda en el clipboard
function copiarClipboard() {
    let outputText = document.getElementById("output").value;
    navigator.clipboard.writeText(outputText);
}