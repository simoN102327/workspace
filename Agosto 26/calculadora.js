function suma() {
    const elemento1 = document.getElementById("Suma1");
    const elemento2 = document.getElementById("Suma2");
    const Resultado = document.getElementById("Resultadosuma");
    Resultado.innerHTML = parseInt(elemento1.value) + parseInt(elemento2.value);
}
function Multiplicacion() {
    const elemento1 = document.getElementById("Multiplicacion1");
    const elemento2 = document.getElementById("Multiplicacion2");
    const Resultado = document.getElementById("Resultadomultiplicación");
    Resultado.innerHTML = parseInt(elemento1.value) * parseInt(elemento2.value);
}
function division() {
    const elemento1 = document.getElementById("divicion1");
    const elemento2 = document.getElementById("divicion2");
    const Resultado = document.getElementById("Resultadodivicion");
    Resultado.innerHTML = parseInt(elemento1.value) * parseInt(elemento2.value);
}
function resta() {
    const elemento1 = document.getElementById("resta1");
    const elemento2 = document.getElementById("resta2");
    const Resultado = document.getElementById("Resultadoresta");
    Resultado.innerHTML = parseInt(elemento1.value) * parseInt(elemento2.value);
}