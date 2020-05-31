//PREFERENCE BUTTON CODE
//.....................................................................................................................................

    //Preferences button protocol 

    preferencesButton.addEventListener("click",prefButtonFunction);
    AdaptivePreferencesButton.addEventListener("click",prefButtonFunction);

        function prefButtonFunction(){
            if ( (dnpc.classList.contains("displayNone")) || (!movieModeContainer.classList.contains("displayNone")) || (!soundControlContainer.classList.contains("displayNone")) ) {
                dnpc.classList.remove("displayNone");
                movieModeContainer.classList.add("displayNone");
                soundControlContainer.classList.add("displayNone");
            }else{
                dnpc.classList.add("displayNone");
                }

//            switchViewFunction();
        }
    // IF CHECKBOX TICK COUNT EQUALS NULL FUNCTION
        myViewCounterReset();
// PREFERENCES CHECKBOX-FORMBOX CODE
//.........................................................................................................................
    
    //checkbox code
//    var selected = {};
//    var formBox = document.querySelector("form.formBox"); 
    //SECRET FUNCTION SAUCE TO MAKE MMX AND ARROWCOUNTER CORRECT AFTER EVERY DECLICK

    bugFunction = () => {
        for (var i = 0; i < workingArray.length; i++){
            if (!workingArray[i].classList.contains(".displayNone")){
                mmx = i;
                arrowCounter = i + 1;
            }
        }
    }
    //mmx = 0;//int value for workArray, thats used for myView

    var times = 0;
    var displayed;
    //keeps track of how madeny checkboxes are checked, if none are checked it equals 0, if all are checked it equals 3 etc
    var checkedCbCounter = 1;

            //this code toggles the checkboxes being shown or not depending on if their box is checked or unchecked
            formBox.addEventListener("click",function(e){
                if (e.target.classList.contains("formCheckBox")){

                    ++times;
    
                    //checked/unchecked toggle code
                    if (e.target.classList.contains("newCheckBox")){
                        if (e.target.classList.contains("checked")){
                            e.target.classList.remove("checked");
                            e.target.classList.add("unchecked");
                        }
                        else if (e.target.classList.contains("unchecked")){
                            e.target.classList.remove("unchecked");
                            e.target.classList.add("checked");
                        }
                    }
                    
                    //set cbCounter each time formbox each checked
                    checkedCbCounter = 0;
                    for (var i = 0; i<formCheckBox.length; i++){
                        if (formCheckBox[i].classList.contains("checked")){
                            checkedCbCounter += 1
                        }
                    } 

                    var targetID = e.target.id;

                    //PIMG AND FACEBOOK VIEW CHECKBOX CODE
                    if(formBox.classList.contains("comViewOn")){

                    findNumberOfDisplayedImgs();

                      //shuffling non-displayed imgs with the new images being added to comViewWorkingArray
                     if (e.target.classList.contains("checked")){
                         var remaindingImgNumber = comViewWorkingArray.length - displayed;
                         var remaindingImgArray;//array that contains images with class of displayNone
                         // remove the remaindingImgArray images from ComViewWorkingArray, after the last displayed Img (loadImg)
                         remaindingImgArray = comViewWorkingArray.splice(loadImg,remaindingImgNumber);
                         //^^ then add those remainding images into another array along with checked the new cb array(eg fbRetro)
                     }

                        //IF NOT IN SEARCH MODE
                        if (searchBox.value.length < 1){

                            //UNCHECKED -> CHECKED
                           if (e.target.classList.contains("checked")){
                               
                               if (checkedCbCounter === 1 || !comViewWorkingArray[0]){ //if first cb checked then displayNone all imgs 
                                    initScrollFunction();
                                }	
                                else if (checkedCbCounter > 1){                               

                                    //if no checkboxes are checked and a checkbox is clicked, run Init scroll function
                                    //if a cb is already checked and another cb is checked, add new cb's class to comViewWorkingArray
                                    //- shuffle the images that haven't been displayed yet
                                    //- so only shuffle images that have class of displayNone, leave rest in place
                                    //- take images with displayNone out of array, shuffle them, push them back into array
                                  if (targetID === "retro"){

                                      //combine remaining images with checked cb images
                                      if (currentView === "facebookView"){
                                          remaindingImgArray = remaindingImgArray.concat(fbImgRetro);
                                      }
                                      else if (currentView ==="pintrestView"){
                                          remaindingImgArray = remaindingImgArray.concat(pImgRetro);                                  
                                      }

                                      //shuffle remainding images and newly added images
                                      remaindingImgArray.sort(function() { return 0.5 - Math.random() });

                                      //push remainding images and new images to comViewWorkingArray
                                      comViewWorkingArray = comViewWorkingArray.concat(remaindingImgArray);
                                  }

                                  if (targetID === "vaporWave"){

                                      //combine remaining images with checked cb images
                                      if (currentView === "facebookView"){
                                          remaindingImgArray = remaindingImgArray.concat(fbImgVaporWave);
                                      }
                                      else if (currentView ==="pintrestView"){
                                          remaindingImgArray = remaindingImgArray.concat(pImgVaporWave);                             
                                      }

                                      //shuffle remainding images and newly added images
                                      remaindingImgArray.sort(function() { return 0.5 - Math.random() });

                                      //push remainding images and new images to comViewWorkingArray
                                      comViewWorkingArray = comViewWorkingArray.concat(remaindingImgArray);
                                   }

                                   if (targetID === "cyberPunk"){

                                      //combine remaining images with checked cb images
                                      if (currentView === "facebookView"){
                                          remaindingImgArray = remaindingImgArray.concat(fbImgCyberPunk);
                                      }
                                      else if (currentView ==="pintrestView"){
                                          remaindingImgArray = remaindingImgArray.concat(pImgCyberPunk);                              
                                      }

                                      //shuffle remainding images and newly added images
                                      remaindingImgArray.sort(function() { return 0.5 - Math.random() });

                                      //push remainding images and new images to comViewWorkingArray
                                      comViewWorkingArray = comViewWorkingArray.concat(remaindingImgArray);
                                   }
                                    findNumberOfDisplayedImgs();//find num of imgs displayed
                                    fillRemaindingImgSpace();//if comViewWorkingArrays displayed Imgs < loadImg (default # of imgs on screen)
                                }

                               //CHECKED -> UNCHECKED
                               }else{
                                 
                                    //remove declicked style from comViewWorkingArray, move remainding items in array to the left and displayNone declicked cb style
                                    //making sure comvViewWOrking array is set to recieve more imgs on scroll/bottom screen thing
    
                                   //current styles array
                                    var currentArray;

                                   if (targetID === "retro"){

                                        //if all images on screen pertain to the cb getting declicked
                                        //creates booleans that will be used to fire off code later if init scroll funct is required after declick
//                                        var willReset = true;
//                                        var noReset = false;
//                                        for (var i = 0; i < loadImg; i++){
//                                            if (comViewWorkingArray[i].classList.contains("retro")){
//                                                willReset = true;
//                                            }else{
//                                                noReset = true;
//                                            }
//                                        }

                                        if (currentView === "facebookView"){
                                              currentArray = fbImgRetro;
                                        }
                                        else if (currentView === "pintrestView"){
                                             currentArray = pImgRetro;                                
                                        }
                                   }

                                   if (targetID === "vaporWave"){

                                        //if all images on screen pertain to the cb getting declicked
                                       //creates booleans that will be used to fire off code later if init scroll funct is required after declick
//                                        var willReset = true;
//                                        var noReset = false;
//                                        for (var i = 0; i < loadImg; i++){
//                                            if (comViewWorkingArray[i].classList.contains("vaporwave")){
//                                                willReset = true;
//                                            }else{
//                                                noReset = true;
//                                            }
//                                        }

                                        if (currentView === "facebookView"){
                                              currentArray = fbImgVaporWave;
                                        }
                                        else if (currentView ==="pintrestView"){
                                             currentArray = pImgVaporWave;                                
                                        }
                                   }
//                                   debugger;
                                   if (targetID === "cyberPunk"){

                                        //if all images on screen pertain to the cb getting declicked
                                       //creates booleans that will be used to fire off code later if init scroll funct is required after declick
//                                        var willReset = true;
//                                        var noReset = false;
//                                        for (var i = 0; i < loadImg; i++){
//                                            if (comViewWorkingArray[i].classList.contains("cyberpunk")){
//                                                willReset = true;
//                                            }else{
//                                                noReset = true;
//                                            }
//                                        }

                                        if (currentView === "facebookView"){
                                              currentArray = fbImgCyberPunk;
                                        }
                                        else if (currentView ==="pintrestView"){
                                             currentArray = pImgCyberPunk;                                
                                        }
                                   }
//    debugger;
                                    //eg if fbImgVaporwave was declicked
                                    //splice all declicked style images from comViewWorkingArray
                                     for (var i = 0; i < currentArray.length; i++) {

                                        var img = currentArray[i];                                    
                                        var imgPosition = comViewWorkingArray.indexOf(img);
                                        comViewWorkingArray.splice(imgPosition, 1);
                                        img.classList.add("displayNone");
                                    }

                                    //reset loadImg, to make sure its consistent
                                    var displayed = 0;//f
                                    for (var i = 0; i< comViewWorkingArray.length; i++){
                                        if (!comViewWorkingArray[i].classList.contains("displayNone")){
                                            displayed++//number of imags that are displayed
                                        }
                                    }

                                    findNumberOfDisplayedImgs(); //find number of displayed imgs
                                    setLoadImgValue();//reset loadImg, to make sure its consistent

                                    //if the user declicks a cb without having viewed the other styles lined up in comViewWorkingArray
                                    //so if retro and vaporwave are clicked but only retro images have been viewed and retro is declicked 
                                    if (comViewWorkingArray[0]){
                                        if (comViewWorkingArray[0].classList.contains("displayNone")){
                                            initScrollFunction();
                                        }
                                    }else if (comViewWorkingArray.length<1 && checkedCbCounter >= 1){
                                        initScrollFunction();
                                    }
                                      
                                   
//                                   debugger;
                                    //if all images onscreen pertain to the first checkbox that is checked and that checkbox is clicked again
//                                    if (willReset === true && noReset === false && comViewWorkingArray.length>1){
//                                        initScrollFunction();
//                                        console.log("im werkin dad");
//                                    }
                             }
    //                        //show images that are checked basically
    //						 var cssRules = Object.keys(selected).join(",") + "{ display: block;}";
    //						 document.querySelector("style#preferences").textContent = cssRules;
    //
    //                        //add or remove displayNone class when checkbox checked/unchecked
    //                        for (var i = 0; i < formCheckBox.length; i++){
    //                            if (formCheckBox[i].checked){
    //                                var checkedBoxClass = formCheckBox[i].value;
    //                                var newcb = document.querySelectorAll(checkedBoxClass)
    //                                    for (var ii = 0; ii < newcb.length; ii++){
    //                                        newcb[ii].classList.remove("displayNone");
    //                                    }     
    //                            }else{
    //                                var checkedBoxClass = formCheckBox[i].value;
    //                                var newcb = document.querySelectorAll(checkedBoxClass)
    //                                    for (var ii = 0; ii < newcb.length; ii++){
    //                                        newcb[ii].classList.add("displayNone");
    //                                    }  
    //
    //                            }
    //                        } 
                            searchBox.value = "";

                        }//SEARCHBOX COMVIEW PREFBOX CODE
                        else{
                            function initSearchFunctSpecial(){
                                
                                //if the user declicks a cb without having viewed the other styles lined up in comViewWorkingArray
                                //so if retro and vaporwave are clicked but only retro images have been viewed and retro is declicked 
                                if (comViewWorkingArray[0]){
                                    if (comViewWorkingArray[0].classList.contains("displayNone")){
                                        searchFunction();
                                    }
                                }else if (comViewWorkingArray.length<1 && checkedCbCounter >= 1){
                                    searchFunction();
                                }
                            }

                            var currentArray = [];

                            //CbCounter becomes 1 when only when a checkbox is the first one checked
                            //pertains to how many cbs are checked, 0 means none are checked
//                            var cbCounter = 0;
//                            for (var i = 0; i < formCheckBox.length; i++){
//                                if (formCheckBox[i].classList.contains("checked")){
//                                    cbCounter++;
//                                }
//                            }

                            //RETRO CB 
                            if (targetID === "retro"){

                                //UNCHECKED -> CHECKED
                                debugger;
                                if (e.target.classList.contains("checked") ){
                                    //if first cb checked or previously clicked cb doesnt contain imgs, searchFunction();
                                    if (checkedCbCounter === 1 || !comViewWorkingArray[0]){ 
                                        searchFunction();
                                    }	
                                    else if (checkedCbCounter > 1){ //if not first cb to be clicked, add new images to comViewWorkingArray
                                        for (var i = 0; i<searchBoxValueClass.length; i++){
                                            if (searchBoxValueClass[i].classList.contains("displayImgRetro")){	
                                                  //add clicked cb images to an array with all images after mmx (displayed image)
                                                  if (currentView === "facebookView"){
                                                      if (searchBoxValueClass[i].classList.contains("fbImg")){
                                                        remaindingImgArray.push(searchBoxValueClass[i]);
                                                      }
                                                  }
                                                  else if (currentView ==="pintrestView"){
                                                      if (searchBoxValueClass[i].classList.contains("pImg")){
                                                        remaindingImgArray.push(searchBoxValueClass[i]);   
                                                      }
                                                  }
                                            }        
                                        }
                                      //shuffle remainding images and newly added images
                                      remaindingImgArray.sort(function() { return 0.5 - Math.random() });
                                      //concat remainding images and new images to comViewWorkingArray
                                      comViewWorkingArray = comViewWorkingArray.concat(remaindingImgArray);
                                    }
                                    debugger;
                                    findNumberOfDisplayedImgs();//find num of imgs that are displayed
                                    fillRemaindingImgSpace();//if comViewWorkingArray Imgs < loadImg (default # of imgs on screen)
                                }

                                //CHECKED -> UNCHECKED

                                else{

                                    for (var i = 0; i<searchBoxValueClass.length; i++){
                                        if (searchBoxValueClass[i].classList.contains("displayImgRetro")) {	
//                                            searchBoxValueClass[i].classList.add("displayNone");

                                            if (currentView === "facebookView" && searchBoxValueClass[i].classList.contains("fbImg")){
                                                  currentArray.push(searchBoxValueClass[i]);
                                            }
                                            else if (currentView === "pintrestView" && searchBoxValueClass[i].classList.contains("pImg")){
                                                  currentArray.push(searchBoxValueClass[i]);                                
                                            }
                                        }        
                                    }	
                                    
                                    //eg if fbImgVaporwave was declicked
                                    //splice all declicked style images from comViewWorkingArray
                                     for (var i = 0; i < currentArray.length; i++) {

                                        var img = currentArray[i];                                    
                                        var imgPosition = comViewWorkingArray.indexOf(img);
                                        comViewWorkingArray.splice(imgPosition, 1);
                                        img.classList.add("displayNone");
                                    }

                                    findNumberOfDisplayedImgs(); //find number of displayed imgs
                                    setLoadImgValue();//reset loadImg, to make sure its consistent

                                    //if user declicks cb without having viewed other imgs in comViewWorkingArray, show loadImg number of images next in line in comViewWorkingArray
                                    initSearchFunctSpecial(); 
                                }
                            }

                            //VAPORWAVE CB
                            if (targetID === "vaporWave"){

                                //UNCHECKED -> CHECKED

                                  if (e.target.classList.contains("checked") ){
                                    if (checkedCbCounter === 1 || !comViewWorkingArray[0]){ //if first cb checked then run searchFunction 
//                                        displayNoneAllImgs();
                                        searchFunction();
                                    }	
                                    else if (checkedCbCounter > 1){ //if not first cb to be clicked, add new images to comViewWorkingArray
                                        for (var i = 0; i<searchBoxValueClass.length; i++){
                                            if (searchBoxValueClass[i].classList.contains("displayImgVaporWave")) {	
                                                  //add clicked cb images to an array with all images after mmx (displayed image)
                                                  if (currentView === "facebookView"){
                                                      if (searchBoxValueClass[i].classList.contains("fbImg")){
                                                        remaindingImgArray.push(searchBoxValueClass[i]);
                                                      }
                                                  }
                                                  else if (currentView ==="pintrestView"){
                                                      if (searchBoxValueClass[i].classList.contains("pImg")){
                                                        remaindingImgArray.push(searchBoxValueClass[i]);   
                                                      }
                                                  }
                                            }        
                                        }
                                      //shuffle remainding images and newly added images
                                      remaindingImgArray.sort(function() { return 0.5 - Math.random() });
                                      //concat remainding images and new images to comViewWorkingArray
                                      comViewWorkingArray = comViewWorkingArray.concat(remaindingImgArray);
                                    }
                                    findNumberOfDisplayedImgs();//find num of imgs that are displayed
                                    fillRemaindingImgSpace();//if comViewWorkingArray Imgs < loadImg (default # of imgs on screen)
                                }

                                //CHECKED -> UNCHECKED

                                else{
                                    for (var i = 0; i<searchBoxValueClass.length; i++){
                                        if (searchBoxValueClass[i].classList.contains("displayImgVaporWave")) {	
                                            if (currentView === "facebookView" && searchBoxValueClass[i].classList.contains("fbImg")){
                                                  currentArray.push(searchBoxValueClass[i]);
                                            }
                                            else if (currentView === "pintrestView" && searchBoxValueClass[i].classList.contains("pImg")){
                                                  currentArray.push(searchBoxValueClass[i]);                                
                                            }
                                        }        
                                    }	
                                    
                                    //eg if fbImgVaporwave was declicked
                                    //splice all declicked style images from comViewWorkingArray
                                     for (var i = 0; i < currentArray.length; i++) {

                                        var img = currentArray[i];                                    
                                        var imgPosition = comViewWorkingArray.indexOf(img);
                                        comViewWorkingArray.splice(imgPosition, 1);
                                        img.classList.add("displayNone");
                                    }

                                    //reset loadImg, to make sure its consistent
                                    var displayed = 0;//f
                                    for (var i = 0; i < comViewWorkingArray.length; i++){
                                        if (!comViewWorkingArray[i].classList.contains("displayNone")){
                                            displayed++//number of imags that are displayed
                                        }
                                    }

                                    findNumberOfDisplayedImgs(); //find number of displayed imgs
                                    setLoadImgValue(); //sets loadImg to number of images currently displayed

                                    //if tuser declicks cb without having viewed other imgs in comViewWorkingArray
                                    initSearchFunctSpecial(); 
                                }
                            }

                            //CYBERPUNK CB
                            if (targetID === "cyberPunk"){

                                //UNCHECKED -> CHECKED

                                if (e.target.classList.contains("checked") ){
                                    if (checkedCbCounter === 1 || !comViewWorkingArray[0]){ //if first cb checked then displayNone all imgs 
                                        searchFunction();
                                    }	
                                    else if (checkedCbCounter > 1){ //if not first cb to be clicked, add new images to comViewWorkingArray
                                        for (var i = 0; i<searchBoxValueClass.length; i++){
                                            if (searchBoxValueClass[i].classList.contains("displayImgCyberPunk")) {	
                                                  //add clicked cb images to an array with all images after mmx (displayed image)
                                                  if (currentView === "facebookView"){
                                                      if (searchBoxValueClass[i].classList.contains("fbImg")){
                                                        remaindingImgArray.push(searchBoxValueClass[i]);
                                                      }
                                                  }
                                                  else if (currentView ==="pintrestView"){
                                                      if (searchBoxValueClass[i].classList.contains("pImg")){
                                                        remaindingImgArray.push(searchBoxValueClass[i]);   
                                                      }
                                                  }
                                            }        
                                        }
                                      //shuffle remainding images and newly added images
                                      remaindingImgArray.sort(function() { return 0.5 - Math.random() });
                                      //concat remainding images and new images to comViewWorkingArray
                                      comViewWorkingArray = comViewWorkingArray.concat(remaindingImgArray);
                                    }
                                    findNumberOfDisplayedImgs();//find num of imgs that are displayed
                                    fillRemaindingImgSpace();//if comViewWorkingArray Imgs < loadImg (default # of imgs on screen)
                                }

                                //CHECKED -> UNCHECKED

                                else{
                                    
                                    for (var i = 0; i<searchBoxValueClass.length; i++){
                                        if (searchBoxValueClass[i].classList.contains("displayImgCyberPunk")) {	
//                                            searchBoxValueClass[i].classList.add("displayNone");

                                            if (currentView === "facebookView" && searchBoxValueClass[i].classList.contains("fbImg")){
                                                  currentArray.push(searchBoxValueClass[i]);
                                            }
                                            else if (currentView === "pintrestView" && searchBoxValueClass[i].classList.contains("pImg")){
                                                  currentArray.push(searchBoxValueClass[i]);                                
                                            }
                                        }        
                                    }	
                                    
                                    //eg if fbImgVaporwave was declicked
                                    //splice all declicked style images from comViewWorkingArray
                                     for (var i = 0; i < currentArray.length; i++) {

                                        var img = currentArray[i];                                    
                                        var imgPosition = comViewWorkingArray.indexOf(img);
                                        comViewWorkingArray.splice(imgPosition, 1);
                                        img.classList.add("displayNone");
                                    }

                                    //reset loadImg, to make sure its consistent
                                    var displayed = 0;//f
                                    for (var i = 0; i < comViewWorkingArray.length; i++){
                                        if (!comViewWorkingArray[i].classList.contains("displayNone")){
                                            displayed++//number of imags that are displayed
                                        }
                                    }

                                    findNumberOfDisplayedImgs(); //find number of displayed imgs
                                    setLoadImgValue(); //sets loadImg to number of images currently displayed

                                    //if tuser declicks cb without having viewed other imgs in comViewWorkingArray
                                    initSearchFunctSpecial(); 
                                }
                            }

                            //when you unclick the last searchbox and there is still input in the searchbox, show images pertaining to input remaining in searchbox
//                            if (cbCounter === 0){
//                                searchFunction();
//                            }


                        }

                    }else{//MYVIEW PREFERENCE BOX CODE

                        //if no checkboxes are checked (so user has declicked from last checkbox ) 
                        //and searchBox still has input, run searchFunction to show images pertaining to searchBox input

                        //FUNCTIONS RELATIVE TO THIS METHOD

                        function myViewCheckedIsNowNone(){

                            if ( (checkedCbCounter === 0) && (searchBox.value.length>1) ){
                                searchFunction();
                            }
                        }


                        function lastImgDisplay () {
                            //make the last img of workingArray display
                            if (deClick === 1 && workingArray.length>1){


                                var lastImg = workingArray.slice(-1)[0];
                                lastImg.classList.remove("displayNone");
                                bugFunction();
                            }
                        }
                            //else if formBox.classList doesn't contain comViewOn, therefore containing comViewOff
                            //if the view is myView run this code
                            //display the first Img for the checkbox that is clicked
                            //below is code if myView is triggered and no checkboxes are clicked
                                
                        if ( (retroCB.classList.contains("unchecked") ) && (vaporWaveCB.classList.contains("unchecked")) && (cyberPunkCB.classList.contains("unchecked")) ){
//                                    arrowCounter = 1; //pertains to img array length
//                                    mmx = 0; // pertains to the current img number 
//                                    cyberPunkPicCounter = 0;
//                                    vaporWavePicCounter = 0;
                                counterDefault();
                        }


                        //put all images after mmx into an array (to be shuffled when new checkbox images are added to workingArray) 
                        if(checkedCbCounter > 0 && e.target.classList.contains("checked") && workingArray[0]){
                            var remaindingImgArray = [];
                            var remaindingImgNumber = 0;
                            for (var i = 0; i<workingArray.length; i++){
                                if (i > mmx){
    //                                remaindingImgArray.push(workingArray[i]);
                                      remaindingImgNumber++;
                                }
                            }
                        //get all imgs after mmx and put in array
                        remaindingImgArray = workingArray.splice(mmx+1,remaindingImgNumber);
                        }

                                //...
                                //MYVIEW RETRO CHECKBOX CODE
                                if (targetID === "retro"){
                                    
                                    //UNCHECKED => CHECKED

                                    if (e.target.classList.contains("checked") ){
//
//                                        function makeRemaindingImgArray(){
//
//                                        }
                                        
                                        if (searchBox.value.length < 1){

                                            //IF RETRO IS FIRST CHECKBOX TO BE CHECKED
                                           //if no other checkboxes are checked then display first img of styles array
                                            if ( (vaporWaveCB.classList.contains("unchecked")) && (cyberPunkCB.classList.contains("unchecked")) && (retroCB.classList.contains("checked")) ){

                                                workingArray = workingArray.concat(mainImgRetro);
                                                workingArray[mmx].classList.remove("displayNone"); //make the firstimg shown but the rest not
                                            }
                                            // IF NOT FIRST TO BE CHECKED
                                            //shuffle all imgs after mmx and then return in workingArray  
                                            else{
                                                if (checkedCbCounter > 0 && workingArray[0]){

                                                    //combine remaining images with checked cb images
                                                    remaindingImgArray = remaindingImgArray.concat(mainImgRetro);
                                                    //shuffle remainding images and newly added images
                                                    remaindingImgArray.sort(function() { return 0.5 - Math.random() });
                                                    //push remainding images and new images to workingArray
                                                    workingArray = workingArray.concat(remaindingImgArray);
                                                }
                                            }
                                        }else{
                                            //SEARCHBOX PREFBOX CODE
  
                                            //if cb style has images pertaining to searchBox input, push to workingArray
                                            function addSearchImgsToWorkingArray(){
//debugger;
                                                //if first cb checked or checked cb's don't have img pertaining to searchBoxValue
                                                if (checkedCbCounter === 1 || !workingArray[0]){
                                                    for (var i = 0; i<searchBoxValueClass.length; i++){
                                                        if (searchBoxValueClass[i].classList.contains("mainImgRetro")) {	
                                                            workingArray.push(searchBoxValueClass[i]);
                                                        }        
                                                    }
                                                }
                                                //!if first cb checked
                                                else if (checkedCbCounter === 2 || 3 && workingArray[0]){

                                                    for (var i = 0; i<searchBoxValueClass.length; i++){
                                                        if (searchBoxValueClass[i].classList.contains("mainImgRetro")) {	
                                                            remaindingImgArray.push(searchBoxValueClass[i]);
                                                        }        
                                                    }
                                                    //shuffle remainding images and newly added images
                                                    remaindingImgArray.sort(function() { return 0.5 - Math.random() });

                                                    workingArray = workingArray.concat(remaindingImgArray);
                                                }
                                            }

                                            //determine if cb has images pertaining to searchBox value content
                                            for (var i = 0; i<searchBoxValueClass.length; i++){
                                                if (searchBoxValueClass[i].classList.contains("mainImgRetro")) {	
                                                    ORContainsImg = "yes";
                                                }        
                                            }
                                            
                                            //if first cb clicked or other clicked cbs dont have a style pertaining to searchImg
                                            //clear photos and add searchbox images pertaining to this style to workingArray
                                            if (!remaindingImgArray){
                                                if (ORContainsImg === "yes"){
                                                    displayNoneAllImgs();		
                                                    workingArray = [];
                                                    addSearchImgsToWorkingArray();
                                                    workingArray[mmx].classList.remove("displayNone"); //make the firstimg shown
                                                }
                                            }
                                            //if not first clicked, then simply push images to workingArray
                                            else{
                                                addSearchImgsToWorkingArray();
                                            }
							
                                        }
                                        
                                    //CHECKED => UNCHECKED

                                    }
                                    else if(e.target.classList.contains("unchecked") && workingArray[0]){ 
//                                        myViewCbCounter--;
//                                        debugger;
                                        //removes all declicked images from workingArray and adds displayNone to each of them
                                        //this particular code only works when mmx is not this style
                                        function removeImgStyle(){
                                            for (var i = 0; i < mainImgRetro.length; i++) {

                                                var img = mainImgRetro[i];                                    
                                                var imgPosition = workingArray.indexOf(img);
                                                workingArray.splice(imgPosition, 1);
                                                img.classList.add("displayNone");
                                            }                                            
                                        }
                                        
                                        //remove declicked cb images from searchBox value result
                                        function searchModeRemoveImgStyle(){
                                            for (var i = 0; i<searchBoxValueClass.length; i++){
                                                    if (searchBoxValueClass[i].classList.contains("mainImgRetro")) {	

                                                        var img = searchBoxValueClass[i];
                                                        img.classList.add("displayNone");
                                                        var imgPosition = workingArray.indexOf(img);
                                                        workingArray.splice(imgPosition, 1);

                                                        
                                                    }        
                                            }
                                        }
                                        
                                        var mmxIsThisStyle = 0;

                                        //if any img in this array is currently shown, mmxIsThisStyle = 1
                                        if(workingArray[mmx].classList.contains("retro")){                                          
                                            var mmxIsThisStyle = 1;
                                        }   
                                        
                                        //if displayed image is not from declicked style, run this code
                                        if (searchBox.value.length < 1 && !mmxIsThisStyle){

                                            //remove de clicked styles array from workingArray 
                                            removeImgStyle();
                                        }
                                            //same but for search mode
                                        else if (searchBox.value.length > 1 && !mmxIsThisStyle){

                                            searchModeRemoveImgStyle();
                                        }

                                        //if other cbs are either not checked or are but dont have a style in searchBoxValue
                                        if (VWContainsImg === "no" && CPContainsImg === "no" && searchBox.value.length > 1){
                                            searchModeRemoveImgStyle(); 
                                        }
                                            //if displayed image (mmx) is this style, run this code 
                                            else if(mmxIsThisStyle === 1 && workingArray.length>1){

                                                //if other cbs are still checked, run below code, else go straight to clearing photoViewSection
                                                if( (!vaporWaveCB.classList.contains("unchecked")) && (!cyberPunkCB.classList.contains("unchecked")) || (!cyberPunkCB.classList.contains("unchecked")) || (!vaporWaveCB.classList.contains("unchecked")) ){
                                                //RIGHT ARROW FUNCTION UNTIL MMX IS NOT THIS STYLE, then remove delicked styles mages
                                                //if can't go right then go left

                                                    //if mmx is first image displayed, rightArrowFunction() until mmx is not this style
                                                    if (workingArray[0] === workingArray[mmx]){

                                                        do {
                                                          rightArrowFunction();
                                                        }
                                                        while (workingArray[mmx].classList.contains("retro"));  

                                                    //if displayed image is not first image of workingArray
                                                    }else{
                                                        //if mmx is the last img in workingArray(last img to be displayed), leftArrowFunction() until mmx is not this style
                                                        //or this style has an image last in workingArray
                                                        if ( (mmx+1 === workingArray.length) || (workingArray.slice(-1)[0].classList.contains("retro")) ){
                                                            do {
                                                                //if the imgs between workingArray[0] and mmx are this style and last img is this style. then rightArrowFunction() until mmx mot this style 
                                                                if (workingArray[0] === workingArray[mmx] && workingArray[0].classList.contains("retro")){
                                                                    do {
                                                                      rightArrowFunction(); 
                                                                    }
                                                                    while (workingArray[mmx].classList.contains("retro")); 
                                                                    break;
                                                                }
                                                              leftArrowFunction();
                                                            }
                                                            while (workingArray[mmx].classList.contains("retro")); 
                                                            
                                                        }else{
                                                            //generic rightArrowFunction() until mmx is not this style (eg if you're in middle of workingArray)
                                                            do {
                                                              rightArrowFunction();
                                                            }
                                                            while (workingArray[mmx].classList.contains("retro"));                            
                                                        }                   
                                                    }
                                                }

                                                //evoke removeImgStyle function
                                                if (searchBox.value.length < 1){//if in mormal mode
                                                    removeImgStyle();
                                                }
                                                else{//if in seaerch mode
                                                    searchModeRemoveImgStyle();
                                                }
    //                                            mmxArrowCounterReset();//reset arrow counter, mmx etc
                                            }
//                                        else{
//                                           //if displayed image (mmx) is not this style, run this code to reset counters
//                                            if (workingArray.length>=1 && workingArray[0].classList.contains("displayNone") && retroPicCounter>=1 || !mainImgRetro[0].classList.contains("displayNone") && workingArray.length>=1 && workingArray[0].classList.contains("displayNone") ){
////                                                mmx = mmx - retroPicCounter -1; //take away the amount of images that were displayed from mmx
////                                                arrowCounter = arrowCounter - retroPicCounter -1;
//                                                //reset mmx and arrow counter
//                                                mmxArrowCounterReset();
//
//                                            }
//                                        }

        //                                bugFunction();
                                        myViewCheckedIsNowNone();
                                        mmxIsThisStyle = 0;
                                        retroPicCounter = 0;
                                        ORContainsImg = "no";
                                        mmxArrowCounterReset();
                                    }
                                }

                                //...
                                //MYVIEW CYBERPUNK CHECKBOX CODE
                                if (targetID === "cyberPunk"){

                                    //UNCHECKED => CHECKED

                                    if (e.target.classList.contains("checked")){
                                        

                                        function makeRemaindingImgArray(){

                                        }

                                        if (searchBox.value.length < 1){
                                            
                                            //IF CYBERPUNK IS FIRST CHECKBOX TO BE CHECKED
                                           //if no other checkboxes are checked then display first img of styles array
                                            if ( (retroCB.classList.contains("unchecked")) && (vaporWaveCB.classList.contains("unchecked")) && (cyberPunkCB.classList.contains("checked")) ){

                                                workingArray = workingArray.concat(mainImgCyberPunk);
                                                workingArray[mmx].classList.remove("displayNone"); //make the firstimg shown but the rest not
                                            }
                                            // IF NOT FIRST TO BE CHECKED
                                            //shuffle all imgs after mmx and then return in workingArray     
                                            else{
                                                if (checkedCbCounter > 0 && workingArray[0]){

                                                    //combine remaining images with checked cb images
                                                    remaindingImgArray = remaindingImgArray.concat(mainImgCyberPunk);
                                                    //shuffle remainding images and newly added images
                                                    remaindingImgArray.sort(function() { return 0.5 - Math.random() });
                                                    //push remainding images and new images to workingArray
                                                    workingArray = workingArray.concat(remaindingImgArray);
                                                }
                                            }
                                        }else{
                                            //SEARCHBOX PREFBOX CODE
  
                                            //if cb style has images pertaining to searchBox input, push to workingArray
                                            function addSearchImgsToWorkingArray(){

                                                //if cb checked
                                                if (checkedCbCounter === 1 || !workingArray[0]){
                                                    for (var i = 0; i<searchBoxValueClass.length; i++){
                                                        if (searchBoxValueClass[i].classList.contains("mainImgCyberPunk")) {	
                                                            workingArray.push(searchBoxValueClass[i]);
                                                        }        
                                                    }
                                                }
                                                //!if cb checked
                                                else if (checkedCbCounter === 2 || 3 && workingArray[0]){


                                                    for (var i = 0; i<searchBoxValueClass.length; i++){
                                                        if (searchBoxValueClass[i].classList.contains("mainImgCyberPunk")) {	
                                                            remaindingImgArray.push(searchBoxValueClass[i]);
                                                        }        
                                                    }
                                                    //shuffle remainding images and newly added images
                                                    remaindingImgArray.sort(function() { return 0.5 - Math.random() });

                                                    workingArray = workingArray.concat(remaindingImgArray);
                                                }
                                            }

                                            //determine if cb has images pertaining to searchBox value content
                                            for (var i = 0; i<searchBoxValueClass.length; i++){
                                                if (searchBoxValueClass[i].classList.contains("mainImgCyberPunk")) {	
                                                    CPContainsImg = "yes";
                                                }        
                                            }
                                            
                                            //if first cb clicked or other clicked cbs dont have a style pertaining to searchImg
                                            //clear photos and add searchbox images pertaining to this style to workingArray
                                            if (!remaindingImgArray){ 
                                                if (CPContainsImg === "yes"){
                                                    displayNoneAllImgs();		
                                                    workingArray = [];
                                                    addSearchImgsToWorkingArray();
                                                    workingArray[mmx].classList.remove("displayNone"); //make the firstimg shown
                                                }
                                            }
                                            //if not first clicked, then simply push images to workingArray
                                            else{
                                                addSearchImgsToWorkingArray();
                                            }
							
                                        }
                                        
                                    //CHECKED => UNCHECKED

                                    }
                                    else if(e.target.classList.contains("unchecked") && workingArray[0]){

//                                        myViewCbCounter--;
     
                                        //removes all declicked images from workingArray and adds displayNone to each of them
                                        //this particular code only works when mmx is not this style
                                        function removeImgStyle(){
                                            for (var i = 0; i < mainImgCyberPunk.length; i++) {

                                                var img = mainImgCyberPunk[i];                                    
                                                var imgPosition = workingArray.indexOf(img);
                                                workingArray.splice(imgPosition, 1);
                                                img.classList.add("displayNone");
                                            }                                            
                                        }
                                        //remove declicked cb images from searchBox value result
                                        function searchModeRemoveImgStyle(){
                                            for (var i = 0; i<searchBoxValueClass.length; i++){
                                                    if (searchBoxValueClass[i].classList.contains("mainImgCyberPunk")) {	

                                                        var img = searchBoxValueClass[i];
                                                        img.classList.add("displayNone");
                                                        var imgPosition = workingArray.indexOf(img);
                                                        workingArray.splice(imgPosition, 1);
                                                    }        
                                            }
                                        }
                                        
                                        var mmxIsThisStyle = 0;

                                        //if any img in this array is currently shown, mmxIsThisStyle = 1
                                        if(workingArray[mmx].classList.contains("cyberpunk")){                                          
                                            var mmxIsThisStyle = 1;
                                        }   
                                        
                                        //if displayed image is not from declicked style, run this code
                                        if (searchBox.value.length < 1 && !mmxIsThisStyle){

                                            //remove de clicked styles array from workingArray 
                                            removeImgStyle();
                                        }
                                            else if (searchBox.value.length > 1 && !mmxIsThisStyle){
                                                //same but for search mode
                                                searchModeRemoveImgStyle();
                                            }

                                        //if other cbs are either not checked or are but dont have a style in searchBoxValue
                                        if (ORContainsImg === "no" && VWContainsImg === "no" && searchBox.value.length > 1){
                                            searchModeRemoveImgStyle(); 
                                        }
                                            //if displayed image (mmx) is this style, run this code 
                                            else if (mmxIsThisStyle === 1 && workingArray.length>1){

                                                //if other cbs are still checked, run below code, else go straight to clearing photoViewSection
                                                if( (!vaporWaveCB.classList.contains("unchecked")) && (!retroCB.classList.contains("unchecked")) || (!retroCB.classList.contains("unchecked")) || (!vaporWaveCB.classList.contains("unchecked")) ){

                                                //RIGHT ARROW FUNCTION UNTIL MMX IS NOT THIS STYLE, then remove delicked styles mages
                                                //if can't go right then go left

                                                    //if mmx is first image to be displayed, rightArrowFunction() until mmx is not this style
                                                    if (workingArray[0] === workingArray[mmx]){

                                                        do {
                                                          rightArrowFunction();
                                                        }
                                                        while (workingArray[mmx].classList.contains("cyberpunk"));  

                                                    //if displayed image is not first image of workingArray
                                                    }else{
                                                        //if mmx is the last img in workingArray(last img to be displayed), leftArrowFunction() until mmx is not this style
                                                        if ( (mmx+1 === workingArray.length) || (workingArray.slice(-1)[0].classList.contains("cyberpunk")) ){
                                                            do {
                                                              leftArrowFunction();
                                                                //if the imgs between workingArray[0] and mmx are this style and last img is this style. then rightArrowFunction() until mmx mot this style 
                                                                if (workingArray[0] === workingArray[mmx] && workingArray[0].classList.contains("cyberpunk")){
                                                                    do {
                                                                      rightArrowFunction();
                                                                    }
                                                                    while (workingArray[mmx].classList.contains("cyberpunk")); 
                                                                    break;
                                                                }
                                                            }
                                                            while (workingArray[mmx].classList.contains("cyberpunk")); 
                                                        }else{
                                                            //generic rightArrowFunction() until mmx is not this style (eg if you're in middle of workingArray)
                                                            do {
                                                              rightArrowFunction();
                                                            }
                                                            while (workingArray[mmx].classList.contains("cyberpunk"));                            
                                                        }                   
                                                    }
                                                }

                                                //evoke removeImgStyle function
                                                if (searchBox.value.length < 1){//if in mormal mode
                                                    removeImgStyle();
                                                }
                                                else{//if in seaerch mode
                                                    searchModeRemoveImgStyle();
                                                }
    //                                            mmxArrowCounterReset();//reset arrow counter, mmx etc


                                            }
//                                        else{
//                                           //if displayed image (mmx) is not this style, run this code to reset counters
//                                            if (workingArray.length>=1 && workingArray[0].classList.contains("displayNone") && cyberPunkPicCounter>=1 || !mainImgCyberPunk[0].classList.contains("displayNone") && workingArray.length>=1 && workingArray[0].classList.contains("displayNone") ){
////                                                mmx = mmx - retroPicCounter -1; //take away the amount of images that were displayed from mmx
////                                                arrowCounter = arrowCounter - retroPicCounter -1;
//                                                //reset mmx and arrow counter
//                                                mmxArrowCounterReset();
//
//                                            }
//                                        }

        //                                bugFunction();
                                        myViewCheckedIsNowNone();
                                        mmxIsThisStyle = 0;
                                        cyberPunkPicCounter = 0;
                                        CPContainsImg = "no";
                                        mmxArrowCounterReset();//reset arrow counter, mmx etc

                                    }
                                }

                                //...
                                //MYVIEW VAPORWAVE CHECKBOX CODE
                                if (targetID === "vaporWave"){

                                    //UNCHECKED => CHECKED

                                    if (e.target.classList.contains("checked")){

                                        
//                                        myViewCbCounter++;

                                        if (searchBox.value.length < 1){

                                            //IF THIS IS FIRST CHECKBOX TO BE CHECKED
                                            //if no other checkboxes are checked then display first img of styles array
                                            if( (retroCB.classList.contains("unchecked")) && (cyberPunkCB.classList.contains("unchecked")) && (vaporWaveCB.classList.contains("checked")) ){

                                                workingArray = workingArray.concat(mainImgVaporWave);
                                                workingArray[mmx].classList.remove("displayNone"); //make the firstimg shown but the rest not
                                            }
                                            // IF NOT FIRST TO BE CHECKED
                                            //shuffle all imgs after mmx and then return in workingArray  
                                            else{
                                                if (checkedCbCounter > 0 && workingArray[0]){

                                                    //combine remaining images with checked cb images
                                                    remaindingImgArray = remaindingImgArray.concat(mainImgVaporWave);
                                                    //shuffle remainding images and newly added images
                                                    remaindingImgArray.sort(function() { return 0.5 - Math.random() });
                                                    //push remainding images and new images to workingArray
                                                    workingArray = workingArray.concat(remaindingImgArray);
                                                }
                                            }
                                        }else{

                                            //SEARCHBOX PREFBOX CODE
  
                                            //if cb style has images pertaining to searchBox input, push to workingArray
                                            function addSearchImgsToWorkingArray(){
//                                                debugger;
                                                //if first cb checked
                                                if (checkedCbCounter === 1 || !workingArray[0]){
                                                    for (var i = 0; i<searchBoxValueClass.length; i++){
                                                        if (searchBoxValueClass[i].classList.contains("mainImgVaporWave")) {	
                                                            workingArray.push(searchBoxValueClass[i]);
                                                        }        
                                                    }
                                                }
                                                //!if first cb checked
                                                else if (checkedCbCounter === 2 || 3 && workingArray[0]){

                                                    for (var i = 0; i<searchBoxValueClass.length; i++){
                                                        if (searchBoxValueClass[i].classList.contains("mainImgVaporWave")) {	
                                                            remaindingImgArray.push(searchBoxValueClass[i]);
                                                        }        
                                                    }
                                                    //shuffle remainding images and newly added images
                                                    remaindingImgArray.sort(function() { return 0.5 - Math.random() });

                                                    workingArray = workingArray.concat(remaindingImgArray);
                                                }
                                            }

                                            //determine if cb has images pertaining to searchBox value content
                                            for (var i = 0; i<searchBoxValueClass.length; i++){
                                                if (searchBoxValueClass[i].classList.contains("mainImgVaporWave")) {	
                                                    VWContainsImg = "yes";
                                                }        
                                            }
                                            
                                            //if first cb clicked or other clicked cbs dont have a style pertaining to searchImg
                                            //clear photos and add searchbox images pertaining to this style to workingArray
                                            if (!remaindingImgArray){ 
                                                if (VWContainsImg === "yes"){
                                                    displayNoneAllImgs();		
                                                    workingArray = [];
                                                    addSearchImgsToWorkingArray();
                                                    workingArray[mmx].classList.remove("displayNone"); //make the firstimg shown
                                                }
                                            }
                                            //if not first clicked, then simply push images to workingArray
                                            else{
                                                addSearchImgsToWorkingArray();
                                            }
							
                                        }



                                    }
                                    //CHECKED => UNCHECKED                                    
                                    else if(e.target.classList.contains("unchecked") && workingArray[0]){ 

//                                        myViewCbCounter--;

                                        //var representing that the style is not in searchBoxValue array
                                        
     
                                        //removes all declicked images from workingArray and adds displayNone to each of them
                                        //this particular code only works when mmx is not this style
                                        function removeImgStyle(){
                                            for (var i = 0; i < mainImgVaporWave.length; i++) {

                                                var img = mainImgVaporWave[i];                                    
                                                var imgPosition = workingArray.indexOf(img);
                                                workingArray.splice(imgPosition, 1);
                                                img.classList.add("displayNone");
                                            }                                            
                                        }
                                        //remove declicked cb images from searchBox value result
                                        function searchModeRemoveImgStyle(){
                                            for (var i = 0; i<searchBoxValueClass.length; i++){
                                                    if (searchBoxValueClass[i].classList.contains("mainImgVaporWave")) {	

                                                        var img = searchBoxValueClass[i];
                                                        img.classList.add("displayNone");
                                                        var imgPosition = workingArray.indexOf(img);
                                                        workingArray.splice(imgPosition, 1);

                                                        
                                                    }        
                                            }
                                        }
                                        
                                        var mmxIsThisStyle = 0;

                                        //if any img in this array is currently shown, mmxIsThisStyle = 1
                                        if(workingArray[mmx].classList.contains("vaporwave")){                                          
                                            var mmxIsThisStyle = 1;
                                        }   
                                        
                                        //if displayed image is not from declicked style, run this code
                                        if (searchBox.value.length < 1 && !mmxIsThisStyle){

                                            //remove de clicked styles array from workingArray 
                                            removeImgStyle();
                                        }
                                            else if (searchBox.value.length > 1 && !mmxIsThisStyle){
                                                //same but for search mode
                                                searchModeRemoveImgStyle();
                                            }

                                        //if other cbs are either not checked or are but dont have a style in searchBoxValue
                                        if (CPContainsImg === "no" && ORContainsImg === "no" && searchBox.value.length > 1){
                                            searchModeRemoveImgStyle(); 
                                        }

                                            //if displayed image (mmx) is this style, run this code 
                                            else if (mmxIsThisStyle === 1 && workingArray.length>1){

                                                //if other cbs are still checked, run below code, else go straight to clearing photoViewSection
                                                if( (!retroCB.classList.contains("unchecked")) && (!cyberPunkCB.classList.contains("unchecked")) || (!cyberPunkCB.classList.contains("unchecked")) || (!retroCB.classList.contains("unchecked")) ){

                                                //RIGHT ARROW FUNCTION UNTIL MMX IS NOT THIS STYLE, then remove delicked styles mages
                                                //if can't go right then go left

                                                    //if mmx is first image to be displayed, rightArrowFunction() until mmx is not this style
                                                    if (workingArray[0] === workingArray[mmx]){

                                                        do {
                                                          rightArrowFunction();
                                                        }
                                                        while (workingArray[mmx].classList.contains("vaporwave"));  

                                                    //if displayed image is not first image of workingArray
                                                    }else{
                                                        //if mmx is the last img in workingArray(last img to be displayed), leftArrowFunction() until mmx is not this style
                                                        if ( (mmx+1 === workingArray.length) || (workingArray.slice(-1)[0].classList.contains("vaporwave")) ){
                                                            do {
                                                              //if the imgs between workingArray[0] and mmx are this style and last img is this style. then rightArrowFunction() until mmx mot this style 
                                                              if (workingArray[0] === workingArray[mmx] && workingArray[0].classList.contains("retro")){
                                                                  do {
                                                                    rightArrowFunction();
                                                                  }
                                                                  while(workingArray[mmx].classList.contains("retro")); 
                                                                  break;
                                                               }  
                                                              leftArrowFunction();
                                                            }
                                                            while (workingArray[mmx].classList.contains("vaporwave")); 
                                                        }else{
                                                            //generic rightArrowFunction() until mmx is not this style (eg if you're in middle of workingArray)
                                                            do {
                                                              rightArrowFunction();
                                                            }
                                                            while (workingArray[mmx].classList.contains("vaporwave"));                 
                                                        }                   
                                                    }
                                                }

                                                //evoke removeImgStyle function
                                                if (searchBox.value.length < 1){//if in mormal mode
                                                    removeImgStyle();
                                                }
                                                else{//if in seaerch mode
                                                    searchModeRemoveImgStyle();
                                                }
    //                                            mmxArrowCounterReset();//reset arrow counter, mmx etc


                                            }
//                                        else{
//                                           //if displayed image (mmx) is not this style, run this code to reset counters
//                                            if (workingArray.length>=1 && workingArray[0].classList.contains("displayNone") && vaporWavePicCounter>=1 || !mainImgVaporWave[0].classList.contains("displayNone") && workingArray.length>=1 && workingArray[0].classList.contains("displayNone") ){
////                                                mmx = mmx - retroPicCounter -1; //take away the amount of images that were displayed from mmx
////                                                arrowCounter = arrowCounter - retroPicCounter -1;
//                                                //reset mmx and arrow counter
//                                                mmxArrowCounterReset();
//
//                                            }
//                                        }

        //                                bugFunction();
                                        myViewCheckedIsNowNone();
                                        mmxIsThisStyle = 0;
                                        vaporWavePicCounter = 0;
                                        VWContainsImg = "no";
                                        mmxArrowCounterReset();//reset arrow counter, mmx etc

                                    }

                                } 
                                 myViewArrowToggleFunction();       
                    }

                }   
            });


//CLEAR ALL - CHECKBOX CODE
//........................................................................................

    var cBRefresh = document.querySelector(".imageReset");

    cBRefresh.addEventListener("click", clearAllFunction) 

	function clearAllFunction(e){

        for (var i = 0; i<formCheckBox.length; i++){

    		//code that runs when clear checkbox is clicked and clearcheckbox is true
            if (formCheckBox[i].classList.contains("checked")){//classList checked

                formCheckBox[i].classList.remove("checked");
                formCheckBox[i].classList.add("unchecked");
//                var cBValue = document.querySelector(formCheckBox[i].value);
//                document.querySelector("style#preferences").textContent = cBValue + "{ display: none !important; }";
                topPageArrowContainer.classList.add("displayNone");

            }
        }

		selected = {};

		for (var i = 0; i <img.length; i++){

			img[i].classList.add("displayNone");
		}

		for (var i = 0; i <workingArray.length; i++){

			workingArray[i].classList.add("displayNone");
		}

		workingArray = [];//clear all content from workingArray
		myViewCounterReset();//set all myView counters to default
		rightArrow.classList.add("displayNone");
		leftArrow.classList.add("displayNone");

		searchBox.value = "";

        comViewWorkingArray = [];

        loadImg = 0;

        checkedCbCounter = 0;
    }

//SELECT-ALL CODE
//....................................................................................
//
//    var cBSelectAll = document.querySelector(".cBSelect-all");
//
//    cBSelectAll.addEventListener("click",function(e){
//
//    //var values = [];
//
//        if ((currentView === "facebookView" || currentView === "pintrestView") === true){
//
//            for (var i = 0; i<formCheckBox.length; i++){
//
//                if (!formCheckBox[i].checked) {
//                    formCheckBox[i].checked = true;
//                    selected[formCheckBox[i].value] = true;
//
//             var cssRules = Object.keys(selected).join(",") + "{ display: block !important; }";
//             document.querySelector("style#preferences").textContent = cssRules;
//                }
//            }
//            values = [];
//            searchBox.value = "";
//        }else{
//
//            //if select all is clicked
//            //loop through checkboxes
//            //if its not checked, make it checked,
//            //concat the relevant addition to workingArray
//            for (var i = 0; i<formCheckBox.length; i++){
//
//                if (!formCheckBox[i].checked){
//                    formCheckBox[i].checked = true;
//    //                            var checkBoxClass = formCheckBox[i].value;
//    //                            checkBoxClass = document.querySelectorAll(checkBoxClass);
//    //                            checkBoxClass =  Array.prototype.slice.call(checkBoxClass);
//    //                            workingArray.concat(checkBoxClass);
//                }
//            }
//			
//			if (searchBox.value.length < 1){
//            	myViewSelectAll();
//			}
//
//			if (searchBox.value.length > 1){
//				if (workingArray.length>1){
//					workingArray[mmx].classList.add("displayNone");
//				}
//				workingArray = [];
//				// shows any image that relates to what is in the search box
//				for (var i = 0; i<searchBoxValueClass.length; i++){
//					if (searchBoxValueClass[i].classList.contains("mainImg") ){
//						workingArray.push(searchBoxValueClass[i]);
//
//					}
//				}
//				workingArray[mmx].classList.remove("displayNone");			
//			}
//
//            if (leftArrow.classList.contains("displayNone")){
//                workingArray[mmx].classList.remove("displayNone");   
//                leftArrow.classList.remove("displayNone");
//                rightArrow.classList.remove("displayNone")
//            }
//
//        }
//
//    });

