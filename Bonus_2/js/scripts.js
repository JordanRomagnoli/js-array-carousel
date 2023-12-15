

/* Inseriamo le singole img in delle variabili con un template Literl con il quale 
integriamo la variabile della classe */

const img1 =`
<img src="img/01.webp" alt="Spiderman">
`;

const img2 =`
<img src="img/02.webp" alt="Ratchet&Clanck">
`;

const img3 =`
<img src="img/03.webp" alt="Fortnite">
`;

const img4 =`
<img src="img/04.webp" alt="Stray">
`;

const img5 =`
<img src="img/05.webp" alt="Avengers">
`;


// array delle img da inserire, posta in variabili
const imgList = [`${img1}`,`${img2}`,`${img3}`,`${img4}`,`${img5}`];


//-------------------------------------------------------------------------------


let thumbnailImg1 = document.createElement('img');
thumbnailImg1.src = 'img/01.webp';

let thumbnailImg2 = document.createElement('img');
thumbnailImg2.src = 'img/02.webp';

let thumbnailImg3 = document.createElement('img');
thumbnailImg3.src = 'img/03.webp';

let thumbnailImg4 = document.createElement('img');
thumbnailImg4.src = 'img/04.webp';

let thumbnailImg5 = document.createElement('img');
thumbnailImg5.src = 'img/05.webp';


const imgListT = [thumbnailImg1, thumbnailImg2, thumbnailImg3, thumbnailImg4, thumbnailImg5];



//-------------------------------------------------------------------------------

document.querySelector('.canvas').innerHTML = (imgList[0]);


let counter = 0 ;
let counterT
let swipe = true


setInterval(() => {

    if (counter < imgList.length -1){

        counter += 1;

        console.log(counter);

        document.querySelector('.canvas').innerHTML = imgList[counter];
    }
    
    else if (counter == imgList.length -1){

        counter = 0 ;

            document.querySelector('.canvas').innerHTML = imgList[counter];

        };
    
}, 3000);




// associamo una variabile ai bottoni
const buttonRight = document.getElementById('button-right');
const buttonLeft = document.getElementById('button-left');



buttonRight.addEventListener('click', function(){

    swipe = false;
    if (counter < imgList.length -1){

        counter += 1;

        console.log(counter);

        document.querySelector('.canvas').innerHTML = imgList[counter];
    }
    
    else if (counter == imgList.length -1){

        counter = 0 ;

         document.querySelector('.canvas').innerHTML = imgList[counter];

     };
    

});


buttonLeft.addEventListener('click', function(){
    
    swipe = false;
        if ((counter !== imgList.length) && (counter !== 0)){

            counter -= 1 ;
            console.log(counter) ;

            document.querySelector('.canvas').innerHTML = (imgList[counter]);

        }else {

            counter += imgList.length - 1 ;
    
             document.querySelector('.canvas').innerHTML = imgList[counter];
    
         };

    
});


for(let i = 0; i < imgListT.length; i++){

    swipe = false;
    let buttonThumbnail = document.createElement('a');
    
    buttonThumbnail.append(imgListT[i]);


    
    document.querySelector('.thumbnail').append(buttonThumbnail);


    imgListT[i].addEventListener('click', function(){

        document.querySelector('.canvas').innerHTML = (imgList[i]);

    
    }
    );
    
}




