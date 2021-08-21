//FUNCTIONS ONLOAD
//..............................................................................

    //DESKTOP FUNCTIONS ON LOAD
    if (window.innerWidth>1100) {
        comView = 0; //comview is off (cause desktop starts in myview)
        
        //remove necessary adaptive classess
        soundControlContainer.classList.remove("adaptiveSoundControlContainer");
        formBox.classList.remove("adaptiveFormBox");
        movieModeContainer.classList.remove("adaptiveMovieModeContainer");

        //for images that are bigger than window height even after having been resized by style, adjust again as neccersary
        img = Array.prototype.slice.call(img); //turn img into array
        setTimeout(function(){ 
            fbTimelineView.classList.remove("displayNone");
            var imgMargin = "";
            var imgWidth = "";
            //function that resizes the images
            function furtherAdjustImgSize() {
                for (var i = 0; i < img.length; i++) {
                    //resize all images except pintrest images
                    if (!img[i].classList.contains("pImg")){
                        img[i].classList.remove("displayNone"); //tempararily remove displayNone so you can access rendered dimensions of img[i]
                        img[i].style.visibility = "hidden";
                        if (img[i].height > photoViewHeight || img[i].height > window.innerHeight) {
                            img[i].style.width = imgWidth;
                            if (img[i].classList.contains("mainImg")){
                                img[i].style.marginRight = imgMargin;
                                img[i].style.marginLeft = imgMargin;
                            }
                        }
                    }
                }
            }
            //size adjust for small/medium screens
            if (window.innerWidth < 1859) {
                //first image size adjust, width 450px
                imgMargin = "25";
                imgWidth = "450";
                furtherAdjustImgSize();
                //second image size adjust (if previous was still too big), width 400px
                imgMargin = "50";
                imgWidth = "400";
                furtherAdjustImgSize();
                //third image size adjust (if previous was still too big), width 350px
                imgMargin = "75";
                imgWidth = "350";
                furtherAdjustImgSize();
            }
            //size adjust for large screens
            else {
                //first image size adjust, width 450px
                imgMargin = "25";
                imgWidth = "675";
                furtherAdjustImgSize();
                //first image size adjust, width 400px
                imgMargin = "50";
                imgWidth = "625";
                furtherAdjustImgSize();
                //first image size adjust, width 450px
                imgMargin = "137.5";
                imgWidth = "450";
                furtherAdjustImgSize();
                //first image size adjust, width 400px
                imgMargin = "162.5";
                imgWidth = "400";
                furtherAdjustImgSize();
            }
            //add displayNone back to appropriate images
            for (var i = 0; i < img.length; i++) {
                if (img[i].style.visibility === "hidden") {
                    img[i].style.visibility = "";
                    img[i].classList.add("displayNone");
                }
            }
            //set up working array and display first image etc
            myViewCounterReset(); // reset myView counters if checkbox count is 0 or first image of workingArray is displayed
			workingArray = mainImgCyberPunk;
			workingArray = Array.prototype.slice.call(workingArray);
			workingArray[mmx].classList.remove("displayNone");
            fbTimelineView.classList.add("displayNone");
            photoViewSection.style.visibility = "";
        },200);
        
        photoViewSection.classList.remove("displayNone");  
        imageShuffle();//takes care of shuffling images, setting up workingArray and displaying imagess
        
        // set the height of photoview section so infoView can be centered between bottom of screen and bottom of page-head
        var photoViewHeight = window.innerHeight - pageHead.offsetHeight; // var photoViewHeight becomes height of photoView Section
        infoPicCenter.style.height = photoViewHeight; // photoviewheight will now always return the exact height of said height
    }

    //ADAPTIVE FUNCTIONS ON LOAD
    //.......................................................................
    else if (window.innerWidth<1100){
        comView = 1; //comView is on (cause adaptive doesn't contain myView)
        currentView = "facebookView";

        workingArray = [];

        myView.classList.add("displayNone");
        fbTimelineView.classList.remove("displayNone");

        mode = "adaptive";

        formBox.classList.remove("comViewOff");
        formBox.classList.add("comViewOn");

        photoViewSection.style.visibility = "";
        photoViewSection.classList.remove("displayNone"); 
        
        initScrollFunction(); // checks what cb is checked, displays correct amount of images on screen etc
    }

    //OTHER/GLOBAL
    //.....................................................................
        //delay arrows from showing on screen cause they glitch on load otherwise
        setTimeout((function(){ 
               wavefmLogo.classList.remove("visibilityNone");  
               sfxIconFunction();
        }),200);

        arrowVisibilityCheck(); // dispays appropriate amount of arrows on either side of workingArray[mmx]

