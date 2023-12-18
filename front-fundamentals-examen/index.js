function aumentar(elemento){
    elemento.innerText ++;
}
function eliminar(elemnto){
    let suscribe = document.querySelector('.nevermiss')
    suscribe.remove()
}
function finalalert (){
    alert("The ninjas have won")
}
setTimeout(finalalert , 13000);