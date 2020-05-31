
//HIDE TAB CONTAINERS AFTER NO INTERACTION FOR AMOUNT OF TIME
//..............................................................................................................................
    preferencesButton.addEventListener("mouseover",tabHideTimerOff);
    preferencesButton.addEventListener("mouseout",tabHideTimerOn);
    adaptivePreferencesButton.addEventListener("click",adaptiveTabButtonTimer);
    adaptiveFormBox.addEventListener("click",adaptiveTabButtonTimer);
    //adaptivePreferencesButton.addEventListener("mouseout",tabHideTimerOn);
    formBox.addEventListener("mouseover",tabHideTimerOff);
    formBox.addEventListener("mouseout",tabHideTimerOn);

    movieModeButton.addEventListener("mouseover",tabHideTimerOff);
    movieModeButton.addEventListener("mouseout",tabHideTimerOn);
    adaptiveMovieModeButton.addEventListener("click",adaptiveTabButtonTimer);
    adaptiveMovieModeContainer.addEventListener("click",adaptiveTabButtonTimer);
    //adaptiveMovieModeButton.addEventListener("mouseout",tabHideTimerOn);
    movieModeContainer.addEventListener("mouseover",tabHideTimerOff);
    movieModeContainer.addEventListener("mouseout",tabHideTimerOn);

    soundControlButton.addEventListener("mouseover",tabHideTimerOff);
    soundControlButton.addEventListener("mouseout",tabHideTimerOn);
    adaptiveSoundControlButton.addEventListener("click",adaptiveTabButtonTimer);
    adaptiveSoundControlContainer.addEventListener("click",adaptiveTabButtonTimer);
    //adaptiveSoundControlButton.addEventListener("mouseout",tabHideTimerOn);
    soundControlContainer.addEventListener("mouseover",tabHideTimerOff);
    soundControlContainer.addEventListener("mouseout",tabHideTimerOn);


    //GENERAL CODE (ADPATIVE AND NORMAL)
    //.............................
        var setTabHideTimer;

        //hides all tabContainers after 10 seconds on mouseout of specific elements
        function tabHideTimerOn(){
//            console.log("tab hide timer on");
            tabHideTimerOff();//incase instance already running
            setTabHideTimer = setTimeout(tabHide,10000);

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

                //disable tab buttons for 500ms
                tabButtonDisable();

                //adaptive methods
                if (window.innerWidth<1000){
                    adaptiveTabButtons.classList.remove("timerOn");	            
                }
            }
        }

        //stops tabHideTimerOn from being set off
        function tabHideTimerOff(){
            clearTimeout(setTabHideTimer);
        }

    //ADAPTIVE CODE
    function adaptiveTabButtonTimer(){

        if (mode === "adaptive"){

            //if no other tabs are opened and you click a tab button, set timer for 5s for tabContainer to display
            if (!adaptiveTabButtons.classList.contains("timerOn")){
                tabHideTimerOff();//incase an instance is already running
                adaptiveTabButtons.classList.add("timerOn");	
                tabHideTimerOn();
            }else{
                //if timer is already on and you click the button again, turn timer off and re-run adaptiveTabButtonTimer function
                tabHideTimerOff();
                adaptiveTabButtons.classList.remove("timerOn");	 
                setTimeout(function (){ evokeAdaptiveTabButtonTimer(); },100);
            }
        }
    }
    function evokeAdaptiveTabButtonTimer() {
        adaptiveTabButtonTimer();
    }

//...............................................................................................................................