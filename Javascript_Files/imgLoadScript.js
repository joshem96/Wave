//IMGLOAD CODE
//.............................................................................................................................

	//VARIABLES
	//...........................................................
		var loadImg; // how many images will show at a time
		var scrollPosition = 1000; // position on screen 

	//function that is first called when screen is cleared(no images on screen but cbs checked) for next method (eg switching from myView => fbView)
	//...........................................................
		function initScrollFunction(){
			setTimeout(function(){
				//shuffle html img tags
				imageShuffle();
				//empty comViewWorkingArray and displayNoneAllImgs
				comViewWorkingArray = [];
				displayNoneAllImgs();
				//find how many images need to load on screen at a time
				setLoadImgNumber();
				//setup comViewWorkingArray with checked cb images and shuffle comViewWorkingArray
				if (searchBox.value.length < 1){
					//if retro checkbox is checked
					if (retroCB.classList.contains("checked")){
						if (currentView === "facebookView"){
							comViewWorkingArray = comViewWorkingArray.concat(fbImgRetro);//this is an array of all the classess with .drivingShot
						}
						else if (currentView === "pintrestView"){
							comViewWorkingArray = comViewWorkingArray.concat(pImgRetro);//this is an array of all the classess with .drivingShot
						}            
					}
					//if vaporwave checkbox is checked
					if (vaporWaveCB.classList.contains("checked")){
						if (currentView === "facebookView"){
							comViewWorkingArray = comViewWorkingArray.concat(fbImgVaporWave);//this is an array of all the classess with .drivingShot
						}
						else if (currentView === "pintrestView"){
							comViewWorkingArray = comViewWorkingArray.concat(pImgVaporWave);//this is an array of all the classess with .drivingShot
						}            
					}
					//if cyberpunk checkbox is checked
					if (cyberPunkCB.classList.contains("checked")){
						if (currentView === "facebookView"){
							comViewWorkingArray = comViewWorkingArray.concat(fbImgCyberPunk);//this is an array of all the classess with .drivingShot
						}
						else if (currentView === "pintrestView"){
							comViewWorkingArray = comViewWorkingArray.concat(pImgCyberPunk);//this is an array of all the classess with .drivingShot
						}            
					}
					//shuffle img array
					comViewWorkingArray.sort(function() { return 0.5 - Math.random() });
				}
				//order comViewWorkingArray images in ascending (1,2,3) fashion on screen and display 
				if (comViewWorkingArray[0]){
					//show first 5 images
					//loadImg starts at 5 and goes up by 5 every time it gets to the bottom
					for (var i = 0; i < loadImg; i++){
						if (comViewWorkingArray[i]){
							var previousImg = i - 1; //last img before the next img is to be displayed
							//make comViewWorkingArray[0](first image in array) the first child of its parent div
							if (i < 1){
								comViewWorkingArray[i].parentNode.insertBefore(comViewWorkingArray[i], comViewWorkingArray[i].parentNode.firstChild);
							}
							//insert corresponding images in order; 0,1,2,3, etc
							else{ 
								comViewWorkingArray[i].parentNode.insertBefore(comViewWorkingArray[i], comViewWorkingArray[previousImg].nextSibling);//insert next img after last displayed img
							}
							comViewWorkingArray[i].classList.remove("displayNone");//display image
						}
					}
				}
				//remove displayNone from view wrap (faceBookViewWrap/Container)
				if (currentView === "facebookView"){
					fbTimelineView.classList.remove("displayNone"); //remove displayNone from fbView
				}else if (currentView === "pintrestView"){
					 pintrestView.classList.remove("displayNone"); //remove displayNone from fbView           
				}
			},25);
		}

	//function that evokes when user reaches the bottom of the screen
	//displays new images depending on loadImg value (pretend fetch from server)
	//...........................................................
		window.addEventListener("scroll",scrollFunction);
		function scrollFunction(){
				//if scroll-bar is at bottom of screen, images are in comViewWorkingArray and the last image is not displayed
				if ( (window.pageYOffset + window.innerHeight) >= (document.body.scrollHeight) && comViewWorkingArray.length>1 && comViewWorkingArray.slice(-1)[0].classList.contains("displayNone") ){
					//set variable with number correlating to how many images are to be displayed
					if (currentView === "facebookView"){
						loadImg = loadImg + 5;
					}
					else if (currentView === "pintrestView"){
						if (window.innerWidth > 1860){
							loadImg = loadImg + 30;
						}
						if ( (window.innerWidth > 1550) && (window.innerWidth < 1859) ){
							loadImg = loadImg + 20;
						}
						if ( (window.innerWidth > 1100) && (window.innerWidth < 1549) ){
							loadImg = loadImg + 16;
						}
						if ( (window.innerWidth > 700) && (window.innerWidth < 1099) ){
							loadImg = loadImg + 30;//originally loadImg = 30 + 30
						}
						if ( (window.innerWidth > 0) && (window.innerWidth < 699) ){
							loadImg = loadImg + 16;//originally loadImg = 16 + 16
						}
					}
					//display appropraite number of images depending on value of loadImg
					for (var i = 0; i < loadImg; i++){
						if (comViewWorkingArray[i]){
							//display comViwWorkingArray images until all are displayed
							if (comViewWorkingArray.slice(-1)[0].classList.contains("displayNone")){
								if (comViewWorkingArray[i].classList.contains("displayNone")){
									var previousImg = i - 1; //var pertaining to the last image displayed
									//insert corresponding images in ordely order; 0,1,2,3, etc
									if (comViewWorkingArray[previousImg]){
										comViewWorkingArray[i].parentNode.insertBefore(comViewWorkingArray[i], comViewWorkingArray[previousImg].nextSibling);//insert next img after last displayed img
										comViewWorkingArray[i].classList.remove("displayNone");//display img
									}
								}
							}
						}
					}
				}
				findNumberOfDisplayedImgs(); // returns value of how many images are currently displayed on screen
		}

	//set how many images load at a time with var loadImg		
	//...........................................................
		function setLoadImgNumber(){
			if (currentView === "facebookView"){
				loadImg = 5;
			}
			else if (currentView === "pintrestView"){
				if (window.innerWidth > 1860){
					loadImg = 30;
				}
				if ( (window.innerWidth > 1550) && (window.innerWidth < 1859) ){
					loadImg = 20;
				}
				if ( (window.innerWidth > 1100) && (window.innerWidth < 1549) ){
					loadImg = 16;
				}
				if ( (window.innerWidth > 700) && (window.innerWidth < 1099) ){
					loadImg = 30;
				}
				if ( (window.innerWidth > 0) && (window.innerWidth < 699) ){
					loadImg = 16;
				}
			}
		}