const boton = document.querySelector('#btn--enviar');
const name = document.querySelector('#input--name');
const email = document.querySelector('#input--email') 
const respName = document.querySelector('#resp-name')
const respEmail = document.querySelector('#resp-email')

boton.addEventListener('click', (e) =>{
    
    if(name.value == '' ){
        e.preventDefault();
       respName.innerText= 'Ingresa un Nombre';

    }if( email.value == ''){
        e.preventDefault();
        respEmail.innerText='ingresa un Email';
    }
})