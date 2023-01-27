let boutonMenu = document.getElementById('btn-menu');

let menuWrapper = document.getElementById('menu-wrapper');

boutonMenu.addEventListener('click', function(){

    menuWrapper.classList.toggle('opened');
});

/*--------------------------------------------------------------------*/
function tester(){
    let inputUn=document.getElementById('inputUn');

    let formNom=document.getElementById('nom');

    let attention=document.createElement('p');

    attention.innerText='Les lettres anonymes c\'est mal !';

    
    if(formNom.value=="" ||  /^[0-9]/.test(formNom.value)){
    inputUn.appendChild(attention);}

/*--------------------------------------------------------------------*/ 

    let email = document.getElementById('email');

    let inputDeux = document.getElementById('inputDeux');


    let attentionDeux = document.createElement('p');
    attentionDeux.innerText = 'Et comment on fait pour vous spammer?'


    if(email.value == ""){
        inputDeux.appendChild(attentionDeux);
    }

/*-------------------------------------------------------------------*/

    let textArea = document.getElementById('textArea');
    let attentionTrois = document.createElement('p');
    attentionTrois.innerText = 'Non mais allô quoi, tu nous écris et tu nous écris rien?';
    let inputTrois = document.getElementById('inputTrois');

    if(textArea.value == ""){
        inputTrois.appendChild(attentionTrois);
    }
    

}



