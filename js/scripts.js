// associamo una variabile ai bottoni
const buttonRight = document.getElementById('button-right');
const buttonLeft = document.getElementById('button-left');


// associamo una variabile 'let' alla classe hidden
let activeSwitch = 'class="hidden"'

/* Inseriamo le singole img in delle variabili con un template Literl con il quale 
integriamo la variabile della classe */

const img1 =  document.querySelector('.canvas').innerHTML = `
<img src="img/01.webp" alt="Spiderman" ${activeSwitch}>
`;

const img2 =  document.querySelector('.canvas').innerHTML = `
<img src="img/02.webp" alt="Ratchet&Clanck" ${activeSwitch}>
`;

const img3 =  document.querySelector('.canvas').innerHTML = `
<img src="img/03.webp" alt="Fortnite" ${activeSwitch}>
`;

const img4 =  document.querySelector('.canvas').innerHTML = `
<img src="img/04.webp" alt="Stray" ${activeSwitch}>
`;

const img5 =  document.querySelector('.canvas').innerHTML = `
<img src="img/05.webp" alt="Avengers" ${activeSwitch}>
`;


// array delle img da inserire, posta in variabili
const imgList = [ `
     ${img1} 
     ${img2} 
     ${img3}  
     ${img4} 
     ${img5}
     ` ]


// document.querySelector('.canvas').innerHTML = imgList; 
// debug per visualizzare tutte le img nel DOM




// aggiungiamo l'evento di ascolto al button per andare avanti
buttonRight.addEventListener('click', function(ev){


    // sviluppiamo un ciclo for che riconosce gli indici dell'array

    for(i = 0; i < imgList.length; i++ ){

        if(?){
            activeSwitch = 'class="active"'
        }

    }

})








buttonLeft.addEventListener('click' , function(){

})
