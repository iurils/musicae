let titulo =  document.getElementById("titulo");

function digitar(){
titulo.innerHTML = "Nem sempre!";
}
function aparecer(){
    digitar()
    titulo.style.transform = "translateX(0)"
}
aparecer()