




// dichiariamo una variabile 'let' indirizzata alla classe delle img

let activeSwitch

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
const imgList = [ 
     ` ${img1} ` ,
     ` ${img2} ` ,
     ` ${img3} ` ,
     ` ${img4} ` ,
     ` ${img5} ` 
      ]

     
document.querySelector('.canvas').innerHTML = (imgList[0])


let counter = 0
let i

// associamo una variabile ai bottoni
const buttonRight = document.getElementById('button-right');
const buttonLeft = document.getElementById('button-left');

    


buttonRight.addEventListener('click', function(){

    counter += 1 ;
    console.log(counter)

    for ( i = 0; i < imgList.length; i++){
        
        if (counter == i){

            document.querySelector('.canvas').innerHTML = (imgList[i])

        }

    }

})


buttonLeft.addEventListener('click', function(){
    
    counter -= 1 
    console.log(counter)

    for (i = imgList.length - 1 ; i >= 0; i--){
        
        if (counter == i){

            document.querySelector('.canvas').innerHTML = (imgList[i])

        }

    }

})







