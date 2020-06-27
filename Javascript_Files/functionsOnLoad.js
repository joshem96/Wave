//FUNCTIONS ONLOAD
//..............................................................................

    //DESKTOP FUNCTIONS ON LOAD
    if (window.innerWidth>1100){

        //remove necessary adaptive classess
        soundControlContainer.classList.remove("adaptiveSoundControlContainer");
        formBox.classList.remove("adaptiveFormBox");
        movieModeContainer.classList.remove("adaptiveMovieModeContainer");

        //for images that are bigger than window height even after having been resized by style, make their width 400px 
        //turn img into array
        //tempararily remove displayNone so you can access rendered dimensions of img[i]
        img = Array.prototype.slice.call(img);
        setTimeout(function(){ 
            fbTimelineView.classList.remove("displayNone");
            var imgMargin = "";
            var imgWidth = "";
            //function that resizes the images
            function furtherAdjustImgSize(){
                for (var i = 0; i < img.length; i++) {
                    //resize all images but pintrest images
                    if (!img[i].classList.contains("pImg")){
                        img[i].classList.remove("displayNone");
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
                //first image size adjust, width 400px
                imgMargin = "50";
                imgWidth = "400";
                furtherAdjustImgSize();
                //first image size adjust, width 350px
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
//            //run it again to get the images which are still too big
//            for (var i = 0; i < img.length; i++) {
//                if (img[i].height > photoViewHeight || img[i].height > window.innerHeight) {
//                    if (!img[i].classList.contains("pImg")){
//                        img[i].style.width = "400";
//                        if (img[i].classList.contains("mainImg")){
//                            img[i].style.marginRight = "50";
//                            img[i].style.marginLeft = "50";
//                        }
//                    }
//                }
//            }
            
//            //run it again to get the images which are still too big
//            for (var i = 0; i < img.length; i++) {
//                if (img[i].height > photoViewHeight || img[i].height > window.innerHeight) {
//                    if (!img[i].classList.contains("pImg")){
//                        img[i].style.width = "350";
//                        if (img[i].classList.contains("mainImg")){
//                            img[i].style.marginRight = "75";
//                            img[i].style.marginLeft = "75";
//                        }
//                    }
//                }
//            }
            //add displayNone back to appropriate images
            for (var i = 0; i < img.length; i++) {
                if (img[i].style.visibility === "hidden") {
                    img[i].style.visibility = "";
                    img[i].classList.add("displayNone");
                }
            }
            workingArray[mmx].classList.remove("displayNone");
            fbTimelineView.classList.add("displayNone");
        },100);
        
        photoViewSection.classList.remove("displayNone");  
        imageShuffle();//takes care of shuffling images, setting up workingArray and displaying imagess
        /* set the height of photoview section so infoView can be centered between bottom of screenand bottom of page-head */
        var infoPicCenter = document.querySelector(".infoPicCenter");
        var pageHead = document.querySelector(".page-head");
        var photoViewHeight = window.innerHeight - pageHead.offsetHeight; // var photoViewHeight becomes height of photoView Section
        infoPicCenter.style.height = photoViewHeight;
    }

    //ADAPTIVE FUNCTIONS ON LOAD
    //.......................................................................
    else if (window.innerWidth<1100){

        currentView = "facebookView";

        workingArray = [];

        myView.classList.add("displayNone");
        fbTimelineView.classList.remove("displayNone");

        mode = "adaptive";

        formBox.classList.remove("comViewOff");
        formBox.classList.add("comViewOn");

        photoViewSection.classList.remove("displayNone"); 
        
        initScrollFunction();
    }



