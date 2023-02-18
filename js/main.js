const subtrair = document.getElementById('subtrair');
const somar = document.getElementById('somar');
const braco = document.getElementById('braco');
//array dos controles
const controle = document.querySelectorAll('.controle-ajuste');


controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent);
    } )
})

// event listeners com funçoes manipulaDados
// somar.addEventListener('click' , () => {manipulaDados('somar')});
// subtrair.addEventListener('click' , () => {manipulaDados("subtrair")});

function manipulaDados(operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1;
    }
    else {
        braco.value = parseInt(braco.value) + 1;
    }
}