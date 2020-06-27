//INFO/ABOUT CODE
//..........................................................................................................................................

    //info button protocol
    //....
    
    infoButton.addEventListener("click",infoButtonFunction);

        function infoButtonFunction (){
            controlTab.forEach( (controlTab) => controlTab.classList.add("displayNone") );
            controlIcon.forEach( (controlIcon) => controlIcon.classList.add("off") );
            topNavBar.style.filter = "brightness(25%)";
            topNavBar.style.pointerEvents = "none";
            //transition filter for adaptive mode bottom nav bar
            if (window.innerWidth < 1100){
                bottomBar.style.filter = "brightness(25%)";
                bottomBar.style.pointerEvents = "none";  
            }
            if (infoPicView.classList.contains("displayNone")){
                infoPicView.classList.remove("displayNone");
                photoViewSection.classList.add("displayNone");
            }else{
                infoPicView.classList.add("displayNone");
                photoViewSection.classList.remove("displayNone");
            }
        }

    //exit info section and return to whereever the uer was before clicking


    exitInfoButton.addEventListener("click",exitInfoFunction);

    function exitInfoFunction() {
        topNavBar.style.filter = "brightness(85%)";
        topNavBar.style.pointerEvents = "";
        infoPicView.classList.add("displayNone");
        photoViewSection.classList.remove("displayNone");
        infoButton.classList.remove("on");
        infoButton.classList.add("off");
        //transition filter for adaptive mode bottom nav bar
        if (window.innerWidth < 1100){
            bottomBar.style.filter = "";
            bottomBar.style.pointerEvents = "";    
        }
    }

    //INIT MENU ICON CLICK
    //.....

        //MENU ICON CLICK => INFO MENU APPEARS AND MENU ICON DISSAPPEARS, BRIGHTNESS FILTER TURNS ON
        infoMenuIcon.addEventListener("click", () =>{
            //set styling to darker for main info view and bright for menuOption
            infoMenuNavWrap.classList.remove("displayNone"); 
            infoMenuNavWrap.style.width = "250px";
            infoMenuNavWrap.style.opacity = "1";
            infoPicBrightnessFilter.style.opacity = "0.8";
            infoContactElement.forEach( (contactElement) => contactElement.classList.remove("zIndex5k") );//reduce contactElements zindex to 0
        });
        
    //MENU OPTION HOVER COLOUR CODE
    //..

        //js hover, where when each menu element is hover overed the colour shows a light purple 
        //this code wont run if the menu element is selected (in that case a constant thick purple will show)
        infoMenuNavWrap.onmouseover = function(){ infoMenuNavHover(event); };
        infoMenuNavWrap.onmouseout = function(){ infoMenuNavHoverOut(event); };

        //hover over function
        function infoMenuNavHover(event){
            var ET = event.target;

            // if menu element is not currently selected change colour on target when hovered over
            if ( !ET.classList.contains("menuElementSelected") && ET.classList.contains("infoMenuElement") ){
                ET.style.background = "rgba(95, 31, 168, .3)";
                ET.style.boxShadow = "0px 0px 10px 0px rebeccapurple";
            }
        }

        //hover out function
        function infoMenuNavHoverOut(event){
            var ET = event.target;

            // if menu element is not currently selected remove hover over colour on mouseout
            if ( !ET.classList.contains("menuElementSelected") && ET.classList.contains("infoMenuElement") ){
                ET.style.background = "";
                ET.style.boxShadow = "";
            }
        }

    //MENU OPTIN; SELECT COLOUR AND ASSIGN SELECTED OPTION CODE
    //..

        // if a menu option (eg about) has been "clicked"/selected, said menu option will get a constant darker purple colour to indicate it is the menu option currently selected
        infoMenuNavWrap.addEventListener("click", () => infoMenuNavSwitch(event) );

        function infoMenuNavSwitch(event){
            var ET = event.target;

            if (ET.classList.contains("infoMenuElement")){
                //clear each menu option of the possiblity of having .menuElementSelected (class that contains selected properties)
                infoMenuElement.forEach(function(menuOption){ menuOption.classList.remove("menuElementSelected"); });
                //clear any previous styling and add menuElementSelected to selected menuOption (eg "instructions")
                if(!ET.classList.contains("menuElementSelected")){
                    ET.style.background = "";
                    ET.style.boxShadow = "";
                    ET.classList.add("menuElementSelected");
                }

            //MENU OPTIN; SWITCH OPTION DISPLAY VIEWS CODE
            //..

                //add displayNone to each option view
                menuOptionDisplayElement.forEach(function(displayElement){ displayElement.classList.add("displayNone"); });

                //remove .displayNone from the selected optionView (eg instructions view) 
                if (ET.classList.contains("menuElementSelected")){
                    if (ET.id === "menuOptionAbout"){
                        infoAboutDisplayWrap.classList.remove("displayNone");
                    }
                    if (ET.id === "menuOptionInstructions"){
                        infoInstructionsDisplayWrap.classList.remove("displayNone");
                    }
                    if (ET.id === "menuOptionContact"){
                        //increase contactElements zindex to 5000 so clickables are above brightness filter
                        infoContactElement.forEach( (contactElement) => contactElement.classList.add("zIndex5k") );
                        infoContactDisplayWrap.classList.remove("displayNone");
                    }
                }
                //set styling back to default when menuIcon hasn't been selected
                infoMenuNavWrap.style.width = "";
                setTimeout( () => infoMenuNavWrap.style.opacity = "",510);
                infoPicBrightnessFilter.style.opacity = "";
                setTimeout( () => emailLinkWords.classList.add("zIndex5k"),510);
            }
        }


    
    
