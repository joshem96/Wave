
//HIDE TAB CONTAINERS AFTER NO INTERACTION FOR AMOUNT OF TIME
//..............................................................................................................................

    //Event listeneres that when triggered set off a timer for target before it hides
    //.........................................................
        //Preferences Icon and control interface/console
        preferencesButton.addEventListener("mouseover",tabHideTimerOff);
        preferencesButton.addEventListener("mouseout",tabHideTimerOn);
        adaptivePreferencesButton.addEventListener("click",adaptiveTabButtonTimer);
        adaptiveFormBox.addEventListener("click",adaptiveTabButtonTimer);
        formBox.addEventListener("mouseover",tabHideTimerOff);
        formBox.addEventListener("mouseout",tabHideTimerOn);
        //Preferences Icon and control interface/console
        movieModeButton.addEventListener("mouseover",tabHideTimerOff);
        movieModeButton.addEventListener("mouseout",tabHideTimerOn);
        adaptiveMovieModeButton.addEventListener("click",adaptiveTabButtonTimer);
        adaptiveMovieModeContainer.addEventListener("click",adaptiveTabButtonTimer);
        movieModeContainer.addEventListener("mouseover",tabHideTimerOff);
        movieModeContainer.addEventListener("mouseout",tabHideTimerOn);
        //Preferences Icon and control interface/console
        soundControlButton.addEventListener("mouseover",tabHideTimerOff);
        soundControlButton.addEventListener("mouseout",tabHideTimerOn);
        adaptiveSoundControlButton.addEventListener("click",adaptiveTabButtonTimer);
        adaptiveSoundControlContainer.addEventListener("click",adaptiveTabButtonTimer);
        soundControlContainer.addEventListener("mouseover",tabHideTimerOff);
        soundControlContainer.addEventListener("mouseout",tabHideTimerOn);

    //GENERAL CODE (ADPATIVE AND NORMAL)
    //.....................................................

         // used for anonomyous funct thats used for the timer
        var setTabHideTimer;
        //stops tabHideTimerOn from being set off
        function tabHideTimerOff(){
            clearTimeout(setTabHideTimer);
        }

        //DESKTOP (NORMAL VIEW) CODE
        //..
            //hides all tabContainers after 10 seconds on mouseout of specific elements
            function tabHideTimerOn(){
                tabHideTimerOff();//incase instance already running
                setTabHideTimer = setTimeout(tabHide,10000);
                //function that hides all tab containers when evoked
                function tabHide(){
                    tabHideTimerOff();//incase an instance is already running
                    //run for each function to displayNone on every tabContainer
                    var displayNoneTabContainers = [dnpc,movieModeContainer,soundControlContainer];
                    displayNoneTabContainers.forEach(function(tab) {
                        tab.classList.add("displayNone");
                    });
                    //run for each function on every button to set classList "on" to "off"
                    var tabButtonsOff = [movieModeButton,preferencesButton,soundControlButton,adaptiveMovieModeButton,adaptivePreferencesButton,adaptiveSoundControlButton];
                    tabButtonsOff.forEach(function(tabButton) {
                        tabButton.classList.remove("on");
                        tabButton.classList.add("off");
                    });
                    tabButtonDisable(); //disable tab buttons for 500ms
                    //adaptive methods
                    if (window.innerWidth<1000){
                        adaptiveTabButtons.classList.remove("timerOn");	            
                    }
                }
            }
            
        //ADAPTIVE CODE
        //..
            function adaptiveTabButtonTimer(){
                if (mode === "adaptive"){
                    //if no other tabs are opened and you click a tab button, set timer for 5s for tabContainer to display
                    if (!adaptiveTabButtons.classList.contains("timerOn")){
                        tabHideTimerOff();//incase an instance is already running
                        adaptiveTabButtons.classList.add("timerOn");	
                        tabHideTimerOn();
                    }
                    else{
                        //if timer is already on and you click the button again, turn timer off and re-run adaptiveTabButtonTimer function
                        tabHideTimerOff();
                        adaptiveTabButtons.classList.remove("timerOn");	 
                        setTimeout(function (){ evokeAdaptiveTabButtonTimer(); },100);
                    }
                }
            }
            //evoke adaptive tab buttom timer
            function evokeAdaptiveTabButtonTimer() {
                adaptiveTabButtonTimer();
            }

//...............................................................................................................................