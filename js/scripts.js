

/* Inseriamo le singole img in delle variabili con un template Literl con il quale 
integriamo la variabile della classe */

const img1 =  document.querySelector('.canvas').innerHTML = `
<img src="img/01.webp" alt="Spiderman">
`;

const img2 =  document.querySelector('.canvas').innerHTML = `
<img src="img/02.webp" alt="Ratchet&Clanck">
`;

const img3 =  document.querySelector('.canvas').innerHTML = `
<img src="img/03.webp" alt="Fortnite">
`;

const img4 =  document.querySelector('.canvas').innerHTML = `
<img src="img/04.webp" alt="Stray">
`;

const img5 =  document.querySelector('.canvas').innerHTML = `
<img src="img/05.webp" alt="Avengers">
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


// associamo una variabile ai bottoni
const buttonRight = document.getElementById('button-right');
const buttonLeft = document.getElementById('button-left');



buttonRight.addEventListener('click', function(){

      
    if (counter < imgList.length -1){

        counter += 1;

        console.log(counter);

        document.querySelector('.canvas').innerHTML = imgList[counter];
    }
    
    else if (counter == imgList.length -1){

        counter = 0

         document.querySelector('.canvas').innerHTML = imgList[counter];

     }
    

})


buttonLeft.addEventListener('click', function(){
    
    
        if ((counter !== imgList.length) && (counter !== 0)){

            counter -= 1
            console.log(counter)

            document.querySelector('.canvas').innerHTML = (imgList[counter])

        }else {

            counter += imgList.length - 1 
    
             document.querySelector('.canvas').innerHTML = imgList[counter];
    
         }

    
})






