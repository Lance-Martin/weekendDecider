//Create global variables for user's latitude and longitude to be stored in if geolocation is supported.
var longitude = "";
var latitude = "";

//if the user's browser supports geolocation then console log "geolocation is supported"
if (navigator.geolocation) {
  console.log('Geolocation is supported!');

}

//if the user's browser does not support geolocation then console log "geolocation is not supported"
else {
  console.log('Geolocation is not supported for this Browser/OS version yet.');
}


//on page load use geolocation to grab the users latitude and longitude
window.onload = function() {
 var startPos;
 var geoSuccess = function(position) {
   startPos = position;
    latitude = startPos.coords.latitude;
    longitude = startPos.coords.longitude;
 };
 navigator.geolocation.getCurrentPosition(geoSuccess);
};

//function to hide the main question area
function pageLoad(){
	$("#mainQuestionArea").hide();
	}

//Function to reload the page when the user is finished with the quiz
function resetPage(){
  document.location.reload(true);
}

///The onClick series that begins when lazy is clicked//
	$(".lazyMood").click(function(){
	  $("#mood").hide();
	  $("#mainQuestionArea").show();
    $(".ampedABC").hide();
    $(".couponABC").hide();
		//establish variables to keep track of the user's movie preference for each question they answer.
	  var action = 0;
    var drama = 0;
    var comedy = 0;
		// establish a variable q set equal to 1 to keep track of which question the user is currently on
    var q = 1;
    $(".questionAsked").html("What's the best way to<br> say bye to a comrade?");
    $(".questionNumber").html("Question "+q+" of 4");
    $(".text1").html("Hasta La Vista");
    $(".text2").html("Get busy living <br>or get busy dying");
    $(".text3").html("Take care now,<br> bye bye then");
		//function to move the user to the 2nd question
    function question2() {
      $(".questionAsked").html("Zombie apocalypse! <br>Which item would you <br>choose to defend yourself?");
      $(".questionNumber").html("Question "+q+" of 4");
      $(".text1").html("Machine gun");
    	$(".text2").html("An Axe");
    	$(".text3").html("A Vinyl Record");
			//when the user clicks answer 1, 2, or 3 then run function question3 to move them to the next question
      $(".a1").on('click',function(){
        question3();
      });
      $(".a2").on('click',function(){
        question3();
      });
      $(".a3").on('click',function(){
        question3();
      });
    }

		//function to move the user to the 3rd question
    function question3(){
      $(".questionAsked").html("What’s your choice<br> of transportation?");
      $(".questionNumber").html("Question "+q+" of 4");
      $(".text1").html("Batmobile");
    	$(".text2").html("Horse Drawn Carriage");
    	$(".text3").html("Inner Tube");
			//When the user clicks answer 1, 2, or 3 then run function question4 to move them to the next question
      $(".a1").on('click',function(){
        question4();
      });
      $(".a2").on('click',function(){
        question4();
      });
      $(".a3").on('click',function(){
        question4();
      });
    }
		//function to be called to the take the user to the 4th question
    function question4() {
      $(".questionAsked").html("Where do you want to eat at?");
      $(".questionNumber").html("Question "+q+" of 4");
      $(".text1").html("Pizza Planet");
    	$(".text2").html("Big Kahuna Burger");
    	$(".text3").html("Bluth’s Banana Stand");
			//When the user clicks answer 1, 2, or 3 then run the result function to take them to the results page
      $(".a1").on('click',function(){
        results();
      });
      $(".a2").on('click',function(){
        results();
      });
      $(".a3").on('click',function(){
        results();
      });
    }
		//function to be called to give the user their movie.
    function results(){
    	$("#mood").hide();
	  	$("#mainQuestionArea").hide();
	  	$("#resultsPage").show();
			//variable to store the users selected genre.
			var genre = "";
			//if the user selected answers corresponding to action more than once then set genre equal to action
      if (action > 1) {
        genre = "action";
        category = 28;
      }
			//if the user selected answers corresponding to drama more than once then set genre equal to drama
      if (drama > 1) {
        genre = "drama";
        category = 18;
      }
			//if the user selected answers corresponding to drama more than once then set genre equal to drama
      if (comedy > 1) {
        genre = "comedy";
        category = 35;
      }
			//tell the user which genre was selected and that it was brought to them by themoviedb.org
      $(".broughtBy").html("This "+genre+" movie result was<br> brought to you by themoviedb.org");
			//tell the user that its time for netflix and chill
			$(".timeTo").html("Time for Netflix & chill");
			//insert the users selected category into a query URL for themoviedb.org api
    	var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=02109c05d4fdc8f5b547ae1daa004712&with_genres="+category+"&sort_by=popularity.desc&include_adult=true";
      $.ajax({url: queryURL, method: 'GET'})
     	.done(function(response) {
			//pick a random number that is within the length of the response
      var randomNum = Math.floor((Math.random() * response.results.length) +1);
			//use the random number to pick a random movie from the ajax response
			var outcome = response.results[randomNum];
			//append the poster image of the chosen movie
      $(".apiResult").append("<img src=https://image.tmdb.org/t/p/w185/"+outcome.poster_path+">");
      $(".resultsLine").html("We see you like "+genre+" movies. Kick back and relax.<br> We suggest you watch:");
			//append the title of the chosen movie
      $(".title").append(outcome.original_title);
     });
    }
		//when the user clicks answer 1 then increase the variable action by 1 and increase q by 1. Call function question2 to move the user to the 2nd question.
    $(".a1").on('click',function(){
      action++;
      q++;
      question2();
    });
		//when the user clicks answer 2 then increase the variable drama by 1 and increase q by 1. Call function question2 to move the user to the 2nd question.
    $(".a2").on('click', function(){
      drama++;
      q++;
      question2();
    });
		//when the user clicks answer 3 then increase the variable comedy by 1 and increase q by 1. Call function question2 to move the user to the 2nd question.
    $(".a3").on('click',function(){
      comedy++;
      q++;
      question2();
    });
  });


///The onClick series that beings when thrifty is clicked
	$(".thriftyMood").click(function(){
	  $("#mood").hide();
	  $("#mainQuestionArea").show();
    $(".ampedABC").hide();
    $(".movieABC").hide();
		//Create variables to store the user's coupon preference
	  var restaurants = 0;
    var entertainment = 0;
    var shopping = 0;
    var q = 1;
    $(".questionAsked").html("What sounds most appealing?");
    $(".questionNumber").html("Question "+q+" of 4");
    $(".text1").html("A fine<br> dining experience");
    $(".text2").html("Going to the <br>theatre or painting");
    $(".text3").html("Shopping spree");

    function question2() {
      $(".questionAsked").html("You are granted a lifetime supply<br> of one of the items below.<br> Which would it be?");
      $(".questionNumber").html("Question "+q+" of 4");
      $(".text1").html("Steak dinners");
    	$(".text2").html("Art lessons");
    	$(".text3").html("Video games");
      $(".a1").on('click',function(){
        question3();
      });
      $(".a2").on('click',function(){
        question3();
      });
      $(".a3").on('click',function(){
        question3();
      });
    }

    function question3(){
      $(".questionAsked").html("What best suits your personality?");
      $(".questionNumber").html("Question "+q+" of 4");
      $(".text1").html("Being catered to");
    	$(".text2").html("Creating something<br> from scratch");
    	$(".text3").html("Finding great bargains");
      $(".a1").on('click',function(){
        question4();
      });
      $(".a2").on('click',function(){
        question4();
      });
      $(".a3").on('click',function(){
        question4();
      });
    }

    function question4() {
      $(".questionAsked").html("If you could sum up your daily thoughts<br> in one word, what would it be?");
      $(".questionNumber").html("Question "+q+" of 4");
      $(".text1").html("Hungry");
    	$(".text2").html("Imaginative");
    	$(".text3").html("Indulgent");
      $(".a1").on('click',function(){
        results();
      });
      $(".a2").on('click',function(){
        results();
      });
      $(".a3").on('click',function(){
        results();
      });
    }

    function results(){
    	$("#mood").hide();
	  	$("#mainQuestionArea").hide();
	  	$("#resultsPage").show();
      //create a variable to store the users coupon preference
      var couponPreference = "";
			//if the user selected answers corresponding to restaurants more than once than set couponPreference and category equal to restaurants
      if (restaurants > 1) {
        couponPreference = "restaurants";
        category = "restaurants";
      }
			//if the user selected answers corresponding to entertainment more than once than set couponPreference equal to entertainment and category equal to activities-events
      if (entertainment > 1) {
        couponPreference = "entertainment";
        category = "activities-events";
      }
			//if the user selected answers corresponding to shopping more than once than set couponPreference equal to shopping and category equal to treats
      if (shopping > 1) {
        couponPreference = "shopping";
        category = "treats";
      }

      $(".broughtBy").html("Click the image to find out more. <br><br>This coupon result was brought to you by Sqoot.com");
      $(".timeTo").html("Time to try something new!");

			//feed the user's selected coupon category and their latitude and longitude into a query url to the sqoot api.
      var queryURL = "http://api.sqoot.com/v2/deals?category_slugs="+category+"&api_key=olseu&location="+latitude+","+longitude;
      console.log(queryURL);
      $.ajax({
        url: queryURL,
        method:'GET',
        dataType: 'jsonp'
      }).done(function(response) {
				//pick a random number contained within the length of response.deals
        var randomNum = Math.floor((Math.random() * response.deals.length) +1);
				//use the random number to pick a random coupon from the response
				var outcome = response.deals[randomNum];
				//Tell the user their selected coupon preference
        $(".resultsLine").html("We see you like "+couponPreference+".<br> Be your thrifty self and try out this deal!");
				//append the title of the coupon
				$(".title").append(outcome.deal.short_title);
				//append the image of the coupon
        $(".apiResult").append("<img src="+outcome.deal.image_url+">");
				//add an id of "couponImage" to the coupon image
        $(".apiResult").attr('id', "couponImage");
				//when the user clicks the coupon image then take them to the coupon site.
        $(".apiResult").on('click',function(){
              window.open(outcome.deal.untracked_url,'_blank');
            });
        });
    }

    $(".a1").on('click',function(){
      restaurants++;
      q++;
      question2();
    });

    $(".a2").on('click', function(){
      entertainment++;
      q++;
      question2();
    });

    $(".a3").on('click',function(){
      shopping++;
      q++;
      question2();
    });
  });



///The onClick series that begins when Amped is clicked
$(".ampedMood").click(function(){
	  $("#mood").hide();
	  $("#mainQuestionArea").show();
    $(".movieABC").hide();
    $(".couponABC").hide();
		//ask the user which is most appealing
		$('.questionAsked').html('<h1>Which is most appealing?</h1>');
		//insert answer choices
    $('.text1').html('Sports, sports, sports');
    $('.text2').html('Show me some standup');
    $('.text3').html('Boom Boom Bass');
		//if the user clicks "sports, sports, sports"
		$('.a1').on('click',function(){
			//turn off the event listeners for answers 1, 2, and 3.
			$('.a1, .a2, .a3').off('click');
				//ask the user which sport and present them with choices of mlb, nfl, or nba.
        $('.questionAsked').html('<h1>Which Sport?</h1>');
				$('.text1').html('MLB');
				$('.text2').html('NFL');
				$('.text3').html('NBA');
				$('.a1').on('click',function() {
					 $('#mainQuestionArea').empty();
					 //ask the user which team
					 $('.questionAsked').html('<h1>Which Team?</h1>');
					 //create a form for the user to fill out.
					 $('#mainQuestionArea').html('<div class = "row"><div class = "col-md-6 col-md-offset-3" style = "text-align: center;"><form><div class ="forum-group"><label for =""><h1>Type a team name</h1><h5>Example: Philadelphia Phillies</h5></label></div><input id = "team" type = "text" style ="color: black; margin-bottom: 10px; width:90%;"><br><button type="submit" class="btn" style = "width:150px; height: 70px; background-color:#00c8f8;"><h3>Submit</h3></button></div></form></div></div>');

					 $('button').on('click',function() {
						 $('#mainQuestionArea').hide();
						 $('#resultsPage').show();
						 //grab the users inputed team and store it in the team variable
						 var team = $('#team').val().trim();

						 //feed the team variable into a query url for the seetgeek api.
						 var queryURL = 'https://api.seatgeek.com/2/performers?q='+team;
						 $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
							 //append the title of the performers
	 						 $('.title').append(response.performers[0].name);
	 						 $('.apiResult').append();
	 						 $(".timeTo").html("Enjoy the game!");
							 // tell the user that their result was brought to them by the seetgeek api and to click the result to find out more
	 						 $(".broughtBy").html("Click your result to find out more.<br>This result was brought to you by SeatGeek.com");
							 //when the user clicks the results take them to the seetgeek page to buy tickets
							 $(".title").on('click',function(){
	 								 window.open(response.performers[0].url,'_blank');
	 					});
	 					});
						 return false;
					 });
				});
				$('.a2').on('click',function() {
					 sport = "nfl";
					 $('#mainQuestionArea').empty();
					 $('.questionAsked').html('<h1>Which Team?</h1>');
					 $('#mainQuestionArea').html('<div class = "row"><div class = "col-md-6 col-md-offset-3" style = "text-align: center;"><form><div class ="forum-group"><label for =""><h1>Type a team name</h1><h5>Example: Cleveland Browns</h5></label></div><input id = "team" type = "text" style ="color: black; margin-bottom: 10px; width: 90%"><br><button type="submit" class="btn" style = "width:150px; height: 70px; background-color:#00c8f8;"><h3>Submit</h3></button></div></form></div></div>');

					 $('button').on('click',function() {
						 $('#mainQuestionArea').hide();
						 $('#resultsPage').show();
						 var team = $('#team').val().trim();
						 var queryURL = 'https://api.seatgeek.com/2/performers?q='+team;
						 $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
                $('.title').append(response.performers[0].name);
                $('.apiResult').append();
                $(".timeTo").html("Enjoy the game!");
                $(".broughtBy").html("Click your result to find out more.<br>This result was brought to you by SeatGeek.com");
                $(".title").attr('id', "couponImage");
                $(".title").on('click',function(){
                    window.open(response.performers[0].url,'_blank');
             });

						 });
						 return false;
					 });
				});
				$('.a3').on('click',function() {
					 sport = "nba";
					 $('#mainQuestionArea').empty();
					 $('.questionAsked').html('<h1>Which Team?</h1>');
					 $('#mainQuestionArea').html('<div class = "row"><div class = "col-md-6 col-md-offset-3" style = "text-align: center;"><form><div class ="forum-group"><label for =""><h1>Type a team name</h1><h5>Example: San Antonio Spurs</h5></label></div><input id = "team" type = "text" style ="color: black; margin-bottom: 10px; width: 90%;"><br><button type="submit" class="btn" style = "width:150px; height: 70px; background-color:#00c8f8;"><h3>Submit</h3></button></div></form></div></div>');
					 $('button').on('click',function() {
						 $('#mainQuestionArea').hide();
						 $('#resultsPage').show();
						 var team = $('#team').val().trim();
						 var queryURL = 'https://api.seatgeek.com/2/performers?q='+team;
						 $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
                $('.title').append(response.performers[0].name);
                $('.apiResult').append();
                $(".timeTo").html("Enjoy the game!");
                $(".broughtBy").html("Click your result to find out more.<br>This result was brought to you by SeatGeek.com");
                $(".title").attr('id', "couponImage");
                $(".title").on('click',function(){
                    window.open(response.performers[0].url,'_blank');
             });
						 });
						 return false;
					 });
				});
		});
		//when the user clicks "show me some stand up"
		$('.a2').on('click',function(){
			$('#mainQuestionArea').hide();
			$('#resultsPage').show();
      $(".timeTo").html("Enjoy the show!");
      $(".broughtBy").html("Click your result to find out more.<br>This result was brought to you by SeatGeek.com");
			//feed the users latitude and longitude into a query url for the seetgeek api that is limited to comedy events.
			var queryURL = 'https://api.seatgeek.com/2/events?q=comedy&lat='+latitude+"&lon="+longitude;
			$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
				//pick a random number
				var randomNum = Math.floor((Math.random() * response.events.length) +1);
				//user the random number to append the title of a random event from the response.
				$('.title').append(response.events[randomNum].title);
				$('.apiResult').append();
				//when the user clicks the event title take them to the seetgeek page to buy tickets.
        $(".title").on('click',function(){
             window.open(response.events[randomNum].url,'_blank');
           });
						});
		});
		// when the user clicks "boom boom bass"
		$('.a3').on('click',function(){
			//ask them which genre and give them the choice of country, hip-hop, or rock.
			$('.questionAsked').html('<h1>Which Genre?</h1>');
			$('.text1').html('Country');
			$('.text2').html('Hip-hop');
			$('.text3').html('Rock');
			//if the user clicks country then hide the question area and show the result div. set musicGenre equal to country call the function ajaxCall
			$('.a1').on('click',function(){
				musicGenre = "country";
				$('#mainQuestionArea').hide();
				$('#resultsPage').show();
				ajaxCall();
			});
			//if the user clicks hip-hop then hide the question area and show the result div. set musicGenre equal to hip-hop. call the function ajaxCall
			$('.a2').on('click',function(){
				musicGenre = "hip-hop";
				$('#mainQuestionArea').hide();
				$('#resultsPage').show();
				ajaxCall();
			});
			//if the user clicks rock then hide the question area and show the result div. set musicGenre equal to rock. call the function ajaxCall
			$('.a3').on('click',function(){
				musicGenre = "rock";
				$('#mainQuestionArea').hide();
				$('#resultsPage').show();
				ajaxCall();
			});

			function ajaxCall(){
				//feed the query url the user's selected music genre and the user's latitude and longitude
				var queryURL = "https://api.seatgeek.com/2/events?q="+musicGenre+"&lat="+latitude+"&lon="+longitude;
				$.ajax({url: queryURL ,method: 'GET'}).done(function(response){
					//pick a random number that is contained within the length of response.events
					var randomNum = Math.floor((Math.random() * response.events.length) +1);
					//use the random number to select a random event and append it's title.
					$('.title').append(response.events[randomNum].title);
					$('.apiResult').append();
          $(".timeTo").html("Enjoy the show!");
          $(".broughtBy").html("Click your result to find out more.<br>This result was brought to you by SeatGeek.com");
					//when the user clicks the title of the event then take them to the seetgeek api to buy tickets
	        $(".title").on('click',function(){
	             window.open(response.events[randomNum].url,'_blank');
	           });
				});
			}

		});
  });


pageLoad();

//When the user is finished, they can click the Get me a new plan button, which reloads the page and brings them directly to the mood selector and bypasses the initial Plan my Weekend button.
$(".startOver").on('click',function(){
    resetPage();
	  $("#mood").show();
	  $("#mainQuestionArea").hide();
	  $("#resultsPage").hide();
      });
