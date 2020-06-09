//DISPLAY CODE
//.............................................................................................................................

    //displaybutton protocol

        displayButton.addEventListener("click",displayButtonFunction);
        adaptiveDisplayButton.addEventListener("click",adaptiveDisplayButtonFunction);

        //1100 px and OVER display view
        function displayButtonFunction (){

			var dnFacebook = fbTimelineView.classList.contains("displayNone");
			var dnPintrest = pintrestView.classList.contains("displayNone");
			var dnInfoPic = infoPicView.classList.contains("displayNone");
			var dnmyView = myView.classList.contains("displayNone");

            
            //MYVIEW => FACEBOOK VIEW WHEN DSPLY BTN CLICKED
                if( (!dnmyView) && (dnFacebook === true) && (dnPintrest === true) && (dnInfoPic === true) ){

                     // set new speed for movieMode bc fb/pintrest view/mode

                    fbTimelineView.classList.remove("displayNone"); //remove displayNone from fbView
                    myView.classList.add("displayNone"); //add dislayNone to myView
                    currentView = "facebookView"; //change currentView to facebookView
                    formBox.classList.remove("comViewOff"); //tell formBox its no longer in myView
                    formBox.classList.add("comViewOn"); //tell formbox its in pintrestView/facebookView
                    leftArrow.classList.add("displayNone");
                    rightArrow.classList.add("displayNone");
                    switchViewFunction();//add comViewOn to preferences class


                    //code that takes preferences from myview and applys them to facebookView
                    //so if a checkbox is checked, it adds displayNone to myView image and appends same image in faceBookview format
                    if (workingArray.length>1){
                        workingArray[mmx].classList.remove("displayNone");
                    }             

                    myViewCounterReset(); //reset all myView counters to default
                    workingArray = []; //delete content from workingArray

                    if (searchBox.value.length > 1 ){
                        searchFunction();//if in search mode, load 5 images from searchBox value and display them
                    }
                    else{
                        initScrollFunction();//loads 5 images and displays them
                    }
                    
                    //if movie mode is already running, switch it to faceboook-pintrest mode
                    if (movieModeImg.classList.contains("a")){
                        speed = 18;
                        ScrollFunction();
                    }
                       
                    //find number of displayed images
                    setTimeout( () => findNumberOfDisplayedImgs(), 500);
                }else{

                    //FACEBOOK VIEW => PINTREST VIEW WHEN DSPLY BTN CLICKED

                    if ( (!dnFacebook) && (dnmyView === true) && (dnPintrest === true) && (dnInfoPic === true) ) {
                        pintrestView.classList.remove("displayNone");
                        fbTimelineView.classList.add("displayNone");
                        currentView = "pintrestView";
                        topPageArrowContainer.classList.add("displayNone");//hide top page nav arrow

                        if (searchBox.value.length > 1){
                            searchFunction();
                        }
                        else{
                            initScrollFunction();//loads images and displays them                    
                        }

                    }else{
                            //PINTREST => MYVIEW VIEW WHEN DSPLY BTN CLICKED
                        if ( (!dnPintrest) && (dnmyView === true) && (dnFacebook === true) && (dnInfoPic === true) ){
                            //IF IN SEARCHBOX MODE
                            if (searchBox.value.length > 1){
                                currentView = "myView";
                                displayNoneAllImgs();
                                displayNoneAllImgs();
                                searchFunction();
                                pintrestView.classList.add("displayNone");//add display none to pintrestView
                                myView.classList.remove("displayNone");
                                switchViewFunction();//add comViewOff to preferences class
   
                            //IF IN CHECKBOX MODE
                            }else{

                                myView.classList.remove("displayNone");//remove displayNone from myView
                                pintrestView.classList.add("displayNone");//add display none to pintrestView
                                topPageArrowContainer.classList.add("displayNone");//add displayNone to bottom-right nav arrow
                                currentView = "myView";//make currentView myView
                                formBox.classList.remove("comViewOn");//tell formBox it's not longer in fbView/pintrestView
                                formBox.classList.add("comViewOff");//tell formBox it's now in myView

        //                        workingArray = [];
        //                        mmx = 0;

                                //displayNones all pintrest and facebook imgs
//                                for (var i = 0; i < mainImg.length; i++){
//                                        var mainImgI = mainImg[i];
//                                        var cssRules = mainImgI + "{ display: none !important; }";
//                                        document.querySelector("style#preferences").textContent = cssRules;
//                                }

                                //make code that displayNones all images
//                                for (var i = 0; i < formCheckBox.length; i++){
//                                    if (formCheckBox[i].checked){
//                                        var checkedBoxClass = formCheckBox[i].value;
//                                        var newcb = document.querySelectorAll(checkedBoxClass);/*.classList.remove("displayNone");*/
//                                            for (var ii = 0; ii < newcb.length; ii++){
//                                                newcb[ii].classList.add("displayNone");
//                                            }     
//                                    }
//                                } 
                                //loop to check what checkboxes are checked and display the img in myView mode if it is checked
//                                myViewInit();
//
//                                workingArray[mmx].classList.remove("displayNone");
                                myViewInit();
                                
                                if (workingArray.length > 1){
                                    workingArray[mmx].classList.remove("displayNone");
                                    leftArrow.classList.remove("displayNone");
                                    rightArrow.classList.remove("displayNone");
                                }

                            }

                            myViewArrowToggleFunction();//removes arrows if only one image is present in workingArray

                            //if movie mode is already running, switch it to faceboook-pintrest mode
                            if (movieModeImg.classList.contains("a")){
                                for (var i = 0; i < radio.length; i++){
                                    if (radioOne.checked === true) {
                                        speed = 2000;
                                    }
                                    if (radioTwo.checked === true){
                                        speed = 1600;
                                    }
                                    if (radioThree.checked === true){
                                        speed = 1000;
                                    }
                                } 
                                ScrollFunction();
                            }
                        }
                        else{
                                
                                //INFO-VIEW => DISPLAYVIEW (BACK TO WHATEVER VIEW WAS LAST DISPLAYED(EG MYVIEW))
                                if((!infoPicView.classList.contains("displayNone")) && photoViewSection.classList.contains("displayNone")){

                                    infoPicView.classList.add("displayNone"); 		              
                                    photoViewSection.classList.remove("displayNone");
                                }
                        }
                    }
                }
            

			imageShuffle();
        }

//    //ADAPTIVE DISPLAY FUNCTION
//        function adaptiveDisplayButtonFunction (){
//
//
//			
//        var dnFacebook = fbTimelineView.classList.contains("displayNone");
//        var dnPintrest = pintrestView.classList.contains("displayNone");
//        var dnInfoPic = infoPicView.classList.contains("displayNone");
//
//        topPageArrowContainer.classList.add("displayNone");
//
//    
//                //FACEBOOK VIEW => PINTREST VIEW 
//                if ( (!dnFacebook) && (dnPintrest === true) && (dnInfoPic === true) ) {
//                pintrestView.classList.remove("displayNone");
//                fbTimelineView.classList.add("displayNone");
//                currentView = "pintrestView";
//                    }else{
//                        //PINTREST VIEW => FACEBOOK VIEW
//                        if ( (dnFacebook === true) && (!dnPintrest) && (dnInfoPic === true) ) {
//                        pintrestView.classList.add("displayNone");
//                        fbTimelineView.classList.remove("displayNone");
//                        currentView = "facebookView";
//
//                           }else{
//                            //will display myView if pintrest view is enabled
//                            if ( (!dnPintrest) && (dnmyView === true) && (dnFacebook === true) && (dnInfoPic === true) ){
//                            myView.classList.remove("displayNone");
//                            pintrestView.classList.add("displayNone"); 
//                            currentView = "myView";
//                                }else{
//                                    if( (infoPicView.classList.contains("displayNone")===false) && photoViewSection.classList.contains("displayNone") ){infoPicView.classList.add("displayNone"); 		              photoViewSection.classList.remove("displayNone");}
//                    }
//                }
//            }
//		imageShuffle();
//    }


function adaptiveDisplayButtonFunction(){

    var dnFacebook = fbTimelineView.classList.contains("displayNone");
    var dnPintrest = pintrestView.classList.contains("displayNone");
    var dnInfoPic = infoPicView.classList.contains("displayNone");

    topPageArrowContainer.classList.add("displayNone");

    //FACEBOOK VIEW => PINTREST VIEW 
    if ( (!dnFacebook) && (dnPintrest===true) && (dnInfoPic===true) ){

        pintrestView.classList.remove("displayNone");
        fbTimelineView.classList.add("displayNone");
        currentView = "pintrestView";
        initScrollFunction();
    }

    //PINTREST VIEW => FACEBOOK VIEW
    if ( (dnFacebook === true) && (!dnPintrest) && (dnInfoPic === true) ){

        pintrestView.classList.add("displayNone");
        fbTimelineView.classList.remove("displayNone");
        currentView = "facebookView";
        initScrollFunction();
    }

    //INFOPICVIEW => PHOTOVIEW (to last view user was in)
    if( (!infoPicView.classList.contains("displayNone")) && (photoViewSection.classList.contains("displayNone")) ){

        infoPicView.classList.add("displayNone"); 
        photoViewSection.classList.remove("displayNone");
    }
}