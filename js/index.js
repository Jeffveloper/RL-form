// console.log('esta conectado');
document.addEventListener('DOMContentLoaded', function (){
    inicarApp();
});

function inicarApp() {
    mostrarNotificacion();
}
function verificarCampos(){


}

function mostrarNotificacion() {
    
    const boton = document.querySelector('#submit');
    const campo1 = document.querySelector('#name');
    const campo2 = document.querySelector('#email');
    const campo3 = document.querySelector('#number-label');
    const campo4 = document.querySelector('#dropdown');
    const campo5 = document.querySelector('#most-like');
    
    boton.addEventListener('click', e =>{
        
        if(campo1.value !== '' && campo2.value !== '' && campo3.value !== '' && campo4.value !== '' && campo5.value !== ''){
            // console.log('todo bien');
            const primerElemento = document.querySelector('.cont')
        
            // crear texto
            const textoNotif = document.createElement('IMG');
            textoNotif.classList.add('notif-img');
            textoNotif.src = '/img/check.svg';
            
            // crear contendedor
            const divNotif = document.createElement('DIV');
            divNotif.classList.add('cont-notif');
            
            // juntarlos
            divNotif.appendChild(textoNotif);
            
            // agregarlo al dom
            // document.querySelector('body').appendChild(divNotif);
            primerElemento.insertBefore(divNotif, primerElemento.firstChild);
            
            moverAlTope();
        }
        
    })
}
function moverAlTope(){
    $('html, body').animate({scrollTop:0}, 'slow');
}