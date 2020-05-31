//SOUND BUTTON CODE - SONG LOOP CODE
//..........................................................................................................................................

    //DESKTOP SOUND-ICON CODE

    var fadeTimer;

    //autoplay for songLoop code WIP
    {
        songLoop.volume = 0;
        songLoop.autoplay = true;
        songLoop.load();
    //	audioFadeIn();
    }

    //audio fade-in code
    function musicFadeIn (){

        clearTimeout(fadeTimer);
        if (songLoop.volume < musicCurrentVolume) {

            songLoop.volume += 0.005;
            fadeTimer = setTimeout(musicFadeIn,musicFadeTime);//make the interval larger for a longer fade in and smaller for a quicker fade in
        }else{

            songLoop.volume = musicCurrentVolume;
        }
    }

    //audio fade-out code
    var musicFadeTime = 20;

    function musicFadeOut () {

        clearTimeout(fadeTimer);
        if (songLoop.volume > 0.005) {

            songLoop.volume -= 0.005;
            fadeTimer = setTimeout(musicFadeOut,musicFadeTime);//make the interval larger for a longer fade out and smaller for a quicker fade out
        }else{
            songLoop.volume = 0;
            songLoop.pause();
            songLoop.currentTime = 0;
        }
    }



	// OPEN/CLOSE VIEWING SOUND-TAB CODE - DISPLAYNONE_METHOD
	//................................................................................................................................
		adaptiveSoundControlButton.addEventListener("click",soundControlTabFunction)
		soundControlButton.addEventListener("click",soundControlTabFunction)

        function soundControlTabFunction(){

            if ( (soundControlContainer.classList.contains("displayNone")) || (!movieModeContainer.classList.contains("displayNone")) || (!dnpc.classList.contains("displayNone")) ){

                soundControlContainer.classList.remove("displayNone");
                dnpc.classList.add("displayNone");
				movieModeContainer.classList.add("displayNone")
            }else{

                soundControlContainer.classList.add("displayNone");
                }
		}


        //DESKTOP MUSIC ICON CLICK
        //when sound icon on/off is clicked
        musicIconDesktop.addEventListener("click",musicIconFunction);
        function musicIconFunction () {

//            var dtSoundOnIcon = document.querySelector(".soundOnIconDesktop");
//            var dtSoundOffIcon = document.querySelector(".soundMuteIconDesktop");

            //turn sound off if sound is on
            if (!musicOnDesktop.classList.contains("displayNone")){
                musicOnDesktop.classList.add("displayNone");
                musicMuteDesktop.classList.remove("displayNone");

                musicFadeOut();
                
                musicLevelContainer.classList.add("displayNone");
            }else{
                //turn sound on if sound is off
                if (!musicMuteDesktop.classList.contains("displayNone")){
                musicOnDesktop.classList.remove("displayNone");
                musicMuteDesktop.classList.add("displayNone");

                songLoop.volume = 0;
                songLoop.currentTime = 0;
                songLoop.play();	
                musicFadeIn();

                musicLevelContainer.classList.remove("displayNone");

                }       
            }
        } 

        //SFX ICON CLICK
        sfxIconDesktop.addEventListener("click",sfxIconFunction);

        function sfxIconFunction () {

            //turn sound off if sound is on
            if (!sfxOnDesktop.classList.contains("displayNone")){

                sfxOnDesktop.classList.add("displayNone");
                sfxMuteDesktop.classList.remove("displayNone");

				normalClickAudio.muted = true;
				innerButtonClickAudio.muted = true;
				quickClickAudio.muted = true;
				quickClickTwoAudio.muted = true;
				tabOpenSound.muted = true;
				tabCloseSound.muted = true;
				tabSlideSound.muted = true;

                sfxLevelContainer.classList.add("displayNone");
            }else{

                //turn sound on if sound is off
                if (!sfxMuteDesktop.classList.contains("displayNone")){
                sfxOnDesktop.classList.remove("displayNone");
                sfxMuteDesktop.classList.add("displayNone");

				normalClickAudio.muted = false;
				innerButtonClickAudio.muted = false;
				quickClickAudio.muted = false;
				quickClickTwoAudio.muted = false;
				tabOpenSound.muted = false;
				tabCloseSound.muted = false;
				tabSlideSound.muted = false;

                sfxLevelContainer.classList.remove("displayNone");
                }       
            }
        } 


    //ADAPTIVE SOUND-ICON CODE 
    //..........................................................................
    
//        var soundIconAdaptive = document.querySelector(".adaptiveSoundIcon");
//
//        soundIconAdaptive.addEventListener("click",adaptiveSoundIconFunction);
//
//        function adaptiveSoundIconFunction () {
//
//            var adaptiveSoundOnIcon = document.querySelector(".soundOnIconAdaptive");
//            var adaptiveSoundOffIcon = document.querySelector(".soundMuteIconAdaptive");
//
//            //if adaptive-soundON-icon is displayed and clicked
//            if (adaptiveSoundOnIcon.classList.contains("displayNone") === false){
//
//                adaptiveSoundOnIcon.classList.add("displayNone");
//                adaptiveSoundOffIcon.classList.remove("displayNone");
//                musicFadeOut();
//
//            //if adpative-soundOFF-icon is displayed and click
//            }else{ if (adaptiveSoundOffIcon.classList.contains("displayNone")===false){
//
//                        adaptiveSoundOnIcon.classList.remove("displayNone");
//                        adaptiveSoundOffIcon.classList.add("displayNone");
//                        songLoop.volume = 0;
//                        songLoop.currentTime = 0;
//                        songLoop.play();	
//                        musicFadeIn();
//                    }       
//                }
//        }
    



//CLICK SOUND CODE
//...............................................................................................................

    //Normal click sound 
    var normalClickAudio = document.querySelector(".normalClickAudio");
    var quickClickAudio = document.querySelector(".quickClickAudio");
    var quickClickTwoAudio = document.querySelector(".quickClickTwoAudio");
    var innerButtonClickAudio = document.querySelector(".innerButtonClickAudio");

    normalClickAudio.volume = sfxCurrentVolume;
    normalClickAudio.load();

    quickClickAudio.volume = sfxCurrentVolume;
    quickClickAudio.load();

    quickClickTwoAudio.volume = sfxCurrentVolume;
    quickClickTwoAudio.load();

    innerButtonClickAudio.volume = sfxCurrentVolume;
    innerButtonClickAudio.load();

    //normalClick Sound, includes switch statement for delay if info is on screen on either waveFm or displayButton is clicked
    //causing the closeTab sound to happen first, to indicate the info screen is closing, then the normalClick sound to happen 350ms later
    function normalClickAudioFunction(){

        //variable for switch statement
        var x = "";

        //if statement to set the variable, depending on whether the infoButton contains on or off
        if (infoButton.classList.contains("off")) {
        var x = "infoOff";
            }else{
                if (infoButton.classList.contains("on")){
               var x = "infoOn";
                }
            }

        //switch statement for audio delay 
        switch (x) {

            case "infoOn": //played delayed sound code thing

                tabCloseSound.play();

                setTimeout(function(){
                    normalClickAudio.load();
                    normalClickAudio.play();
                },370);

                infoButton.classList.remove("on");
                infoButton.classList.add("off");

                break;

            case "infoOff": //play normal button click sound
                normalClickAudio.load();
                normalClickAudio.play();     

                break;

            default: 
                normalClickAudio.load();
                normalClickAudio.play();     
        }
    }

    function quickClickAudioFunction(){
        quickClickAudio.play(); 
    }

    function quickClickTwoAudioFunction(){
        quickClickTwoAudio.play(); 
    }


    function innerButtonClickAudioFunction(){
        innerButtonClickAudio.play(); 
    }

    //preferencesButton and movieModeButton code
    var tabSlideSound = document.querySelector(".tabSound");
    var tabCloseSound = document.querySelector(".closeSound");
    var tabOpenSound = document.querySelector(".openSound");

    function tabCloseSoundAudioFunction (){
        tabCloseSound.play();
    }

    tabSlideSound.volume = sfxCurrentVolume;
    tabSlideSound.load();

    tabCloseSound.volume = sfxCurrentVolume;
    tabCloseSound.load();

    tabOpenSound.volume = sfxCurrentVolume;
    tabOpenSound.load();



	//disable tabButtons for half a second after being clicked
	tabButtons.addEventListener("click",tabButtonDisable);
	adaptiveTabButtons.addEventListener("click",tabButtonDisable);
	function tabButtonDisable(){

		tabButtons.classList.add("buttonDisable");
		adaptiveTabButtons.classList.add("buttonDisable");

		setTimeout(function(){

			tabButtons.classList.remove("buttonDisable");
			adaptiveTabButtons.classList.remove("buttonDisable");
            },500 );

	}


    //DESKTOP TAB BUTTONS FUNCTIONS
	//........................................................
    tabButtons.addEventListener("click", tabButtonSounds);



	function tabButtonSounds(e) {

		// CLOSEDTAB => OPENTAB - MOVIEMODEBUTTON
        //if no buttons have been pressed yet and movieButton is the first button pressed
        if ( (e.target.id === "movieModeButton") && (movieModeButton.classList.contains("off")) && (preferencesButton.classList.contains("off")) && (soundControlButton.classList.contains("off")) ){

            tabOpenSound.play();

            movieModeButton.classList.add("on");
            movieModeButton.classList.remove("off");
        }

		// CLOSEDTAB => OPENTAB - PREFERENCESBUTTON
        //if no buttons have been pressed yet and preferenceButton is the first button pressed
        else if ( (e.target.id === "preferencesButton") && (preferencesButton.classList.contains("off")) && (movieModeButton.classList.contains("off")) && (soundControlButton.classList.contains("off")) ){

            tabOpenSound.play();

            preferencesButton.classList.add("on");
            preferencesButton.classList.remove("off");
        }

		// CLOSEDTAB => OPENTAB - SOUNDCONTROLBUTTON
        //if no buttons have been pressed yet and soundControlButton is the first button pressed
        else if ( (e.target.id === "soundControlButton") && (preferencesButton.classList.contains("off")) && (movieModeButton.classList.contains("off")) && (soundControlButton.classList.contains("off")) ){

            tabOpenSound.play();

            soundControlButton.classList.add("on");
            soundControlButton.classList.remove("off");
        }

		//--

		// OPENTAB => CLOSEDTAB - MOVIEMODEBUTTON
        //if movie mode tab already is open and is clicked again, causing it to close //this also means hitting this button twice in a row
        else if ( (e.target.id === "movieModeButton" && movieModeButton.classList.contains("on") && preferencesButton.classList.contains("off") && soundControlButton.classList.contains("off")) || (e.target.id === "movieModeButton" && movieModeButton.classList.contains("on")) ){

                tabCloseSound.play();

                preferencesButton.classList.add("off");
                preferencesButton.classList.remove("on");

				soundControlButton.classList.add("off");
				soundControlButton.classList.remove("on");

                movieModeButton.classList.add("off");
                movieModeButton.classList.remove("on");				
        }

		// OPENTAB => CLOSEDTAB - PREFERENCESBUTTON
        //if preferences tab is already open and is clicked again, causing it to close //this also means hitting this button twice in a row
        else if ( (e.target.id === "preferencesButton" && preferencesButton.classList.contains("on") && movieModeButton.classList.contains("off") && soundControlButton.classList.contains("off"))  || (e.target.id === "preferencesButton" && preferencesButton.classList.contains("on")) ){

                tabCloseSound.play();

                preferencesButton.classList.add("off");
                preferencesButton.classList.remove("on");		

				soundControlButton.classList.add("off");
				soundControlButton.classList.remove("on");

                movieModeButton.classList.add("off");
                movieModeButton.classList.remove("on");		
        }

		// OPENTAB => CLOSEDTAB - SOUNDCONTROLBUTTON
        //if soundControl tab is already open and is clicked again, causing it to close //this also means hitting this button twice in a row 
        else if ( (e.target.id === "soundControlButton" && soundControlButton.classList.contains("on") && movieModeButton.classList.contains("off") && preferencesButton.classList.contains("off"))  || (e.target.id === "soundControlButton" && soundControlButton.classList.contains("on")) ){

                tabCloseSound.play();

				soundControlButton.classList.add("off");
				soundControlButton.classList.remove("on");

                preferencesButton.classList.add("off");
                preferencesButton.classList.remove("on");	
	
                movieModeButton.classList.add("off");
                movieModeButton.classList.remove("on");		
        }

		//-

		// OPEN - MOVIEMODE TAB => PREFERENCES TAB
        //if movieModeButton is on and you click preferencesButton // moving from movie tab to pref tab
        else if ( (e.target.id === "preferencesButton") && (preferencesButton.classList.contains("off")) && (movieModeButton.classList.contains("on")) ){

            tabSlideSound.play();

            preferencesButton.classList.add("on");
            preferencesButton.classList.remove("off");

            movieModeButton.classList.remove("on");
            movieModeButton.classList.add("off");
        }

		// OPEN - MOVIEMODE TAB => SOUNDCONTROL TAB
        //if movieModeButton is on and you click soundControlButton // moving from movie tab to soundControl tab
        else if ( (e.target.id === "soundControlButton") && (soundControlButton.classList.contains("off")) && (movieModeButton.classList.contains("on")) ){

            tabSlideSound.play();

            soundControlButton.classList.add("on");
            soundControlButton.classList.remove("off");

            movieModeButton.classList.remove("on");
            movieModeButton.classList.add("off");
        }

		// OPEN - PREFENCES TAB => MOVIEMODE TAB
        //if preferencesButton is on and you click movieModeButton // moving from pref tab to movie tab
        else if ( (e.target.id === "movieModeButton") && (movieModeButton.classList.contains("off")) && (preferencesButton.classList.contains("on")) ){

            tabSlideSound.play();

            preferencesButton.classList.remove("on");
            preferencesButton.classList.add("off");

            movieModeButton.classList.add("on");
            movieModeButton.classList.remove("off");
        }

		// OPEN - PREFERENCES TAB => SOUNDCONTROL TAB
        //if preferencesButton is on and you click soundControlButton // moving from pref tab to soundControlTab
        else if ( (e.target.id === "soundControlButton") && (soundControlButton.classList.contains("off")) && (preferencesButton.classList.contains("on")) ){

            tabSlideSound.play();

            soundControlButton.classList.add("on");
            soundControlButton.classList.remove("off");

            preferencesButton.classList.add("off");
            preferencesButton.classList.remove("on");
        }

		// OPEN - SOUNDCONTROL TAB => PREFERENCES TAB
        //if soundControlButton is on and you click preferencesButton // moving from soundControl tab to pref tab
        else if ( (e.target.id === "preferencesButton") && (preferencesButton.classList.contains("off")) && (soundControlButton.classList.contains("on")) ){

            tabSlideSound.play();

            preferencesButton.classList.add("on");
            preferencesButton.classList.remove("off");

            soundControlButton.classList.add("off");
            soundControlButton.classList.remove("on");
        }

		// OPEN - SOUNDCONTROL TAB => MOVIEMODE TAB
        //if soundControlButton is on and you click movieModeButton // moving from soundControl tab to movieMode tab
        else if ( (e.target.id === "movieModeButton") && (movieModeButton.classList.contains("off")) && (soundControlButton.classList.contains("on")) ){

            tabSlideSound.play();

            movieModeButton.classList.add("on");
            movieModeButton.classList.remove("off");

            soundControlButton.classList.add("off");
            soundControlButton.classList.remove("on");
        }


    }



    //ADAPTIVE TAB BUTTONS FUNCTIONS 
	

    var bottomBar = document.querySelector(".smallScreenBottomBar");
    //function adaptiveTabButtonFunction(){
        bottomBar.addEventListener("click",function(e){

        //
        //if (e.target.type === "div"){

			// ADAPTIVE - CLOSED TAB => OPENTAB - MOVIEMODEBUTTON
            //if no buttons have been pressed yet and movieButton is the first button pressed
            if ( (e.target.id === "adaptiveMovieModeButton") && (adaptiveMovieModeButton.classList.contains("off")) && (adaptivePreferencesButton.classList.contains("off")) && (adaptiveSoundControlButton.classList.contains("off")) ){

                tabOpenSound.play();

                adaptiveMovieModeButton.classList.add("on");
                adaptiveMovieModeButton.classList.remove("off");
            }
			
			//  ADAPTIVE - CLOSED TAB => OPEN TAB = PREFERENCESBUTTON
            //if no buttons have been pressed yet and preferenceButton is the first button pressed
            else if ( (e.target.id === "adaptivePreferencesButton") && (adaptivePreferencesButton.classList.contains("off")) && (adaptiveMovieModeButton.classList.contains("off")) && (adaptiveSoundControlButton.classList.contains("off")) ){

                tabOpenSound.play();

                adaptivePreferencesButton.classList.add("on");
                adaptivePreferencesButton.classList.remove("off");
            }

			//  ADAPTIVE - CLOSED TAB => OPEN TAB = SOUNDCONTROL BUTTON
            //if no buttons have been pressed yet and preferenceButton is the first button pressed
			else if ( (e.target.id === "adaptiveSoundControlButton") && (adaptivePreferencesButton.classList.contains("off")) && (adaptiveMovieModeButton.classList.contains("off")) && (adaptiveSoundControlButton.classList.contains("off")) ){

				tabOpenSound.play();
				
				adaptiveSoundControlButton.classList.add("on");
				adaptiveSoundControlButton.classList.remove("off");
			}

			//-
			
			//  ADAPTIVE - OPEN TAB => CLOSEDTAB - MOVIEMODE BUTTON
            //if movie mode tab already is open and is clicked again, causing it to close //this also means hitting this button twice in a row
            else if ( (e.target.id === "adaptiveMovieModeButton" && adaptiveMovieModeButton.classList.contains("on") && adaptivePreferencesButton.classList.contains("off") && adaptiveSoundControlButton.classList.contains("off") ) || (e.target.id === "adaptiveMovieModeButton" && adaptiveMovieModeButton.classList.contains("on")) ){

                    tabCloseSound.play();

                    adaptivePreferencesButton.classList.add("off");
                    adaptivePreferencesButton.classList.remove("on");

                    adaptiveSoundControlButton.classList.add("off");
                    adaptiveSoundControlButton.classList.remove("on");

                    adaptiveMovieModeButton.classList.add("off");
                    adaptiveMovieModeButton.classList.remove("on");				
            }
			
			//  ADAPTIVE - OPEN TAB => CLOSED TAB - PREFERENCES BUTTON
            //if preferences tab is already open and is clicked again, causing it to close //this also means hitting this button twice in a row
            else if ( (e.target.id === "adaptivePreferencesButton" && adaptivePreferencesButton.classList.contains("on") && adaptiveMovieModeButton.classList.contains("off")) && adaptiveSoundControlButton.classList.contains("off")  || (e.target.id === "adaptivePreferencesButton" && adaptivePreferencesButton.classList.contains("on")) ){

                    tabCloseSound.play();

                    adaptivePreferencesButton.classList.add("off");
                    adaptivePreferencesButton.classList.remove("on");	

                    adaptiveSoundControlButton.classList.add("off");
                    adaptiveSoundControlButton.classList.remove("on");
	
                    adaptiveMovieModeButton.classList.add("off");
                    adaptiveMovieModeButton.classList.remove("on");		
            }

			//  ADAPTIVE - OPEN TAB => CLOSED TAB - SOUNDCONTROL BUTTON
            //if soundcontrol tab is already open and is clicked again, causing it to close //this also means hitting this button twice in a row
            else if ( (e.target.id === "adaptiveSoundControlButton" && adaptiveSoundControlButton.classList.contains("on") && adaptiveMovieModeButton.classList.contains("off") && adaptivePreferencesButton.classList.contains("off") )  || (e.target.id === "adaptiveSoundControlButton" && adaptiveSoundControlButton.classList.contains("on")) ){

                    tabCloseSound.play();

                    adaptiveSoundControlButton.classList.add("off");
                    adaptiveSoundControlButton.classList.remove("on");

                    adaptivePreferencesButton.classList.add("off");
                    adaptivePreferencesButton.classList.remove("on");	
	
                    adaptiveMovieModeButton.classList.add("off");
                    adaptiveMovieModeButton.classList.remove("on");		
            }

			//-

			//  ADAPTIVE - OPEN - MOVIEMODE TAB => PREFERENCES TAB
            //if movieModeButton is on and you click preferencesButton // moving from movie tab to pref tab
            else if ( (e.target.id === "adaptivePreferencesButton") && (adaptivePreferencesButton.classList.contains("off")) && (adaptiveMovieModeButton.classList.contains("on")) ){

                tabSlideSound.play();

                adaptivePreferencesButton.classList.add("on");
                adaptivePreferencesButton.classList.remove("off");

                adaptiveMovieModeButton.classList.remove("on");
                adaptiveMovieModeButton.classList.add("off");
            }

			//  ADAPTIVE - OPEN - MOVIEMODE TAB => SOUNDCONTROL TAB
            //if movieModeButton is on and you click soundControlButton // moving from movie tab to soundcontrol tab
            else if ( (e.target.id === "adaptiveSoundControlButton") && (adaptiveSoundControlButton.classList.contains("off")) && (adaptiveMovieModeButton.classList.contains("on")) ){

                tabSlideSound.play();

                adaptiveSoundControlButton.classList.add("on");
                adaptiveSoundControlButton.classList.remove("off");

                adaptiveMovieModeButton.classList.remove("on");
                adaptiveMovieModeButton.classList.add("off");
            }


			//  ADAPTIVE - OPEN - PREFERENCES TAB => MOVIEMODE TAB
            //if preferencesButton is on and you click movieModeButton // moving from pref tab to movie tab
            else if ( (e.target.id === "adaptiveMovieModeButton") && (adaptiveMovieModeButton.classList.contains("off"))&&(adaptivePreferencesButton.classList.contains("on")) ){

                tabSlideSound.play();

                adaptivePreferencesButton.classList.remove("on");
                adaptivePreferencesButton.classList.add("off");

                adaptiveMovieModeButton.classList.add("on");
                adaptiveMovieModeButton.classList.remove("off");
            }
			
			//  ADAPTIVE - OPEN - PREFERENCES TAB => SOUNDCONTROL TAB
            //if preferencesButton is on and you click movieModeButton // moving from pref tab to movie tab
            else if ( (e.target.id === "adaptiveSoundControlButton") && (adaptiveSoundControlButton.classList.contains("off")) && (adaptivePreferencesButton.classList.contains("on")) ){

                tabSlideSound.play();

                adaptiveSoundControlButton.classList.add("on");
                adaptiveSoundControlButton.classList.remove("off");

                adaptivePreferencesButton.classList.remove("on");
                adaptivePreferencesButton.classList.add("off");
            }

			//  ADAPTIVE - OPEN - SOUNDCONTROL TAB => PREFERENCES TAB
            //if soundControlButton is on and you click preferencesButton // moving from soundControl tab to pref tab
            else if ( (e.target.id === "adaptivePreferencesButton") && (adaptivePreferencesButton.classList.contains("off")) && (adaptiveSoundControlButton.classList.contains("on")) ){

                tabSlideSound.play();

                adaptivePreferencesButton.classList.add("on");
                adaptivePreferencesButton.classList.remove("off");

                adaptiveSoundControlButton.classList.add("off");
                adaptiveSoundControlButton.classList.remove("on");
            }

			//  ADAPTIVE - OPEN - SOUNDCONTROL TAB => MOVIEMODE TAB
            //if soundControlButton is on and you click movieModeButton // moving from soundControl tab to movieMode tab
            else if ( (e.target.id === "adaptiveMovieModeButton") && (adaptiveMovieModeButton.classList.contains("off")) && (adaptiveSoundControlButton.classList.contains("on")) ){

                tabSlideSound.play();

                adaptiveMovieModeButton.classList.add("on");
                adaptiveMovieModeButton.classList.remove("off");

                adaptiveSoundControlButton.classList.add("off");
                adaptiveSoundControlButton.classList.remove("on");
            }

		});

    //info button sound code

    infoButton.addEventListener("click",function (e){

        if (infoButton.classList.contains("off")){
            infoButton.classList.remove("off");
            infoButton.classList.add("on");
            tabOpenSound.play(); 
        }
        else if (infoButton.classList.contains("on")){
            infoButton.classList.remove("on");
            infoButton.classList.add("off");
            tabCloseSound.play();   
        }
    });


//SOUND LEVEL CODE
//............................................................................................................................

    //MUSIC SOUND LEVEL CODE
    //.....
        musicLevelContainer.addEventListener("click", function(event){

            //clears the color from the sound level bars
            function clearBarsColour (){

                for (var i=0; i<musicLevelBar.length; i++){

                    if (musicLevelBar[i].classList.contains("barOn")){

                        musicLevelBar[i].classList.remove("barOn");
                        musicLevelBar[i].classList.add("barOff");
                    }
                }
            }

            //MUSIC LEVEL BAR ONE CLICK
            //if musicLevelBarOne is pressed, make soundLevel .2 and the relevant bars green
            if (event.target.id === "musicLevelOne"){

                clearBarsColour();

                //set new volume level
                musicCurrentVolume = .2;
                songLoop.volume = musicCurrentVolume;

                //make relevant classes have "barOn"
                musicLevelOne.classList.add("barOn");

                musicFadeTime = 50;
            }

            //MUSIC LEVEL BAR TWO CLICK
            //if musicLevelBarTWO is pressed, make soundLevel .4 and the relevant bars green
            if (event.target.id === "musicLevelTwo"){

                clearBarsColour();

                //set new volume level
                musicCurrentVolume = .4;
                songLoop.volume = musicCurrentVolume;

                //make relevant classes have "barOn"
                musicLevelOne.classList.add("barOn");
                musicLevelTwo.classList.add("barOn");

                musicFadeTime = 30;
            }

            //MUSIC LEVEL BAR THREE CLICK
            //if musicLevelBarThree is pressed, make soundLevel .6 and the relevant bars green
            if (event.target.id === "musicLevelThree"){

                clearBarsColour();

                //set new volume level
                musicCurrentVolume = .6;
                songLoop.volume = musicCurrentVolume;

                //make relevant classes have "barOn"
                musicLevelOne.classList.add("barOn");
                musicLevelTwo.classList.add("barOn");
                musicLevelThree.classList.add("barOn");

                musicFadeTime = 20;
            }

            //MUSIC LEVEL BAR FOUR CLICK
            //if musicLevelBarFour is pressed, make soundLevel .8 and the relevant bars green
            if (event.target.id === "musicLevelFour"){

                clearBarsColour();

                //set new volume level
                musicCurrentVolume = .8;
                songLoop.volume = musicCurrentVolume;

                //make relevant classes have "barOn"
                musicLevelOne.classList.add("barOn");
                musicLevelTwo.classList.add("barOn");
                musicLevelThree.classList.add("barOn");
                musicLevelFour.classList.add("barOn");

                musicFadeTime = 15;
            }

            //MUSIC LEVEL BAR FIVE CLICK
            //if musicLevelBarFive is pressed, make soundLevel 1 and the relevant bars green
            if (event.target.id === "musicLevelFive"){

                clearBarsColour();

                //set new volume level
                musicCurrentVolume = 1;
                songLoop.volume = musicCurrentVolume;

                //make relevant classes have "barOn"
                musicLevelOne.classList.add("barOn");
                musicLevelTwo.classList.add("barOn");
                musicLevelThree.classList.add("barOn");
                musicLevelFour.classList.add("barOn");
                musicLevelFive.classList.add("barOn");

                musicFadeTime = 10;
            }
        });

    //SFX SOUND LEVEL CODE
    //.....
        sfxLevelContainer.addEventListener("click", function(event){

            //clears the color from the sound level bars
            function clearBarsColour (){

                for (var i=0; i<sfxLevelBar.length; i++){

                    if (sfxLevelBar[i].classList.contains("barOn")){

                        sfxLevelBar[i].classList.remove("barOn");
                        sfxLevelBar[i].classList.add("barOff");
                    }
                }
            }

            //SFX LEVEL BAR ONE CLICK
            //if sfxLevelBarOne is pressed, make soundLevel .2 and the relevant bars green
            if (event.target.id === "sfxLevelOne"){

                clearBarsColour();

                //set new volume level
                sfxCurrentVolume = .1;
                tabSlideSound.volume = sfxCurrentVolume;
                tabCloseSound.volume = sfxCurrentVolume;
                tabOpenSound.volume = sfxCurrentVolume;
                normalClickAudio.volume = sfxCurrentVolume;
                quickClickAudio.volume = sfxCurrentVolume;
                quickClickTwoAudio.volume = sfxCurrentVolume
                innerButtonClickAudio.volume = sfxCurrentVolume;

                //make relevant classes have "barOn"
                sfxLevelOne.classList.add("barOn");
            }

            //SFX LEVEL BAR TWO CLICK
            //if sfxLevelBarTwo is pressed, make soundLevel .4 and the relevant bars green
            if (event.target.id === "sfxLevelTwo"){

                clearBarsColour();

                //set new volume level
                sfxCurrentVolume = .2;
                tabSlideSound.volume = sfxCurrentVolume;
                tabCloseSound.volume = sfxCurrentVolume;
                tabOpenSound.volume = sfxCurrentVolume;
                normalClickAudio.volume = sfxCurrentVolume;
                quickClickAudio.volume = sfxCurrentVolume;
                quickClickTwoAudio.volume = sfxCurrentVolume
                innerButtonClickAudio.volume = sfxCurrentVolume;

                //make relevant classes have "barOn"
                sfxLevelOne.classList.add("barOn");
                sfxLevelTwo.classList.add("barOn");
            }

            //SFX LEVEL BAR THREE CLICK
            //if sfxLevelBarThree is pressed, make soundLevel .6 and the relevant bars green
            if (event.target.id === "sfxLevelThree"){

                clearBarsColour();

                //set new volume level
                sfxCurrentVolume = .4;
                tabSlideSound.volume = sfxCurrentVolume;
                tabCloseSound.volume = sfxCurrentVolume;
                tabOpenSound.volume = sfxCurrentVolume;
                normalClickAudio.volume = sfxCurrentVolume;
                quickClickAudio.volume = sfxCurrentVolume;
                quickClickTwoAudio.volume = sfxCurrentVolume
                innerButtonClickAudio.volume = sfxCurrentVolume;

                //make relevant classes have "barOn"
                sfxLevelOne.classList.add("barOn");
                sfxLevelTwo.classList.add("barOn");
                sfxLevelThree.classList.add("barOn");
            }

            //SFX LEVEL BAR FOUR CLICK
            //if sfxLevelBarFour is pressed, make soundLevel .8 and the relevant bars green
            if (event.target.id === "sfxLevelFour"){

                clearBarsColour();

                //set new volume level
                sfxCurrentVolume = .7;
                tabSlideSound.volume = sfxCurrentVolume;
                tabCloseSound.volume = sfxCurrentVolume;
                tabOpenSound.volume = sfxCurrentVolume;
                normalClickAudio.volume = sfxCurrentVolume;
                quickClickAudio.volume = sfxCurrentVolume;
                quickClickTwoAudio.volume = sfxCurrentVolume
                innerButtonClickAudio.volume = sfxCurrentVolume;

                //make relevant classes have "barOn"
                sfxLevelOne.classList.add("barOn");
                sfxLevelTwo.classList.add("barOn");
                sfxLevelThree.classList.add("barOn");
                sfxLevelFour.classList.add("barOn");
            }

            //SFX LEVEL BAR FIVE CLICK
            //if sfxLevelBarFive is pressed, make soundLevel 1 and the relevant bars green
            if (event.target.id === "sfxLevelFive"){

                clearBarsColour();

                //set new volume level
                sfxCurrentVolume = 1;
                tabSlideSound.volume = sfxCurrentVolume;
                tabCloseSound.volume = sfxCurrentVolume;
                tabOpenSound.volume = sfxCurrentVolume;
                normalClickAudio.volume = sfxCurrentVolume;
                quickClickAudio.volume = sfxCurrentVolume;
                quickClickTwoAudio.volume = sfxCurrentVolume
                innerButtonClickAudio.volume = sfxCurrentVolume;

                //make relevant classes have "barOn"
                sfxLevelOne.classList.add("barOn");
                sfxLevelTwo.classList.add("barOn");
                sfxLevelThree.classList.add("barOn");
                sfxLevelFour.classList.add("barOn");
                sfxLevelFive.classList.add("barOn");
            }
        });
