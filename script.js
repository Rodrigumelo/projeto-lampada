const turnOn = document.getElementById ( 'lampOn' );
const turnOff = document.getElementById ( 'lampOff' );
const lamp = document.getElementById ( 'lamp' );

function lampadaQuebrada() {
    return lamp.src.indexOf('quebrada') > -1
}

function ligada() {
    if(!lampadaQuebrada()){
        lamp.src = 'imagem/ligada.jpg';
    }
}

function desligar() {
    if(!lampadaQuebrada()){
        lamp.src = 'imagem/desligada.jpg';
    }
}

function quebrada() {
    lamp.src = 'imagem/quebrada.jpg';
}

lampOn.addEventListener('click', ligada);
lampOff.addEventListener('click', desligar);
lamp.addEventListener('mouseover', ligada);
lamp.addEventListener('mouseleave', desligar);
lamp.addEventListener('dblclick', quebrada);