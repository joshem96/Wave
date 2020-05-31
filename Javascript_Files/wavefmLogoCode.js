
// NEW MAIN WAVEFM LOGO
//.........................................................................................


wavefmLogo.addEventListener("click",imageShuffle);

		//shuffle the images respective to their parent div
		function imageShuffle(){

            if (!photoViewSection.classList.contains("displayNone")){

                //FACEBOOK IMG SHUFFLE
                for (var i = fbTimelineView.children.length; i >= 0; i--) {

                    fbTimelineView.appendChild(fbTimelineView.children[Math.random() * i | 0]);
                }
                fbImgCyberPunk = document.querySelectorAll(".fbImgCyberPunk");
                fbImgCyberPunk = Array.prototype.slice.call(fbImgCyberPunk);
                fbImgRetro = document.querySelectorAll(".fbImgRetro");
                fbImgRetro = Array.prototype.slice.call(fbImgRetro);
                fbImgVaporWave = document.querySelectorAll(".fbImgVaporWave");
                fbImgVaporWave = Array.prototype.slice.call(fbImgVaporWave);

                //PINTREST IMG SHUFFLE
                for (var i = pintrestView.children.length; i >= 0; i--) {

                    pintrestView.appendChild(pintrestView.children[Math.random() * i | 0]);
                }
                pImgCyberPunk = document.querySelectorAll(".pImgCyberPunk");
                pImgCyberPunk = Array.prototype.slice.call(pImgCyberPunk);
                pImgRetro = document.querySelectorAll(".pImgRetro");
                pImgRetro = Array.prototype.slice.call(pImgRetro);
                pImgVaporWave = document.querySelectorAll(".pImgVaporWave");
                pImgVaporWave = Array.prototype.slice.call(pImgVaporWave);


                //MYVIEW IMG SHUFFLE 
                //basically: displayNone all images => clear workingArray => shuffle images => assign shuffled imgs to variables => create new workingArray and display mmx
                if (currentView === "myView"){

                    if (workingArray.length>1){

                        workingArray[mmx].classList.add("displayNone");
                    }

                    // clear working array
                    workingArray = []

                    //reset image counters to default
                    counterDefault();

                    //shuffle HTML imgs
                    for (var i = myViewImageWrapper.children.length; i >= 0; i--){
                        
                        myViewImageWrapper.appendChild(myViewImageWrapper.children[Math.random() * i | 0]);
                    }
                    
                    //add newly shuffled html images to respective DOM variables
                    mainImgCyberPunk = document.querySelectorAll(".mainImgCyberPunk");
                    mainImgCyberPunk = Array.prototype.slice.call(mainImgCyberPunk);
                    mainImgRetro = document.querySelectorAll(".mainImgRetro");
                    mainImgRetro = Array.prototype.slice.call(mainImgRetro);
                    mainImgVaporWave = document.querySelectorAll(".mainImgVaporWave");
                    mainImgVaporWave = Array.prototype.slice.call(mainImgVaporWave);

                    //checks if in search mode, if so run searchFunction instead of myViewSelectAll
                    if (searchWord.length>1){
                        
                        searchFunction();
                    }
                    //select all cb's that are checked and display their images
                    else{
                        myViewInit();
                    }

                    if (workingArray.length>1){
                        workingArray[mmx].classList.remove("displayNone");
                    }
                }
            }else{
                //IF CLICKED WHEN INFOVIEW IS DISPLAYED
                //INFO-VIEW => DISPLAYVIEW (BACK TO WHATEVER VIEW WAS LAST DISPLAYED(EG MYVIEW))
                if((!infoPicView.classList.contains("displayNone")) && photoViewSection.classList.contains("displayNone")){

                    infoPicView.classList.add("displayNone"); 		              
                    photoViewSection.classList.remove("displayNone");
                }                
            }

            //scroll to top of screen
            if (currentView === "pintrestView" || currentView === "facebookView"){

                scrollToTop();
            }

		}

