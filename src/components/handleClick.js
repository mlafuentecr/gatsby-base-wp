//HANDLE CLICK ****************************************************
let countSlider = 0;
let countSliderBack = 4;
function handleChick(e) {

   console.log(`manejando click ${e.target.className}`)
  // console.log(`manejando click ${JSON.stringify(e.target.dataset.modal)}`)

  const firstDiv = document.getElementById('___gatsby');
    //OPEN DRAW *********************************
    if (e.target.classList.contains('btn-menu')) {
      firstDiv.classList.toggle('openDraw')
    }

    //OPEN DRAW *********************************
    if (e.target.classList.contains('btn-menu')) {
      console.log(`gotop`)
    }

    // //OPEN IMAGE *********************************
    // if(e.target.dataset.fullUrl){
    //   //window.open(e.target.dataset.fullUrl); 
    //   document.getElementById("modalContent").innerHTML = `<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"> `
      
    // }

        // //OPEN IMAGE *********************************
        // if(e.target.dataset.modal){
        //   window.open(e.target.dataset.fullUrl); 
        // }

        // Carousel *********************************
        const carousel = document.getElementById('carousel');
        var items = carousel.getElementsByClassName('blocks-gallery-item')
        //.length
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove(`nextSlider`);
          items[i].classList.remove(`prevSlider`);
        }


      //   delay(function(){
      //     console.log(`5 s`);
      // }, 5000 ); // end delay

        //nextSlider
        if (e.target.classList.contains('carousel__button--next')) {
         
          console.log(countSlider);
          if(countSlider < (items.length)-1){
            countSlider++
            console.log(countSlider);
            items[countSlider].classList.add(`nextSlider`);
            }else{
              items[countSlider].classList.remove(`nextSlider`);
            countSlider = 0;
          }
          
        }

          // //prevSlider
          if (e.target.classList.contains('carousel__button--prev')) {
            console.log('xxxx');
            console.log(countSliderBack +' '+ items.length);
            if(countSliderBack > 1){
              countSliderBack--
              console.log(countSliderBack);
              items[countSliderBack].classList.add(`prevSlider`);
              }else{
                items[countSliderBack].classList.remove(`prevSlider`);
                countSliderBack = 4;
            }
            
          }

          // if (e.target.classList.contains('carousel__button--prev')) {
          //   console.log(countSlider);
          //   if(countSlider > 0){
          //     countSlider =4; 
          //     }else{
          //       countSlider--
          //   }
          //   items[countSlider].classList.add(`prevSlider`);
          // }
        

}





export default handleChick;

