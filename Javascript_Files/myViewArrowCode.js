//ARROW CODE
//.....................................................................................................................................

    	//code for arrows in myView 
    	//if right arrow clicked, show the next img in the array workingArray
            rightArrow.addEventListener("click", rightArrowFunction)

                function rightArrowFunction(){

                if (movieModeImg.classList.contains("b") && !leftArrow.classList.contains("displayNone") ){
                    arrowClickColor();
                }
                    
                    if (arrowCounter < workingArray.length){

                        if (!workingArray[mmx].classList.contains("displayNone")){

                            workingArray[mmx].classList.add("displayNone");
                            ++mmx;
                            arrowCounter++;
                            workingArray[mmx].classList.remove("displayNone");
                        }
                    }

                    // => RETRO PIC COUNT CODE =>
                    for (var i=0; i < mainImgRetro.length; i++) {
						
                        if (!mainImgRetro[i].classList.contains("displayNone") && retroPicCounter < mainImgRetro.length-1){

                            if (mainImgRetro[i] === mainImgRetro[0]){

                                retroPicCounter = 0;
                            }else{

                                ++retroPicCounter;
                            }
                        }
                    }

                    // => CYBERPUNK PIC COUNT CODE =>
                    for (var i=0; i < mainImgCyberPunk.length; i++) {
						
                        if (!mainImgCyberPunk[i].classList.contains("displayNone") && cyberPunkPicCounter < mainImgCyberPunk.length-1){

                            if (mainImgCyberPunk[i] === mainImgCyberPunk[0]){

                                cyberPunkPicCounter = 0;
                            }else{

                                ++cyberPunkPicCounter;
                            }
                        }
                    }

                    // => VAPORWAVE PIC COUNT CODE =>
                    for (var i=0; i < mainImgVaporWave.length; i++) {

                        if (!mainImgVaporWave[i].classList.contains("displayNone") && vaporWavePicCounter < mainImgVaporWave.length-1){

                            if (mainImgVaporWave[i] === mainImgVaporWave[0]){

                                vaporWavePicCounter = 0;
                            }else{

                            	++vaporWavePicCounter;
                            }
                        }
                    }
   
            }

            leftArrow.addEventListener("click", leftArrowFunction)

           function leftArrowFunction(){ 
               
                if (movieModeImg.classList.contains("b") && !leftArrow.classList.contains("displayNone") ){
                    arrowClickColor();
                }
			   
			   // displayNone current image and display the next image in workingArray
                if (mmx >= 1){
                    workingArray[mmx].classList.add("displayNone");
                    mmx--;
                    arrowCounter--;
                    workingArray[mmx].classList.remove("displayNone");

                 // <= RETRO PIC COUNT CODE <=
                for (var i=0; i < mainImgRetro.length; i++) {

                    if (!mainImgRetro[i].classList.contains("displayNone") ){

                        --retroPicCounter;
                    }
                }

                 // <= CYBERPUNK PIC COUNT CODE <=
                for (var i=0; i < mainImgCyberPunk.length; i++) {

                    if (!mainImgCyberPunk[i].classList.contains("displayNone") ){

                        --cyberPunkPicCounter;

//                            vaporWavePicCounter = 0;
                    }
                }

                 // <= VAPORWAVE PIC COUNT CODE <=
                for (var i=0; i < mainImgVaporWave.length; i++) {

                    if (!mainImgVaporWave[i].classList.contains("displayNone") ){

                        --vaporWavePicCounter;
                    }
                }

                }else{
    //                if (arrowCounter >= workingArray.length ){
    //                    arrowCounter = 1;
    //                }  

                }
            }

    //ARROW DISPLAYNONE TOGGLE FUNCTION
    function myViewArrowToggleFunction(){

        if (workingArray.length === 0 || workingArray.length === 1){
            leftArrow.classList.add("displayNone");
            rightArrow.classList.add("displayNone");
        }
        if (workingArray.length > 1 && movieModeImg.classList.contains("b")){
            leftArrow.classList.remove("displayNone");
            rightArrow.classList.remove("displayNone");
        }
    }


 //KEYCODE EVENTS FOR KEYBOARD ARROW
	window.addEventListener("keydown", function(event){ 
		if (currentView === "myView"){
			if ( (event.keyCode === 37) ) {
				leftArrowFunction();
			}
			if ( (event.keyCode === 39) ) {
				rightArrowFunction();
			}
		}
	});

////to keep the clicked color on for a little longer
//	window.addEventListener("keyup", function(event){ 
//        var wait;
//		if (currentView === "myView"){
//
//			if ( (event.keyCode === 37) ) {
//
//                wait = setTimeout(function() {leftArrow.style.opacity = 0.2; leftArrow.style = null;},25);
////                leftArrow.style = null;
//			}
//
//			if ( (event.keyCode === 39) ) {
//
//                wait = setTimeout(function() {rightArrow.style.opacity = 0.2; rightArrow.style = null;},25);
////                leftArrow.style = null;
//			}
//
//		}
//	});

function arrowClickColor(){
    var wait;
    if (currentView === "myView"){
        if (event){
            quickClickAudioFunction();
            //PRETEND KEY DOWN
            if ( (event.keyCode === 37) ) {
                leftArrow.style.opacity = 0.8;
            }
            if ( (event.keyCode === 39) ) {
                rightArrow.style.opacity = 0.8;
            }
            //PRETEND KEY UP
            if ( (event.keyCode === 37) ) {
                wait = setTimeout(function() {leftArrow.style.opacity = 0.2; leftArrow.style = null;},135);
            }
            if ( (event.keyCode === 39) ) {
                wait = setTimeout(function() {rightArrow.style.opacity = 0.2; rightArrow.style = null;},135);
            }
        }
    }
}
