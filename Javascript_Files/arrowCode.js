//ARROW CODE
//.....................................................................................................................................

        //IMAGE SWAP CODE
        //...........................................................

    	    //if right arrow clicked, show the next img to the right in the array workingArray
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
                    //keeps track of how many retro/outrun images are on screen
                    for (var i=0; i < mainImgRetro.length; i++) {
                        if (!mainImgRetro[i].classList.contains("displayNone") && retroPicCounter < mainImgRetro.length-1){
                            if (mainImgRetro[i] === mainImgRetro[0]){
                                retroPicCounter = 0;
                            }
                            else{
                                ++retroPicCounter;
                            }
                        }
                    }
                    // => CYBERPUNK PIC COUNT CODE =>
                    //keeps track of how many cyberpunk images are on screen
                    for (var i=0; i < mainImgCyberPunk.length; i++) {
                        if (!mainImgCyberPunk[i].classList.contains("displayNone" )&& cyberPunkPicCounter < mainImgCyberPunk.length-1){
                            if (mainImgCyberPunk[i] === mainImgCyberPunk[0]){
                                cyberPunkPicCounter = 0;
                            }
                            else{
                                ++cyberPunkPicCounter;
                            }
                        }
                    }
                    // => VAPORWAVE PIC COUNT CODE =>
                    //keeps track of how many vaporwave images are on screen
                    for (var i=0; i < mainImgVaporWave.length; i++) {
                        if (!mainImgVaporWave[i].classList.contains("displayNone") && vaporWavePicCounter < mainImgVaporWave.length-1){
                            if (mainImgVaporWave[i] === mainImgVaporWave[0]){
                                vaporWavePicCounter = 0;
                            }
                            else{
                            	++vaporWavePicCounter;
                            }
                        }
                    }
                }

            //if left arrow clicked, show the next img to the right in the array workingArray
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
                            }
                        }

                        // <= VAPORWAVE PIC COUNT CODE <=
                        for (var i=0; i < mainImgVaporWave.length; i++) {
                            if (!mainImgVaporWave[i].classList.contains("displayNone") ){
                                --vaporWavePicCounter;
                            }
                        }

                    }
                }

        //ARROW FUNCTIONALITY
        //...........................................................

            //DISPLAY/HIDE BOTH ARROWS (FUNCTION)
            //used when clicking display button or clear-images function 
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

            //KEYCODE EVENTS 
                window.addEventListener("keydown", function(event){ 
                    if (currentView === "myView"){
                        //synchronises left keyboard press with onscreen arrow click
                        if ( (event.keyCode === 37) ) {
                            leftArrowFunction();
                        }
                        //synchronises right keyboard press with onscreen arrow click
                        if ( (event.keyCode === 39) ) {
                            rightArrowFunction();
                        }
                    }
                    //check if image is first or last in array, if true hide appropriate arrow
                    (() => setTimeout( () => arrowVisibilityCheck(), 151 ) )();
                });

            //DISPLAY/HIDE LAST & FIRST IMAGES 
            //take away appropriate arrow if user is on first or last image (using visibility: none)
                window.addEventListener("click", arrowVisibilityCheck);
                function arrowVisibilityCheck(){
                    if (currentView === "myView") {
                        if (workingArray.length === 0){ 
                            leftArrow.style.visibility = ""; rightArrow.style.visibility = ""; 
                        }
                        else if (workingArray[mmx] === workingArray.slice(-1)[0]){
                            leftArrow.style.visibility = ""; rightArrow.style.visibility = "hidden";
                        }
                        else if (workingArray[mmx] === workingArray[0]) {
                            rightArrow.style.visibility = ""; leftArrow.style.visibility = "hidden";
                        } 
                        else { leftArrow.style.visibility = ""; rightArrow.style.visibility = ""; }
                    }
                }

            //STYLE FUNCTIONALITY 
            //opacity change depending on arrow state (hover, active etc), font size change on click etc
                function arrowClickColor(){
                    var wait;
                    if (currentView === "myView" && event){
                        quickClickAudioFunction();
                        //rightarrow font change and opacity change (for keyboard click)
                        if (leftArrow.style.visibility === ""){
                            //PRETEND KEY DOWN
                            if (event.keyCode === 37) {
                                leftArrow.style.opacity = 0.8;
                            } 
                            if (event.target.id === "arrowOne" || event.keyCode === 37){
                                leftArrow.style.width = "140px";
                                setTimeout( () => leftArrow.style.width = "",150); 
                            }
                            //PRETEND KEY UP
                            if (event.keyCode === 37) {
                                wait = setTimeout(function() {
                                    leftArrow.style.opacity = 0.2; leftArrow.style = null;
                                },150);
                            }
                        }
                        //rightarrow font change and opacity change (for keyboard click)
                        if (rightArrow.style.visibility === ""){
                            //PRETEND KEY DOWN
                            if (event.keyCode === 39) {
                                rightArrow.style.opacity = 0.8;
                            }
                            if (event.target.id === "arrowTwo" || event.keyCode === 39){
                                rightArrow.style.width = "140px"; 
                                setTimeout( () => rightArrow.style.width = "",150); 
                            }
                            //PRETEND KEY UP
                            if (event.keyCode === 39) {
                                wait = setTimeout(function() {
                                    rightArrow.style.opacity = 0.2; rightArrow.style = null;
                                },150);
                            }
                        }
                    }
                }

            //DISPLAY/HIDE COMVIEW ARROW ON SCROLL UP/DOWN
                var scrollCount = 0; // users needs to scroll three times for function to evoke (currently not in use)
                // var to fix bug where arrow would appear on first scroll after clicking display button (& going into a comview view)
                var hideFirstArrow = 0;
                //var and function that works to stop the function evoking too quickly and causing an ugly flicker from TPArrow
                var functionLocked = false;
                var lockTime = 500; 
                function lockFunction(){
                    functionLocked = true;
                    setTimeout( () =>{ functionLocked = false; lockTime = 500; }, lockTime);
                }
                //main code for this segment
                window.addEventListener("scroll",comViewArrowDisplay);
                var lastScrollTop = 0;
                function comViewArrowDisplay(){
                    scrollCount++
                    if (window.pageYOffset > 75 && /**scrollCount > 1 &&**/ functionLocked===false && movieModeImg.classList.contains("b")){
                        var st = window.pageYOffset || document.documentElement.scrollTop; 
                        if (st > lastScrollTop){
                            // console.log("Scroll down");
                            topPageArrowContainer.style.opacity = "0";
                            setTimeout( () => topPageArrowContainer.classList.add("displayNone"), 501);
                            scrollCount = 0;
                        } 
                        else if (/*scrollCount > 4*/ (hideFirstArrow > 0) ) {
                            // console.log("Scroll up");
                            topPageArrowContainer.classList.remove("displayNone");
                            setTimeout( () => topPageArrowContainer.style.opacity = "0.8", 10);
                            scrollCount = 0;
                        }
                        hideFirstArrow = 1;
                        lockFunction();
                        lastScrollTop = st <= 0 ? 0 : st; 
                    }
                }