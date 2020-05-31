//INFO/ABOUT CODE
//..........................................................................................................................................

    //info button protocol
    
    infoButton.addEventListener("click",infoButtonFunction);

        function infoButtonFunction (){
            if (infoPicView.classList.contains("displayNone")){
                infoPicView.classList.remove("displayNone");
                photoViewSection.classList.add("displayNone");
            }else{
                infoPicView.classList.add("displayNone");
                photoViewSection.classList.remove("displayNone");
            }
        }

    //exit info section and return to whereever the uer was before clicking
        var exitInfoButton = document.querySelector("#exitInfo");

    exitInfoButton.addEventListener("click",exitInfoFunction);

    function exitInfoFunction() {
        infoPicView.classList.add("displayNone");
        photoViewSection.classList.remove("displayNone");
        infoButton.classList.remove("on");
        infoButton.classList.add("off");
        }

    //info button page navigation between text and controls


    infoArrow.addEventListener("click",infoArrowFunction);

    function infoArrowFunction (){

        var infoPicAbout = document.querySelector(".infoPicABout");
        var infoPicControls = document.querySelector("#infoPicControlsWrap");

            if ( (infoPicAbout.classList.contains("displayNone") === false) ){
                infoPicAbout.classList.add("displayNone");
                infoPicControls.classList.remove("displayNone");
            }else{
                if (infoPicAbout.classList.contains("displayNone")){
                    infoPicAbout.classList.remove("displayNone");
                    infoPicControls.classList.add("displayNone");
                 }

            }

        }

    
