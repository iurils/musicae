let h2 = document.getElementById("teste");
let texto = "Música boa é a música antiga? Nem sempre!";


function digitar (string, element) {
    let escrever = string.split ("").reverse();
    let timmer = setInterval(function () {
        if (!escrever.length) return clearInterval(timmer);
        let prox = escrever.pop();
        element.innerHTML += prox;        
    }, 80)
}

digitar (texto, h2);

