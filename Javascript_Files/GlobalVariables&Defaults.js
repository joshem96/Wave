//GLOBAL VARIABLES ETC
//............................................................................................................................

    //PAGE-HEAD DOM VARIABLES
    //....................................................................
        //PAGE-HEAD GLOBAL VARIABLES
            var pageHead = document.querySelector(".page-head"); //page-head wrap
            var infoPicCenter = document.querySelector(".infoPicCenter"); // wrap for infoView that covers entire photoview are underpage-head
            var topNavBar = document.querySelector(".page-head"); // page-head wrap
            var controlIcon = document.querySelectorAll(".controlIcon"); // preferences, moviemode and soundcontrol icons
            var controlTab = document.querySelectorAll(".controlTab"); // drop-down tab wrap-class for each controlIcon
	        var tabButtons = document.querySelector(".tabButtons"); // wrap for buttons with drop-down tab (pref,sound,movie)
        //WEBSITE LOGO
            var wavefmLogo = document.querySelector(".waveFm");	
        //SEARCHBAR
            var searchBox = document.querySelector("input.search-box"); // searchbox/searchbar input 
        //DISPLAY ICON
            var displayButton = document.querySelector(".displayButton"); // display icon
        //PREFERENCE ICON / DROP-DOWN TAB
            var preferencesButton = document.querySelector(".preferencesButton"); // preferences icon
            var dnpc = document.querySelector(".dnPrefContainer"); //displayNone wrap wrapping entire prefcontainer
            var prefContainer = document.querySelector(".prefContainer"); // wrap around preference drop-down tab
            var prefCheckBox = document.querySelector(".preferenceCheckbox"); // wrap around preference drop-down tab
            var formCheckBox = document.querySelectorAll(".formCheckBox"); // class on each individual check box
            var formBox = document.querySelector(".formBox"); // actual box the cbs are in
            var retroCB = document.querySelector(".newCheckBox.retroCB"); // outrun/retro checkbox
            var vaporWaveCB = document.querySelector(".newCheckBox.vaporWaveCB"); // vaporwave checkbox
            var cyberPunkCB = document.querySelector(".newCheckBox.cyberPunkCB"); // cyberpunk checkbox
            var songLoop = document.querySelector("audio.songLoop"); // song loop source variable
        //MOVIE ICON / DROP-DOWN TAB
            var movieModeButton = document.querySelector(".movieModeButton"); // movieMode icon
            var movieModeContainer = document.querySelector(".movieModeContainer"); // drop-down tab wrap for movie mode
            var movieModeToggleWrap = document.querySelector(".movieModeToggleWrap"); //button WRAP to turn on movie mode
            var movieModeToggle = document.querySelector(".movieModeToggle"); //button WRAP to turn on movie mode
            var powerSymbolOn = document.querySelector(".powerSymbolOn"); // power on img that appears when movie mode on
            var powerSymbolOff = document.querySelector(".powerSymbolOff"); // power off img that appears when movie mode off
        //SOUND ICON / DROP-DOWN TAB
            var soundControlButton = document.querySelector(".soundControlButton"); // soundcountrol icon
            var soundControlContainer = document.querySelector(".soundControlContainer"); // wrap around soundControl drop-down tab
            var musicIconDesktop = document.querySelector(".musicIconDesktop"); // music img icon
            var musicOnDesktop = document.querySelector(".musicOnIconDesktop"); // music on img
            var musicMuteDesktop = document.querySelector(".musicMuteIconDesktop"); // music mute img
            var musicLevelContainer = document.querySelector(".musicLevelContainer");
            var musicLevelBar = document.querySelectorAll(".musicLevelBar"); // class thats on all music level bars (sfx)
            var musicLevelOne = document.querySelector(".musicLevelOne"); // sound level one (music)
            var musicLevelTwo = document.querySelector(".musicLevelTwo"); // sound level two (music)
            var musicLevelThree = document.querySelector(".musicLevelThree"); // sound level three (music)
            var musicLevelFour = document.querySelector(".musicLevelFour"); // sound level four (music)
            var musicLevelFive = document.querySelector(".musicLevelFive"); // sound level five (music)
            var sfxIconDesktop = document.querySelector(".sfxIconDesktop"); // sfx img icon
            var sfxOnDesktop = document.querySelector(".sfxOnIconDesktop"); // sfx on img
            var sfxMuteDesktop = document.querySelector(".sfxMuteIconDesktop"); // sfx mute img
            var sfxLevelContainer = document.querySelector(".sfxLevelContainer"); // container wrapping sound level (sfx)
            var sfxLevelBar = document.querySelectorAll(".sfxLevelBar"); // class thats on all sound level bars (sfx)
            var sfxLevelOne = document.querySelector(".sfxLevelOne"); // sound level one (sfx)
            var sfxLevelTwo = document.querySelector(".sfxLevelTwo"); // sound level two (sfx)
            var sfxLevelThree = document.querySelector(".sfxLevelThree"); // sound level three (sfx)
            var sfxLevelFour = document.querySelector(".sfxLevelFour"); // sound level four (sfx)
            var sfxLevelFive = document.querySelector(".sfxLevelFive"); // sound level five (sfx)
        //INFO ICON / INFO WINDOW
            var infoButton = document.querySelector(".infoButton"); // icon for info button
            var infoPicView = document.querySelector(".infoPicWrap"); // whole infoview area wrap (entire window below page-head bar)
            var exitInfoButton = document.querySelector("#exitInfo"); // exit button in infoView window
            var infoMenuIcon = document.querySelector("#infoMenuIcon"); // menu button in info window ('click' & menu slides out)
            var infoMenuNavWrap = document.querySelector("#infoMenuNav"); // slide-out menu option wrap (about, instructions contact)
            var infoMenuAbout = document.querySelector("#menuOptionAbout"); // About tab in menu wrap
            var infoMenuInstructions = document.querySelector("#menuOptionInstructions"); // instructions tab in menu wrap
            var infoMenuContact = document.querySelector("#menuOptionContact"); // Contact tab in menu wrap 
            var infoMenuElement = document.querySelectorAll(".infoMenuElement"); // selects all menu options
            var menuOptionDisplayElement = document.querySelectorAll(".menuOptionDisplayElement"); // wrap for all displays in info window
            var infoPicBrightnessFilter = document.querySelector("#infoPicBrightnessFilter");
            var infoAboutDisplayWrap = document.querySelector("#infoAboutDisplayWrap"); // wrap content in info window (exluding above nav)
            var infoInstructionsDisplayWrap= document.querySelector("#infoInstructionsDisplayWrap"); // wrap around instructions display
            var infoContactDisplayWrap = document.querySelector("#InfoContactDisplayWrap"); // wrap around contact display
                var emailLinkWords = document.querySelector("#emailLinkWords"); // email span within contact
                var infoContactElement = document.querySelectorAll(".infoContactElement"); // wraps social media logos and email link

//---

    //VIEWING AREA VARIABLES
    //......................................................................................
        //GLOBAL VIEWING AREA VARIABLES
        //.......................................................
            var photoViewSection = document.querySelector("#photoViewSection"); // wrap around entire photoView Section
            var img = document.querySelectorAll(".img"); // class attached to every single display image
            var topPageArrowContainer = document.querySelector(".topPageArrowContainer");// arrow that takes you back to top of screen 
            var arrow = document.querySelectorAll(".arrow"); // selects all html dom arrows
            var comView;
        //MY-VIEW DOM VARIABLES
        //..................................................
            //dom var with all myView images 
            var mainImg = document.querySelectorAll(".mainImg");
            mainImg = Array.prototype.slice.call(mainImg);
            var myView = document.querySelector(".myView"); // whole myview area wrap (entire window below page-head bar)
            var myViewImageWrapper = document.querySelector("#myViewImageWrapper");//myView images only, not including arrows
            var rightArrow = document.querySelector(".rightArrow"); // right nav arrow
            var leftArrow = document.querySelector(".leftArrow"); // left nav arrow
            //mainImg class variables//all are converted to arrays
            var mainImgCyberPunk = document.querySelectorAll(".mainImgCyberPunk");
            mainImgCyberPunk = Array.prototype.slice.call(mainImgCyberPunk);
            var mainImgRetro = document.querySelectorAll(".mainImgRetro");
            mainImgRetro = Array.prototype.slice.call(mainImgRetro);
            var mainImgVaporWave = document.querySelectorAll(".mainImgVaporWave");
            mainImgVaporWave = Array.prototype.slice.call(mainImgVaporWave);
        //FACEBOOK-VIEW DOM VARIABLES
        //....................................................
            var fbTimelineView = document.querySelector(".fbTimeline"); // whole facebookview area wrap (entire window below page-head bar)
            //dom var with all facebook-view images 
            var fbImg = document.querySelectorAll(".fbImg");
            fbImg = Array.prototype.slice.call(fbImg);
            //fbImg class variables//all are converted to arrays
            var fbImgCyberPunk = document.querySelectorAll(".fbImgCyberPunk");
            fbImgCyberPunk = Array.prototype.slice.call(fbImgCyberPunk);
            var fbImgRetro = document.querySelectorAll(".fbImgRetro");
            fbImgRetro = Array.prototype.slice.call(fbImgRetro);
            var fbImgVaporWave = document.querySelectorAll(".fbImgVaporWave");
            fbImgVaporWave = Array.prototype.slice.call(fbImgVaporWave);
        //PINTREST-VIEW DOM VARIABLES
        //....................................................
            var pintrestView = document.querySelector(".pintrestView"); // whole pintrestview area wrap (entire window below page-head bar)
            //dom var with all pintrest-view images 
            var pImg = document.querySelectorAll(".pImg");
            pImg = Array.prototype.slice.call(pImg);
            // pintrest class variables
            var pImgCyberPunk = document.querySelectorAll(".pImgCyberPunk");
            pImgCyberPunk = Array.prototype.slice.call(pImgCyberPunk);
            var pImgRetro = document.querySelectorAll(".pImgRetro");
            pImgRetro = Array.prototype.slice.call(pImgRetro);
            var pImgVaporWave = document.querySelectorAll(".pImgVaporWave");
            pImgVaporWave = Array.prototype.slice.call(pImgVaporWave);

//---

    //ADAPTIVE VARIABLES
    //....................................................................
        //PAGE-HEAD (bottomBar) DOM VARIABLES
        //....................................................................
            //PAGE-HEAD(bottomBar) GLOBAL VARIABLES
                var bottomBar = document.querySelector(".smallScreenBottomBar");
            	var adaptiveTabButtons = document.querySelector(".adaptiveTabButtons");
            //WEBSITE LOGO

            //SEARCHBAR

            //DISPLAY ICON
                var adaptiveDisplayButton = document.querySelector(".adaptiveDisplayButton");
            //PREFERENCE ICON / DROP-DOWN TAB
                var adaptivePreferencesButton = document.querySelector(".adaptivePreferencesIcon");
                var AdaptivePreferencesButton = document.querySelector(".adaptivePreferencesIcon");
                var adaptiveFormBox = document.querySelector(".adaptiveFormBox");
            //MOVIE ICON / DROP-DOWN TAB
                var adaptiveMovieModeButton = document.querySelector(".movieModeButtonAdaptive"); 
                var movieModeButtonAdaptive = document.querySelector(".movieModeButtonAdaptive"); 
                var adaptiveMovieModeContainer = document.querySelector(".adaptiveMovieModeContainer");
            //SOUND ICON / DROP-DOWN TAB
            	var adaptiveSoundControlButton = document.querySelector(".adaptiveSoundControl");
                var adaptiveSoundControlContainer = document.querySelector(".adaptiveSoundControlContainer");
            //INFO ICON / INFO WINDOW
        //VIEWING AREA VARIABLES
        //....................................................................
            //MY-VIEW DOM VARIABLES
            //....................................................................

            //FACEBOOK-VIEW DOM VARIABLES
            //....................................................................

            //PINTREST-VIEW DOM VARIABLES
            //....................................................................

//---

//NON-DOM VARIABLES AND DEFAULT VARIABLES
//.......................................................................................
    // current mode/view variables 
        var currentView = "myView"; // pertains to the view mode user is currently in
        var mode = "desktop"; // desktop or adaptive modes
    // image arrays (where all images go into)
        var workingArray = [];
        var comViewWorkingArray = [];
    //Pic counters for tracking myView imgs
        var cyberPunkPicCounter = 0;
        var vaporWavePicCounter = 0;
        var retroPicCounter = 0;
        var arrowCounter = 1; //pertains to img array length
        var mmx = 0; // pertains to the current img number 
    //sets the default volume of sfx and music
        var sfxCurrentVolume = .8;
        var musicCurrentVolume = .2;







// OLD CODE VARIABLES THAT I MIGHT NEED
//..................................................................
    var selected = {};
//            var soundIconDesktop = document.querySelector(".soundIconDesktop");
//                var buttonDisable = document.querySelector(".buttonDisable"); // pointer: none styling
//    var dnFacebook = fbTimelineView.classList.contains("displayNone");
//    var dnPintrest = pintrestView.classList.contains("displayNone");
//    var dnInfoPic = infoPicView.classList.contains("displayNone");
//    var dnmyView = myView.classList.contains("displayNone");

//    var drivingCheckBox = document.querySelector(".cBDrivingShot");
//    var vaporWaveCheckBox = document.querySelector(".cBVaporwaveShot");
//    var cyberPunkCheckBox = document.querySelector(".cBCyberPunkShot");
//    var gridWorkCheckBox = document.querySelector(".cBGridWorkShot");
//    var retroSunCheckBox = document.querySelector(".cBRetroSun");
//    var bitShotCheckBox = document.querySelector(".cBBitShot");
//    var retroCheckBox = document.querySelector(".cBRetroShot");
//    var treeCheckBox = document.querySelector(".cBTree");
//    var computerCheckBox = document.querySelector("cBComputer");
//    var spaceCheckBox = document.querySelector(".cBSpace");
//    var textCheckBox = document.querySelector(".cBText");
//    var portraitCheckBox = document.querySelector(".cBPortrait");
//    var gameCheckBox = document.querySelector(".cBGameRelated");
//    var arcadeCheckBox = document.querySelector(".cBArcade");
//    var movieCheckBox = document.querySelector(".cBMovieRelated");
//    var cityCheckBox = document.querySelector(".cBcityRelated");
//    var futuristicCheckBox = document.querySelector(".cBFuturistic");



