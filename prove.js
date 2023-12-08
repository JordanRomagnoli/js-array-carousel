
// <script> ESERCIZIO BASE

buttonRight.addEventListener('click', function(){

      
    if (counter < imgList.length -1){

        counter += 1;

        console.log(counter);

        document.querySelector('.canvas').innerHTML = imgList[counter];
    }
    

})


buttonLeft.addEventListener('click', function(){
    
    
        if ((counter !== imgList.length) && (counter !== 0)){

            counter -= 1
            console.log(counter)

            document.querySelector('.canvas').innerHTML = (imgList[counter])

        }

    
}) 