//HANDLE CLICK ****************************************************
let countSlider = 0;
let countSliderBack = 4;
function handleChick(e) {

  //  console.log(`manejando click 1 ${e.target.className}`)
  //  console.log(`manejando click a ${e.target.parentElement.className}`)
  //  console.log(`manejando click b ${JSON.stringify(e.target.dataset.modal)}`)

  const firstDiv = document.getElementById('___gatsby');
    //OPEN DRAW *********************************
    if (e.target.classList.contains('btn-menu')) {
      firstDiv.classList.toggle('openDraw')
    }

    //OPEN DRAW *********************************
    if (e.target.parentElement.classList.contains('subChildren')) {
      firstDiv.classList.toggle('openDraw')
    }


       //Change Language *********************************
       if (e.target.classList.contains('eng')) {
         // Store
         console.log(`Saving Language`)
        localStorage.setItem("lng", "eng");
        window.location.href= `/eng`;
      }
      if (e.target.classList.contains('spa')) {
        // Store
        console.log(`Saving Language spa`)
       localStorage.setItem("lng", "spa");
       window.location.href= `/`;
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
        if(document.getElementById('carousel')){

        const carousel = document.getElementById('carousel');
        var items = carousel.getElementsByClassName('blocks-gallery-item')



        //.length
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove(`nextSlider`);
          items[i].classList.remove(`prevSlider`);
        }




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
            if(countSliderBack > 1){
              countSliderBack--
              console.log(countSliderBack);
              items[countSliderBack].classList.add(`prevSlider`);
              }else{
                items[countSliderBack].classList.remove(`prevSlider`);
                countSliderBack = 4;
            }
            
          }

        }

}





export default handleChick;

