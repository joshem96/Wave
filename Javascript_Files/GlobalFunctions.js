// MYVIEW FUNCTIONS
//....................................................................................................................................    

    // DELETE DUPLICATES IN WORKINGARRAY
    //...........................................................
        function deleteDuplicateImgs(){
            workingArray = workingArray.reduce(function(a,b){
                if (a.indexOf(b) < 0 ) a.push(b);
                return a;
            },[]);
        }
    //RESET MYVIEW COUNTERS DEFAULT
    //...........................................................
        myViewCounterReset = () => {
            arrowCounter = 1; //pertains to img array length
            mmx = 0; // pertains to the current img number 
            //reset picCounters to 0
            cyberPunkPicCounter = 0;
            vaporWavePicCounter = 0;
            retroPicCounter = 0;
        } 
    //HIDES SLIDE ARROWS FOR MOVIEMODE IN MYVIEW
    //...........................................................
        //when user pressess movie mode button, left and right nav arrows dissapear
        hideSlideArrows = () => {
            if ((currentView === "myView") ){
                if ( (movieModeImg.classList.contains("b") ) && (workingArray.length>1) ){
                  leftArrow.classList.remove("displayNone");
                  rightArrow.classList.remove("displayNone");  
                }
                else{
                  leftArrow.classList.add("displayNone");
                  rightArrow.classList.add("displayNone");              
                }
            }
        }
    //MMX RESET (NUMBER THAT PERTAINS TO IMAGE DISPLAYED)
    //...........................................................
        function mmxArrowCounterReset(){
            for (var i = 0; i<workingArray.length; i++){
                if (!workingArray[i].classList.contains("displayNone")){
                    mmx = workingArray.indexOf(workingArray[i]);
                }
            }
            arrowCounter = mmx+1
        }
    //INITIALISE MY VIEW IMAGES (ONLOAD AND PIMG => MYVIEW)
    //...............................................................
        //scans checkboxes that are checked and adds checked to workingArray
        function myViewInit() {
            for (var i = 0; i < formCheckBox.length; i++) {
                //RETRO
                if (formCheckBox[i].id === "retro" && formCheckBox[i].classList.contains("checked") ) {
                    workingArray = workingArray.concat(mainImgRetro);
                }
                //VAPORWAVE
                if (formCheckBox[i].id === "vaporWave" && formCheckBox[i].classList.contains("checked") ) {
                    workingArray = workingArray.concat(mainImgVaporWave);
                }
                //CYBERPUNK
                if (formCheckBox[i].id === "cyberPunk" && formCheckBox[i].classList.contains ("checked") ) {
                    workingArray = workingArray.concat(mainImgCyberPunk);
                }
            }   
            //delete all duplicates
            workingArray = workingArray.reduce(function(a,b){
                if (a.indexOf(b) < 0 ) a.push(b);
                return a;
            },[]);
            //remove the last element from array as it returns nodelist for some weird reason
            workingArray.pop();                            
            //suffle working array
            workingArray.sort(function() { return 0.5 - Math.random() });
        }

//--
        
// COMVIEW FUNCTIONS
//....................................................................................................................................   

    //DISPLAYS NONE ALL FB/PIN IMAGES
    //............................................................
        function displayNoneComViewImgs(e){
            for (var i = 0; i<formCheckBox.length; i++){
                if (formCheckBox[i].classList.contains("checked") === true) {
                    formCheckBox[i].classList.remove("checked");  
                    formCheckBox[i].classList.add("unchecked"); 
                    displayNoneAllImgs();
                }
            }
        selected = {};
        }
    //SET LOAD IMG VALUE
    //.............................................................
        //checks to see if loadImg should become the value of the images that are displayed on screen
        //if user is adding images, loadImg becomes the number of images that are displayed, used for tracking purposes
        //if user declicks cbs to the point default values are required, loadImg will become its default value
        function setLoadImgValue(){
            if (currentView === "facebookView"){
                if (loadImg > 5){
                    loadImg = displayed;
                } else if (loadImg < 5){
                    loadImg = 5;
                }
            }
            else if (currentView === "pintrestView"){
                if (window.innerWidth > 1860){
                    if (loadImg > 30){
                        loadImg = displayed;
                    } else if (loadImg < 30){
                        loadImg = 30;
                    }
                }
                if ( (window.innerWidth > 1550) && (window.innerWidth < 1859) ){
                    if (loadImg > 20){
                        loadImg = displayed;
                    } else if (loadImg < 20){
                        loadImg = 20;
                    }
                }
                if ( (window.innerWidth > 1100) && (window.innerWidth < 1549) ){
                    if (loadImg > 16){
                        loadImg = displayed;
                    } else if (loadImg < 16){
                        loadImg = 16;
                    }
                }
                if ( (window.innerWidth > 700) && (window.innerWidth < 1099) ){
                    if (loadImg > 30){
                        loadImg = displayed;
                    } else if (loadImg < 30){
                        loadImg = 30;
                    }
                }
                if ( (window.innerWidth > 0) && (window.innerWidth < 699) ){
                    if (loadImg > 16){
                        loadImg = displayed;
                    } else if (loadImg < 16){
                        loadImg = 16;
                    }
                }
            }
        }
    //FILL REMAINDING IMG SPACE
    //.............................................................
        //if number of imgs displayed are less than loadImg (minimum number of images to be displayed at a time) and new cb is clicked, fill remainding imgspace with new imgs
        function fillRemaindingImgSpace(){
            if (displayed < loadImg){
                var previousImg = comViewWorkingArray.slice(-1)[0];
                previousImg = comViewWorkingArray.indexOf(previousImg);
                for (var i = 0; i < loadImg; i++){
                    if (comViewWorkingArray[i]){
                        if (comViewWorkingArray[i].classList.contains("displayNone")){
                            //var pertaining to the last image displayed
                            previousImg = i - 1;
                            //insert corresponding images in ordely order; 0,1,2,3, etc
                            comViewWorkingArray[i].parentNode.insertBefore(comViewWorkingArray[i], comViewWorkingArray[previousImg].nextSibling);//insert next img after last displayed img
                            comViewWorkingArray[i].classList.remove("displayNone");//display img
                        }
                    }
                }	
                findNumberOfDisplayedImgs();
            }
        }

    //FIND NUMBER OF IMAGES CURRENTLY DISPLAYED (comview)
    //.............................................................
        //function that finds how many images are displayed how a screen
        function findNumberOfDisplayedImgs(){
             //find number of images that are displayed and return in var called displayed
             displayed = 0;
             for (var i = 0; i< comViewWorkingArray.length; i++){
                if (!comViewWorkingArray[i].classList.contains("displayNone")){
                    displayed++//number of imags that are displayed
                }
             }
         }

//--

// GLOBAL FUNCTIONS
//....................................................................................................................................            
    //DISPLAY NONES ALL IMGS
    //................................................................
        displayNoneAllImgs = () =>{
            //add displayNone img class
            for (var i = 0; i<pImg.length; i++){
                pImg[i].classList.add("displayNone");
            }
            for (var i = 0; i<mainImg.length; i++){
                mainImg[i].classList.add("displayNone");
            }
            for (var i = 0; i<fbImg.length; i++){
                fbImg[i].classList.add("displayNone");
            }
            //special displayNone for prefBox mode
            delete selected[".displayImgVaporWave"];
            delete selected[".displayImgCyberPunk"];
            delete selected[".displayImgRetro"];
            var cssRules = Object.keys(selected).join(",") + "{ display: block ;}";
            document.querySelector("style#preferences").textContent = cssRules;
        }
    //SCROLL TO TOP OF SCREEN FUNCTION
    //................................................................
        scrollToTop = () => {                
            setTimeout(function(){window.scrollBy(0,-10000); },50);
            hideFirstArrow = 0;
        }
    //SWITCHVIEW FUNCTION
    //................................................................
        //adds a class to formbox/preference box so the functionality changes between myview and fbtimeline/pintrest
        //var is set 0 or 1 depending on comview on/off
        function switchViewFunction() {
           if (currentView === "fbTimelineView" || "pintrestView" ) {
               formBox.classList.add("comViewOn"); // comOn refers to fbTImelineview and pintrest view
               formBox.classList.remove("comViewOff");
               comView = 1;
           }
            if (currentView === "myView"){
                formBox.classList.remove("comViewOn");
                formBox.classList.add("comViewOff"); //comViewOff refers to my view
                comView = 0;
            }
        }

//--

////OLD CODE I MIGHT NEED
////...................................................................................................................................

    //CUSTOM CHECK BOX CHECKED/UNCHECKED CODE
    //formBox.addEventListener("click",function(e){
    //
    //    if (e.target.classList.contains("newCheckBox")){
    //
    //        if (e.target.classList.contains("checked")){
    //            e.target.classList.remove("checked");
    //            e.target.classList.add("unchecked");
    //        }
    //        else if (e.target.classList.contains("unchecked")){
    //            e.target.classList.remove("unchecked");
    //            e.target.classList.add("checked");
    //        }
    //    }
    //
    //
    //
    //
    // });

    ////PREFERENCE CHECKBOX DEFAULT VARIABLES FUNCTION
    ////...................................................................................................................................
    //
    //    function counterDefault(){
    //
    //        arrowCounter = 1; //pertains to img array length
    //        mmx = 0; // pertains to the current img number 
    //        //Pic counters for tracking myView imgs
    ////        drivingShotPicCounter = 0;
    //        cyberPunkPicCounter = 0;
    //        vaporWavePicCounter = 0;
    ////        retroSunPicCounter = 0;
    ////        gridWorkPicCounter = 0;
    ////        bitPicCounter = 0;
    //        retroPicCounter = 0;
    ////        treePicCounter = 0;
    ////        computerPicCounter = 0;
    ////        spacePicCounter = 0;
    ////        textPicCounter = 0;
    ////        portraitPicCounter = 0;
    ////        gamePicCounter = 0;
    ////        arcadePicCounter = 0;
    ////        moviePicCounter = 0;
    ////        cityPicCounter = 0;
    ////        futuristicPicCounter = 0;
    ////        technologicPicCounter = 0;
    //    }
