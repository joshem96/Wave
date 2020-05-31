//FUNCTIONS ONLOAD
//..............................................................................

    //DESKTOP FUNCTIONS ON LOAD
    if (window.innerWidth>1100){

        //remove necessary adaptive classess
        soundControlContainer.classList.remove("adaptiveSoundControlContainer");
        formBox.classList.remove("adaptiveFormBox");
        movieModeContainer.classList.remove("adaptiveMovieModeContainer");
        photoViewSection.classList.remove("displayNone");  
        imageShuffle();//takes care of shuffling images, setting up workingArray and displaying imagess
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



