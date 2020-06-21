//GLOBAL VARIABLES AND SHIT
//....................................................................
    var winScroll = "";
    //MAKE INTO ALPHABETICAL ORDER WHEN YOU CLEAN UP PLS
    var topNavBar = document.querySelector(".page-head");
    var controlIcon = document.querySelectorAll(".controlIcon");
    var controlTab = document.querySelectorAll(".controlTab");
    var movieModeContainer = document.querySelector(".movieModeContainer");
    var adaptiveMovieModeContainer = document.querySelector(".adaptiveMovieModeContainer");
    var wavefmLogo = document.querySelector(".waveFm");	
    var pintrestView = document.querySelector(".pintrestView");
    var fbTimelineView = document.querySelector(".fbTimeline");
    var myView = document.querySelector(".myView");
	var myViewImageWrapper = document.querySelector("#myViewImageWrapper");//myView images only, not including arrows
    var infoPicView = document.querySelector(".infoPicWrap");
    var exitInfoButton = document.querySelector("#exitInfo");
    

    var menuOptionDisplayElement = document.querySelectorAll(".menuOptionDisplayElement");
    var infoAboutDisplayWrap = document.querySelector("#infoAboutDisplayWrap");
    var infoInstructionsDisplayWrap= document.querySelector("#infoInstructionsDisplayWrap");
    var infoContactDisplayWrap = document.querySelector("#InfoContactDisplayWrap");
    var infoMenuIcon = document.querySelector("#infoMenuIcon");
    var infoMenuNavWrap = document.querySelector("#infoMenuNav");
    var infoMenuAbout = document.querySelector("#menuOptionAbout");
    var infoMenuInstructions = document.querySelector("#menuOptionInstructions");
    var infoMenuContact = document.querySelector("#menuOptionContact");
    var infoMenuElement = document.querySelectorAll(".infoMenuElement");
    var emailLinkWords = document.querySelector("#emailLinkWords");
    var infoContactElement = document.querySelectorAll(".infoContactElement");
    var infoPicBrightnessFilter = document.querySelector("#infoPicBrightnessFilter");

    var displayButton = document.querySelector(".displayButton");
    var adaptiveDisplayButton = document.querySelector(".adaptiveDisplayButton");
    var preferencesButton = document.querySelector(".preferencesButton");
    var AdaptivePreferencesButton = document.querySelector(".adaptivePreferencesIcon");
    var movieModeButton = document.querySelector(".movieModeButton");
    var movieModeButtonAdaptive = document.querySelector(".movieModeButtonAdaptive");
	var soundControlButton = document.querySelector(".soundControlButton");
	var adaptiveSoundControlButton = document.querySelector(".adaptiveSoundControl");
    var infoButton = document.querySelector(".infoButton");
	
	var soundControlContainer = document.querySelector(".soundControlContainer");
    var adaptiveSoundControlContainer = document.querySelector(".adaptiveSoundControlContainer");
//    var infoArrow = document.querySelector(".infoArrow");
    var photoViewSection = document.querySelector("#photoViewSection");
    var prefCheckBox = document.querySelector(".preferenceCheckbox");
    var movieModeToggleWrap = document.querySelector(".movieModeToggleWrap"); //button WRAP to turn on movie mode
    var movieModeToggle = document.querySelector(".movieModeToggle"); //button WRAP to turn on movie mode
    var powerSymbolOn = document.querySelector(".powerSymbolOn");
    var powerSymbolOff = document.querySelector(".powerSymbolOff");
    var topPageArrowContainer = document.querySelector(".topPageArrowContainer");// arrow that takes you back to top of screen 
    var searchBox = document.querySelector("input.search-box");
	var musicIconDesktop = document.querySelector(".musicIconDesktop");
    var soundIconDesktop = document.querySelector(".soundIconDesktop");
	var musicOnDesktop = document.querySelector(".musicOnIconDesktop");
	var musicMuteDesktop = document.querySelector(".musicMuteIconDesktop");
	var sfxIconDesktop = document.querySelector(".sfxIconDesktop")
	var sfxOnDesktop = document.querySelector(".sfxOnIconDesktop");
	var sfxMuteDesktop = document.querySelector(".sfxMuteIconDesktop");

    var sfxLevelOne = document.querySelector(".sfxLevelOne");
    var sfxLevelTwo = document.querySelector(".sfxLevelTwo");
    var sfxLevelThree = document.querySelector(".sfxLevelThree");
    var sfxLevelFour = document.querySelector(".sfxLevelFour");
    var sfxLevelFive = document.querySelector(".sfxLevelFive");
    var musicLevelOne = document.querySelector(".musicLevelOne");
    var musicLevelTwo = document.querySelector(".musicLevelTwo");
    var musicLevelThree = document.querySelector(".musicLevelThree");
    var musicLevelFour = document.querySelector(".musicLevelFour");
    var musicLevelFive = document.querySelector(".musicLevelFive");

    var sfxLevelContainer = document.querySelector(".sfxLevelContainer");
    var musicLevelContainer = document.querySelector(".musicLevelContainer");
    var sfxLevelBar = document.querySelectorAll(".sfxLevelBar");
    var musicLevelBar = document.querySelectorAll(".musicLevelBar");

    var rightArrow = document.querySelector(".rightArrow");
    var leftArrow = document.querySelector(".leftArrow");
    var arrow = document.querySelectorAll(".arrow");
	
	var tabButtons = document.querySelector(".tabButtons");
	var adaptiveTabButtons = document.querySelector(".adaptiveTabButtons");

    var img = document.querySelectorAll(".img");
    var pImg = document.querySelectorAll(".pImg");
    pImg = Array.prototype.slice.call(pImg);
    var fbImg = document.querySelectorAll(".fbImg");
    fbImg = Array.prototype.slice.call(fbImg);
    var mainImg = document.querySelectorAll(".mainImg");

    var dnFacebook = fbTimelineView.classList.contains("displayNone");
    var dnPintrest = pintrestView.classList.contains("displayNone");
    var dnInfoPic = infoPicView.classList.contains("displayNone");
    var dnmyView = myView.classList.contains("displayNone");
    var dnpc = document.querySelector(".dnPrefContainer"); //displayNone wrap wrapping entire prefcontainer

    var buttonDisable = document.querySelector(".buttonDisable");

    var currentView = "myView";

    var selected = {};
    var prefContainer = document.querySelector(".prefContainer");
    var formCheckBox = document.querySelectorAll(".formCheckBox");
    var formBox = document.querySelector(".formBox");
    var adaptiveFormBox = document.querySelector(".adaptiveFormBox");

    var retroCB = document.querySelector(".newCheckBox.retroCB");
    var vaporWaveCB = document.querySelector(".newCheckBox.vaporWaveCB");
    var cyberPunkCB = document.querySelector(".newCheckBox.cyberPunkCB");

    var songLoop = document.querySelector("audio.songLoop");

//    document.querySelector(".vaporWaveCB").value = ".displayImgVaporWave";
//    document.querySelector(".cyberPunkCB").value = ".displayImgCyberPunk";
//    document.querySelector(".retroCB").value = ".displayImgRetro";
    

//    document.querySelector(".cyberPunkCB").checked = true;
//    document.querySelector(".vaporWaveCB").checked = true;
//    document.querySelector(".retroCB").checked = false;
    
    //adaptive variables
    var adaptivePreferencesButton = document.querySelector(".adaptivePreferencesIcon");
    var adaptiveMovieModeButton = document.querySelector(".movieModeButtonAdaptive"); 

    // pintrest class variables
    var pImgCyberPunk = document.querySelectorAll(".pImgCyberPunk");
    pImgCyberPunk = Array.prototype.slice.call(pImgCyberPunk);
    var pImgRetro = document.querySelectorAll(".pImgRetro");
    pImgRetro = Array.prototype.slice.call(pImgRetro);
    var pImgVaporWave = document.querySelectorAll(".pImgVaporWave");
    pImgVaporWave = Array.prototype.slice.call(pImgVaporWave);

    //mainImg class variables//all are converted to arrays
    var mainImgCyberPunk = document.querySelectorAll(".mainImgCyberPunk");
    mainImgCyberPunk = Array.prototype.slice.call(mainImgCyberPunk);
    var mainImgRetro = document.querySelectorAll(".mainImgRetro");
    mainImgRetro = Array.prototype.slice.call(mainImgRetro);
    var mainImgVaporWave = document.querySelectorAll(".mainImgVaporWave");
    mainImgVaporWave = Array.prototype.slice.call(mainImgVaporWave);

    //fbImg class variables//all are converted to arrays
    var fbImgCyberPunk = document.querySelectorAll(".fbImgCyberPunk");
    fbImgCyberPunk = Array.prototype.slice.call(fbImgCyberPunk);
    var fbImgRetro = document.querySelectorAll(".fbImgRetro");
    fbImgRetro = Array.prototype.slice.call(fbImgRetro);
    var fbImgVaporWave = document.querySelectorAll(".fbImgVaporWave");
    fbImgVaporWave = Array.prototype.slice.call(fbImgVaporWave);

	var dnFacebook = fbTimelineView.classList.contains("displayNone");
	var dnPintrest = pintrestView.classList.contains("displayNone");
	var dnInfoPic = infoPicView.classList.contains("displayNone");
	var dnmyView = myView.classList.contains("displayNone");
// GLOBAL PREFERENCES CODE
//..................................................................
    var drivingCheckBox = document.querySelector(".cBDrivingShot");
    var vaporWaveCheckBox = document.querySelector(".cBVaporwaveShot");
    var cyberPunkCheckBox = document.querySelector(".cBCyberPunkShot");
    var gridWorkCheckBox = document.querySelector(".cBGridWorkShot");
    var retroSunCheckBox = document.querySelector(".cBRetroSun");
    var bitShotCheckBox = document.querySelector(".cBBitShot");
    var retroCheckBox = document.querySelector(".cBRetroShot");
    var treeCheckBox = document.querySelector(".cBTree");
    var computerCheckBox = document.querySelector("cBComputer");
    var spaceCheckBox = document.querySelector(".cBSpace");
    var textCheckBox = document.querySelector(".cBText");
    var portraitCheckBox = document.querySelector(".cBPortrait");
    var gameCheckBox = document.querySelector(".cBGameRelated");
    var arcadeCheckBox = document.querySelector(".cBArcade");
    var movieCheckBox = document.querySelector(".cBMovieRelated");
    var cityCheckBox = document.querySelector(".cBcityRelated");
    var futuristicCheckBox = document.querySelector(".cBFuturistic");


//SHIT THAT RUNS STRAIGHT AWAY
//.......................................................................................
    var arrowCounter = 1; //pertains to img array length
    var mmx = 0; // pertains to the current img number 
    //Pic counters for tracking myView imgs
    var drivingShotPicCounter = 0;
    var cyberPunkPicCounter = 0;
    var vaporWavePicCounter = 0;
    var gridWorkPicCounter = 0;
    var retroSunPicCounter = 0;
    var bitPicCounter = 0;
    var retroPicCounter = 0;
    var treePicCounter = 0;
    var computerPicCounter = 0;
    var spacePicCounter = 0;
    var textPicCounter = 0;
    var portraitPicCounter = 0;
    var gamePicCounter = 0;
    var arcadePicCounter = 0;
    var moviePicCounter = 0;
    var cityPicCounter = 0;
    var futuristicPicCounter = 0;
    var technologicPicCounter = 0;
    //making the default working array cyberpunk as thats the default checked checkbox
    var workingArray = [];
    var comViewWorkingArray = [];
    //sets the default volume of sfx and music
    var sfxCurrentVolume = .8;
    var musicCurrentVolume = .2;

    var mode = "desktop";

    //delay arrows from showing on screen cause they glitch on load otherwise
    setTimeout((function(){ 
        for (var i = 0; i<arrow.length;i++){
            arrow[i].classList.remove("visibilityNone");
        } 
	       wavefmLogo.classList.remove("visibilityNone");  
    }),500);

//mute all sfx
//	normalClickAudio.muted = true;
//	innerButtonClickAudio.muted = true;
//	quickClickAudio.muted = true;
//	quickClickTwoAudio.muted = true;
//	tabOpenSound.muted = true;
//	tabCloseSound.muted = true;
//	tabSlideSound.muted = true;








//    if (window.innerWidth>1100){
//        console.log("we are da WERK");
//        workingArray = mainImgCyberPunk;
//        workingArray = Array.prototype.slice.call(workingArray);
//        workingArray[mmx].classList.remove("displayNone");
//    }
//
//    //default start page if screen is less than 1100px wide
//    //.......................................................................
//    else{
//
//        currentView = "facebookView";
//
//        for (var i = 0; i<formCheckBox.length; i++){
//            formCheckBox[i].checked = false;
//        }
//
//        formCheckBox[2].checked = true; 
//
//        var displayImgCyberPunk = document.querySelectorAll(".displayImgCyberPunk");
//
//        for (var i = 0; i<displayImgCyberPunk.length; i++){
//            displayImgCyberPunk[i].classList.remove("displayNone");
//        }
//
//        workingArray = [];
//
//        myView.classList.add("displayNone");
//        fbTimelineView.classList.remove("displayNone");
//
////            for (var i = 0; i<formCheckBox.length; i++){
////
////                if (!formCheckBox[i].checked) {
////                    formCheckBox[i].checked = true;
////                    selected[formCheckBox[i].value] = true;
////
////             var cssRules = Object.keys(selected).join(",") + "{ display: block !important; }";
////             document.querySelector("style#preferences").textContent = cssRules;
////                }
////            }
////            values = [];
////            searchBox.value = "";
//    }
//console.log("times");
//debugger;
////FUNCTIONS ONLOAD
////..............................................................................
//
//
//
////window.onload = function() {
//    (function(){ 
//        //SHUFFLE IMAGES ONLOAD
//        setTimeout((function(){ 
//            photoViewSection.classList.remove("displayNone");        
//            imageShuffle();
//    //        leftArrow.classList.add("displayNone");
//    //        rightArrow.classList.add("displayNone");
//    //        myView.classList.remove("displayNone");
//        }),200);
//
//        //delay arrows from showing on screen cause they glitch on load otherwise
//        setTimeout((function(){ 
//            for (var i = 0; i<arrow.length;i++){
//                arrow[i].classList.remove("visibilityNone");
//            }
//        }),500);
//
//
//        //ADAPTIVE
//        //............
//            //IF IN ADAPTIVE MODE, CHANGE PREF BOX CLASS, COMVIEWOFF => COMVIEWON
//
//
//
//            if (window.innerWidth<1100){
//
//                mode = "adaptive";
//
//                formBox.classList.remove("comViewOff");
//                formBox.classList.add("comViewOn");
//
//                //add extra classes to containers for an event listener later on to  help with timeout of containers eg 10seconds
//    //            soundControlContainer.classList.add("adaptiveSoundControlContainer");
//    //            adaptiveSoundControlContainer = document.querySelector(".adaptiveSoundControlContainer");
//    //            formBox.classList.add("adaptiveFormBox");
//    //            adaptiveFormBox = document.querySelector(".adaptiveFormBox");
//    //            movieModeContainer.classList.add("adaptiveMovieModeContainer");
//    //            adaptiveMovieModeContainer = document.querySelector(".adaptiveMovieModeContainer");
//            }else if(window.innerWidth>110) {
//                soundControlContainer.classList.remove("adaptiveSoundControlContainer");
//                formBox.classList.remove("adaptiveFormBox");
//                movieModeContainer.classList.remove("adaptiveMovieModeContainer");
//            }
//        })();




