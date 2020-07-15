
// MAIN WAVEFM LOGO (appears in top left corner)
//.........................................................................................

    //shuffle images and reinitialise current settings (same as refreshing facebook to see new feed)
    wavefmLogo.addEventListener("click",function(e) { 
        if (comView === 1){
            photoViewSection.style.visibility = "hidden";
            displayNoneAllImgs();
            initScrollFunction();
            setTimeout(() => {
                photoViewSection.style.visibility = "";    
            }, 200);
        }
        else{
            imageShuffle();
        }
    });

    //shuffle the images (dependant on the view mode you're in)
    function imageShuffle(e){

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
                //set all images to display: none
                displayNoneAllImgs();
                // clear working array
                workingArray = []
                //reset image counters to default
                myViewCounterReset();
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
                //checks if in search mode, if so run searchFunction instead of myViewInit
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
        }
        //scroll to top of screen
        if (currentView === "pintrestView" || currentView === "facebookView"){
            scrollToTop();
        }
    }

