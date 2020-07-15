//TYPE-TEXT PREFERENCE CODE - TYPEBOX CODE
//...............................................................................................................

    //FACEBOOK AND PINTREST SEARCHBOX CODE
    //..............................................
        //variables used throughout
        var searchArray = [1];
        var searchWord = "";
        var searchBoxValueClass = "";
        //if this style contains an image pertaining to searchBoxvalue, yes/no
        var ORContainsImg = "no";
        var VWContainsImg = "no";
        var CPContainsImg = "no";

        //"KEYPRESS": SEARCH, DISPLAY IMGS $ SET UP ARRAYS ETC 
            searchBox.addEventListener("keypress",searchFunction);
            function searchFunction(){
                setTimeout( () => { 
                    displayNoneAllImgs(); //make all other views displayNone apart from the view you're in 
                    //create class out of the users input and add it to the DOM
                    searchWord = "." + (searchBox.value);
                    searchBoxValueClass = "";
                    //only create class out of user input if input is longer than one letter
                    if (searchWord.length > 1){
                        searchBoxValueClass = document.querySelectorAll(searchWord);
                        searchBoxValueClass = Array.prototype.slice.call(searchBoxValueClass);
                    }

                    //COMVIEW SEARCHBOX CODE
                    //...
                    if ((currentView === "facebookView" || currentView === "pintrestView")===true){
                        setLoadImgNumber();
                        comViewWorkingArray = [];

                        //show all search input imgs pertaining to retro if retro cb is clicked
                        if (retroCB.classList.contains("checked")){
                            for (var i = 0; i<searchBoxValueClass.length; i++){                              
                                if(currentView === "facebookView"){
                                    if (searchBoxValueClass[i].classList.contains("fbImgRetro")){	
                                        comViewWorkingArray.push(searchBoxValueClass[i]);
                                    }  
                                }
                                else{
                                    if (searchBoxValueClass[i].classList.contains("pImgRetro")){	
                                        comViewWorkingArray.push(searchBoxValueClass[i]);
                                    }
                                }
                            }
                        }

                        //show all search input imgs pertaining to vaporwave if vaporwave cb is clicked
                        if (vaporWaveCB.classList.contains("checked")){
                            for (var i = 0; i<searchBoxValueClass.length; i++){                       
                                if(currentView === "facebookView"){
                                    if (searchBoxValueClass[i].classList.contains("fbImgVaporWave")){	
                                        comViewWorkingArray.push(searchBoxValueClass[i]);
                                    }  
                                }
                                else{
                                    if (searchBoxValueClass[i].classList.contains("pImgVaporWave")){	
                                        comViewWorkingArray.push(searchBoxValueClass[i]);
                                    }
                                }       
                            }
                        }

                        //show all search input imgs pertaining to cyberpunk if cyberpunk cb is clicked
                        if (cyberPunkCB.classList.contains("checked")){
                            for (var i = 0; i<searchBoxValueClass.length; i++){
                                if(currentView === "facebookView"){
                                    if (searchBoxValueClass[i].classList.contains("fbImgCyberPunk")){	
                                        comViewWorkingArray.push(searchBoxValueClass[i]);
                                    }  
                                }
                                else{
                                    if (searchBoxValueClass[i].classList.contains("pImgCyberPunk")){	
                                        comViewWorkingArray.push(searchBoxValueClass[i]);
                                    }
                                }         
                            }
                        }

                        imageShuffle();
                        
                        if (comViewWorkingArray[0]){
                            //show first 5 images
                            //loadImg starts at 5 and goes up by 5 every time it gets to the bottom
                            for (var i = 0; i < loadImg; i++){
                                if (comViewWorkingArray[i]){
                                    var previousImg = i - 1;//last img before the next img is to be displayed
                                    //make comViewWorkingArray[0](first image in array) the first child of its parent div
                                    if (i < 1){
                                        comViewWorkingArray[i].parentNode.insertBefore(comViewWorkingArray[i],
                                        comViewWorkingArray[i].parentNode.firstChild);
                                    }
                                    //insert corresponding images in order; 0,1,2,3, etc
                                    else{ 
                                        comViewWorkingArray[i].parentNode.insertBefore(comViewWorkingArray[i],
                                        comViewWorkingArray[previousImg].nextSibling);//insert next img after last displayed img
                                    }
                                    comViewWorkingArray[i].classList.remove("displayNone");//display image
                                }
                            }
                        }
                    }
                    //else if currentView is myView
                    else{

                    //MYVIEW SEARCHBOX CODE
                    //...
                        //displayNone arrows
                        leftArrow.classList.add("displayNone");
                        rightArrow.classList.add("displayNone");
                        //clear workingArray
                        workingArray = [];
                        //set default myView variables (mmx, arrowCounter, picCounters etc)
                        myViewCounterReset();

                        //add all search input imgs pertaining to this style to working array, if this styles cb is checked
                        if (retroCB.classList.contains("checked")){
                            for (var i = 0; i<searchBoxValueClass.length; i++){
                                if (searchBoxValueClass[i].classList.contains("mainImgRetro")) {	
                                    workingArray.push(searchBoxValueClass[i]);
                                    ORContainsImg = "yes"; //if this style contains an image pertaining to searchBoxvalue
                                }        
                            }
                        }

                        //add all search input imgs pertaining to this style to working array, if this styles cb is checked
                        if (vaporWaveCB.classList.contains("checked")){
                            for (var i = 0; i<searchBoxValueClass.length; i++){
                                if (searchBoxValueClass[i].classList.contains("mainImgVaporWave")) {	
                                    workingArray.push(searchBoxValueClass[i]);
                                    VWContainsImg = "yes"; //if this style contains an image pertaining to searchBoxvalue
                                }        
                            }
                        }

                        //add all search input imgs pertaining to this style to working array, if this styles cb is checked
                        if (cyberPunkCB.classList.contains("checked")){
                            for (var i = 0; i<searchBoxValueClass.length; i++){
                                if (searchBoxValueClass[i].classList.contains("mainImgCyberPunk")) {	
                                    workingArray.push(searchBoxValueClass[i]);
                                    CPContainsImg = "yes"; //if this style contains an image pertaining to searchBoxvalue
                                }        
                            }
                        }
                        
                        //if workingArray contains any images
                        //display workingArray[mmx] 
                        //show arrows once workingArray consists of images/workingArray.length>1 
                        if (workingArray[0]){
                            //show myView L/R < > nav arrows
                            leftArrow.classList.remove("displayNone");
                            rightArrow.classList.remove("displayNone");
                            workingArray[mmx].classList.remove("displayNone");//display first img
                            var imgsAfterMmx = workingArray.splice(1);//make array of images after mmx (displayed img)
                            imgsAfterMmx.sort(function() { return 0.5 - Math.random() });//shuffle all imgs after workingArray[0]
                            workingArray = workingArray.concat(imgsAfterMmx);
                        }
                        myViewArrowToggleFunction();//remove arrows if only one image is present
                        arrowVisibilityCheck();
                    }
                }, 100);       
            }

        //BACKSPACE FUNCTION
        //adds displayNone to classlist of all images on screen and re-initialises the mode its in 
        searchBox.addEventListener("keydown",backSpaceFunction);

                function backSpaceFunction(e) {
                    if (event.keyCode === 8 && !searchBox.value.length < 1) {
                        displayNoneAllImgs(); // removes all images from screen
                        // FACEBOOK AND PINTREST CODE 
                        if ((currentView === "facebookView"|| currentView === "pintrestView")===true){  
                            //when searchbox content is < 2 then run initScrollFunction (put images on screen, set workinArray etc)
                            if (searchBox.value.length < 2){
                                initScrollFunction();
                            }
                        }
                        //MYVIEW CODE
                        else {
                            ORContainsImg = "no";
                            VWContainsImg = "no";
                            CPContainsImg = "no";
                            myViewCounterReset();
                            workingArray = [];
                            leftArrow.classList.add("displayNone");
                            rightArrow.classList.add("displayNone");
                            //when searchbox content is < 2 then run initScrollFunction (put images on screen, set workinArray etc)
                            if (searchBox.value.length < 2){
                                myViewInit();
                            }
                            //show first img of workingArray
                            if (workingArray.length > 1){
                                workingArray[mmx].classList.remove("displayNone"); 
                            }
                            //if not in movieMode, show arrows
                            if ( (movieModeImg.classList.contains("b")) && (workingArray.length>1) ){
                                leftArrow.classList.remove("displayNone");
                                rightArrow.classList.remove("displayNone");							
                            }
                            arrowVisibilityCheck();
                        }
                    }
                    if (!topPageArrowContainer.classList.contains("displayNone")){
                        topPageArrowContainer.classList.add("displayNone");
                    }
                    searchWord = "";//reset searchbox value
                }

    //MYVIEW SEARCHBOX MYVIEW PSUEDO CODE
    //..............................................
        //type into text box
        //displayNone all imgs 
        //displayNone arrows
        //clear workingArray
        //set default myView variables (mmx, arrowCounter, picCounters etc)
        //add into working array all images with class of the user-value in searchBox
        //display workingArray[mmx] 
        //show arrows once workingArray consists of images/workingArray.length>1

    //COMVIEW SEARCHBOX MYVIEW PSUEDO CODE
    //..............................................
    //type into text box
    //displayNone all imgs 
    //clear comViewWorkingArray
    //run scrollFunction but filtering the image choice using users input (so cyberpunk images with a class of "space")
    //display loadImg amount of images on screen (as part of above function)
