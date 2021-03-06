// MOVIE MODE CODE
//..............................................................................................................................

    //VARIABLES
    //..........................................................................
    	var winScroll = ""; //used for anonymous function that sets speed for movie mode
        var speed = 1600;
        var movieModeImg = document.querySelector(".moviemodeImg")
        var movieModeContainer = document.querySelector(".movieModeContainer");
        var radioOne = document.querySelector("input.radioOne");
        var radioTwo = document.querySelector("input.radioTwo");
        var radioThree = document.querySelector("input.radioThree");
        var radio = document.querySelectorAll(".radio");

    //PERIPHERALS (temp disable buttons, button colour etc)
    //..........................................................................
		//disables moveModeToggle for 1.5 seconds after being clicked
			movieModeToggleWrap.addEventListener("click",movieModeButtonDisable);
			function movieModeButtonDisable(){
			   movieModeToggleWrap.classList.add("buttonDisable");
				setTimeout(function(){
					movieModeToggleWrap.classList.remove("buttonDisable");
				},1500 );
			} 
		//BUTTON COLOR FUNCTION
			movieModeToggleWrap.addEventListener("click",buttonColorFunction);
			function buttonColorFunction() {
				//BUTTON OFF => BUTTON ON
				//change class from b => a and change colour
				if (movieModeImg.classList.contains("b")){
					movieModeImg.classList.add("a");
					movieModeImg.classList.remove("b");
					//make inner power button colour green
					powerSymbolOff.classList.add("displayNone");
					powerSymbolOn.classList.remove("displayNone");
				}
				else{
				  //BUTTON ON => BUTTON OFF
				  //change class from a => b and change colour
				  if(movieModeImg.classList.contains("a")){
					  movieModeImg.classList.add("b");
					  movieModeImg.classList.remove("a");
					  //make inner power button colour red
					  powerSymbolOn.classList.add("displayNone");
					  powerSymbolOff.classList.remove("displayNone");
					}   		
				} 
			}
		//TOP PAGE ARROW CONTAINER DISPLAYNONE TOOGLE
			{
					//"click" TPnav arrow and it will dissapear
					topPageArrowContainer.addEventListener("click",function(){
						if (!topPageArrowContainer.classList.contains("displayNone")){      
							topPageArrowContainer.classList.add("displayNone");
						}
					});
			}

	//RADIO code - make only one radio be on at a time && changing the speeds for movie mode
    //..........................................................................
		{
		//where radio with class'a' is the current speed
		//class'y' is added as soon as radio is clicked then removed immediately
		//FIRST SPEED RADIO SELECT - SLOW SPEED
			radioOne.addEventListener("click",function(){
				if( radioOne.classList.contains("b") ){
					// turn on speed one
					radioOne.classList.remove("b");
					radioOne.classList.add("a");
					radioOne.checked = true;
					// turn off speed two
					radioTwo.classList.remove("a");
					radioTwo.classList.add("b");
					radioTwo.checked = false;
					// turn off speed three
					radioThree.classList.remove("a");
					radioThree.classList.add("b");
					radioThree.checked = false;
					// change speed for myView
					currentView === "myView" ? speed = 2000 : speed = 18;
				}
				if (movieModeImg.classList.contains("a")){
					radioOne.classList.add("y");
				}
			});
		//SECOND SPEED RADIO SELECT - MEDIUM SPEED
			radioTwo.addEventListener("click",function(){
				if( radioTwo.classList.contains("b") ){
					// turn on speed one
					radioOne.classList.remove("a");
					radioOne.classList.add("b");
					radioOne.checked = false;
					// turn off speed two
					radioTwo.classList.remove("b");
					radioTwo.classList.add("a");
					radioTwo.checked = true;
					// turn off speed three
					radioThree.classList.remove("a");
					radioThree.classList.add("b");
					radioThree.checked = false;
					// change speed for myView
					currentView === "myView" ? speed = 1600 : speed = 18;
				}
				if (movieModeImg.classList.contains("a")){
					radioTwo.classList.add("y");
				}
			});
		//THIRD SPEED RADIO SELECT - FAST SPEED
			radioThree.addEventListener("click",function(){
				if( radioThree.classList.contains("b") ){
					// turn on speed one
					radioOne.classList.remove("a");
					radioOne.classList.add("b");
					radioOne.checked = false;
					// turn off speed two
					radioTwo.classList.remove("a");
					radioTwo.classList.add("b");
					radioTwo.checked = false;
					// turn off speed three
					radioThree.classList.remove("b");
					radioThree.classList.add("a");
					radioThree.checked = true;
					// change speed for myView
					currentView === "myView" ? speed = 1000 : speed = 18;
				}
				if (movieModeImg.classList.contains("a")){
					radioThree.classList.add("y");
				}
			});
		}

    //DISPLAY/HIDE MOVIE MODE CONTROL INTERFACE
    //...........................................................................
        movieModeImg.addEventListener("click",movieModeTabFunction);
        movieModeButtonAdaptive.addEventListener("click",movieModeTabFunction);
        function movieModeTabFunction(){
            if ( (movieModeContainer.classList.contains("displayNone")) || (!dnpc.classList.contains("displayNone")) || (!soundControlContainer.classList.contains("displayNone")) ){
                movieModeContainer.classList.remove("displayNone");
                dnpc.classList.add("displayNone");
				soundControlContainer.classList.add("displayNone");
            }
			else{
                movieModeContainer.classList.add("displayNone");
                }
            }

	//SCROLL/SLIDE FUNCTION
	//................................................................................................
		//evokes scroll function
		//used to ^^ when changing speeds in myView mode. As you can't evoke a function when you're currently in it
		function evokeScrollFunction(){
			if (movieModeImg.classList.contains("a")){
				ScrollFunction();
			}
		}
		//"CLICK" MOVIEMODE BUTTON
		movieModeToggleWrap.addEventListener("click",ScrollFunction);//when movieMode button clicked evoke scroll function
		//actual function that slides/scrolls
		function ScrollFunction() {
			hideSlideArrows();//hide myView slide arrows 
			//hide TP nav arrow
			setTimeout( () => {
				topPageArrowContainer.style.opacity = "0";
				setTimeout( () => topPageArrowContainer.classList.add("displayNone"), 501);
			}, 200);
			//movieModeImg starts with class "b", if clicked it will change to "a" which will trigger it to start movie mode
			if (movieModeImg.classList.contains("a")){
				switch (true){
					case (currentView === "myView"):
						//run myView moviemode code
						winScroll = setInterval(function() {
							if (movieModeImg.classList.contains("b")){
								clearInterval(winScroll);
							}
							rightArrowFunction();//same function used when right arrow physically clicked // constantly triggered until a radio is clicked
							//SLOW SPEED
							//if radio off => on, clears interval function, changes to new speed and runs function again
							if (radioOne.classList.contains("a") && radioOne.classList.contains("y") ) {
								clearInterval(winScroll);
								speed = 2000;
								radioOne.classList.remove("y");
								evokeScrollFunction();
							}
							//MEDIUM SPEED
							//if radio off => on, clears interval function, changes to new speed and runs function again
							if (radioTwo.classList.contains("a") && radioTwo.classList.contains("y") ) {
								clearInterval(winScroll);
								speed = 1600;
								radioTwo.classList.remove("y");
								evokeScrollFunction();
							}
							//FAST SPEED
							//if radio off => on, clears interval function, changes to new speed and runs function again
							if (radioThree.classList.contains("a") && radioThree.classList.contains("y")) {
								clearInterval(winScroll);
								speed = 1000;
								radioThree.classList.remove("y");
								evokeScrollFunction();
							}                       
							//if mode changes to fb or pintrest mode, clearInterval. 
							// code in displayButtonCode will then run scroll function again with the below switch case
							if (currentView === "facebookView" || currentView === "pintrestView" ){
								clearInterval(winScroll);
							}
						}, speed);

						break;

					case ((currentView === "facebookView") || (currentView === "pintrestView")):         
						//run comView moviemode code
						var winScroll = setInterval(function() {
							//TURN OFF MOVIEMODE
							if ( movieModeImg.classList.contains("b") ){
								clearInterval(winScroll);
								//show nav arrow if user has scrolled more than 75px
								if (window.pageYOffset > 75){
									setTimeout( () => {
										lockTime = 1000;
										var tempFunctLock = lockFunction();
										topPageArrowContainer.classList.remove("displayNone");
										setTimeout( () => topPageArrowContainer.style.opacity = "0.8", 10);
									}, 720);
								}
								//rest of code in if statement: if no checkboxes are checked don't show navArrow
								var arrowX = 0;
								var arrowY = 0;
								for (var i = 0; i <formCheckBox.length; i++){
									!formCheckBox[i].classList.contains("checked") ? arrowX = 1: arrowY = 1;
								}
								if ( (arrowX === 1) && (arrowY === 0) ){
									topPageArrowContainer.classList.add("displayNone");
								}
							}
							//slow speed
							if (radioOne.classList.contains("a")){
								window.scrollBy(0,1); 
							}
							//medium speed
							if (radioTwo.classList.contains("a")){
								window.scrollBy(0,3); 
							}
							//fast speed
							if(radioThree.classList.contains("a")){ 
								window.scrollBy(0,6);
							}
							//if mode changes to myView, clearInterval. 
							// code in displayButtonCode will then run scroll function again with the above switch case
							if (currentView === "myView"){
								clearInterval(winScroll);
							}
						},18);
				}   
			}
		}


