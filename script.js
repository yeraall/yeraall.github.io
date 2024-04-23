let botones_aceptar = document.querySelectorAll("#aceptar_boton");
let botones_rechazar = document.querySelectorAll("#rechazar_boton");
let contador1 = document.querySelector("#contador1")
let contador2 = document.querySelector("#contador2")
botones_aceptar.forEach(function(node){
    node.addEventListener("click", function(){
        node.parentElement.parentElement.remove(); 
        let numero = Number(contador1.innerHTML);
        numero--;
        contador1.innerHTML = numero;
        
        let num = Number(contador2.innerHTML);
        num++;
        contador2.innerHTML = num;

    });
});
botones_rechazar.forEach(function(node){
    node.addEventListener("click", function(){
        node.parentElement.parentElement.remove();   
        let numero = Number(contador1.innerHTML);
        numero--;
        contador1.innerHTML = numero;

    });
});
var botonCerrar = document.getElementById("iniciar");
botonCerrar.addEventListener("click", function() {
    this.innerText = "Iniciar sesion";
});
var botonCambiar = document.getElementById("cambiar_nombre");
botonCambiar.addEventListener("click", function() {
    document.getElementById("nombreReal").innerText = "Bastian Cardenas";
});

