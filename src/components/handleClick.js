//HANDLE CLICK ****************************************************
function handleChick(e) {

  // console.log(`manejando click ${e.target.className}`)
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

}





export default handleChick;

