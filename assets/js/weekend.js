var longitude = "";
var latitude = "";
if (navigator.geolocation) {
  console.log('Geolocation is supported!');

}
else {
  console.log('Geolocation is not supported for this Browser/OS version yet.');
}

window.onload = function() {
 var startPos;
 var geoSuccess = function(position) {
   startPos = position;
    latitude = startPos.coords.latitude;
    longitude = startPos.coords.longitude;
         console.log(latitude);
         console.log(longitude);
 };
 navigator.geolocation.getCurrentPosition(geoSuccess);
};

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
	  var action = 0;
    var drama = 0;
    var comedy = 0;
    var q = 1;
    $(".questionAsked").html("What's the best way to<br> say bye to a comrade?");
    $(".questionNumber").html("Question "+q+" of 4");
    $(".text1").html("Hasta La Vista");
    $(".text2").html("Get busy living <br>or get busy dying");
    $(".text3").html("Take care now,<br> bye bye then");

    function question2() {
      $(".questionAsked").html("Zombie apocalypse! <br>Which item would you <br>choose to defend yourself?");
      $(".questionNumber").html("Question "+q+" of 4");
      $(".text1").html("Machine gun");
    	$(".text2").html("An Axe");
    	$(".text3").html("A Vinyl Record");
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
      $(".questionAsked").html("What’s your choice<br> of transportation?");
      $(".questionNumber").html("Question "+q+" of 4");
      $(".text1").html("Batmobile");
    	$(".text2").html("Horse Drawn Carriage");
    	$(".text3").html("Inner Tube");
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
      $(".questionAsked").html("Where do you want to eat at?");
      $(".questionNumber").html("Question "+q+" of 4");
      $(".text1").html("Pizza Planet");
    	$(".text2").html("Big Kahuna Burger");
    	$(".text3").html("Bluth’s Banana Stand");
      $(".a1").on('click',function(){
        console.log(action);
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
      console.log("User reached the results");
      console.log(action);
      console.log(drama);
      console.log(comedy);
      var genre = "";
      if (action > 1) {
        genre = "action";
        category = 28;
      }
      if (drama > 1) {
        genre = "drama";
        category = 18;
      }
      if (comedy > 1) {
        genre = "comedy";
        category = 35;
      }

      $(".broughtBy").html("This "+genre+" movie result was<br> brought to you by themoviedb.org");
      $(".timeTo").html("Time for Netflix & chill");

    	var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=02109c05d4fdc8f5b547ae1daa004712&with_genres="+category+"&sort_by=popularity.desc&include_adult=true";
      $.ajax({url: queryURL, method: 'GET'})
     	.done(function(response) {
      console.log(response);
      var randomNum = Math.floor((Math.random() * response.results.length) +1);
      console.log(response.results[randomNum]);
      var outcome = response.results[randomNum];
      $(".apiResult").append("<img src=https://image.tmdb.org/t/p/w185/"+outcome.poster_path+">");
      $(".resultsLine").html("We see you like "+genre+" movies. Kick back and relax.<br> We suggest you watch:");
      $(".title").append(outcome.original_title);
     });
    }

    $(".a1").on('click',function(){
      action++;
      q++;
      question2();
    });

    $(".a2").on('click', function(){
      drama++;
      q++;
      question2();
    });

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
      console.log("User reached the results");
      console.log(restaurants);
      console.log(entertainment);
      console.log(shopping);

      var couponPreference = "";
      if (restaurants > 1) {
        couponPreference = "restaurants";
        category = "restaurants";
      }
      if (entertainment > 1) {
        couponPreference = "entertainment";
        category = "activities-events";
      }
      if (shopping > 1) {
        couponPreference = "shopping";
        category = "treats";
      }

      $(".broughtBy").html("Click the image to find out more. <br><br>This coupon result was brought to you by Sqoot.com");
      $(".timeTo").html("Time to try something new!");


      var queryURL = "http://api.sqoot.com/v2/deals?category_slugs="+category+"&api_key=olseu&location="+latitude+","+longitude;
      console.log(queryURL);
      $.ajax({
        url: queryURL,
        method:'GET',
        dataType: 'jsonp'
      }).done(function(response) {
        console.log(response);
        console.log("loggedresponse");
        var randomNum = Math.floor((Math.random() * response.deals.length) +1);
        console.log(response.deals[randomNum]);
        var outcome = response.deals[randomNum];
        console.log(outcome);
        $(".resultsLine").html("We see you like "+couponPreference+".<br> Be your thrifty self and try out this deal!");
        $(".title").append(outcome.deal.short_title);
        $(".apiResult").append("<img src="+outcome.deal.image_url+">");
        $(".apiResult").attr('id', "couponImage");
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
		$('.questionAsked').html('<h1>Which is most appealing?</h1>');
    $('.text1').html('Sports, sports, sports');
    $('.text2').html('Show me some standup');
    $('.text3').html('Boom Boom Bass');
		$('.a1').on('click',function(){
			$('.a1, .a2, .a3').off('click');
			console.log("this click works");
        $('.questionAsked').html('<h1>Which Sport?</h1>');
				$('.text1').html('MLB');
				$('.text2').html('NFL');
				$('.text3').html('NBA');
				$('.a1').on('click',function() {
					 sport = "mlb";
					 $('#mainQuestionArea').empty();
					 $('.questionAsked').html('<h1>Which Team?</h1>');
					 $('#mainQuestionArea').html('<div class = "row"><div class = "col-md-6 col-md-offset-3" style = "text-align: center;"><form><div class ="forum-group"><label for =""><h1>Type a team name</h1><h5>Example: Philadelphia Phillies</h5></label></div><input id = "team" type = "text" style ="color: black; margin-bottom: 10px; width:90%;"><br><button type="submit" class="btn" style = "width:150px; height: 70px; background-color:#00c8f8;"><h3>Submit</h3></button></div></form></div></div>');

					 $('button').on('click',function() {
						 $('#mainQuestionArea').hide();
						 $('#resultsPage').show();
						 var team = $('#team').val().trim();
						 // $('#answers, #question, #instructions').empty();
						 //need to change ajax call
						 var queryURL = 'https://api.seatgeek.com/2/performers?q='+team;
						 $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
							 console.log(response);
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
							 console.log(response);
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
							 console.log(response);
						 });
						 return false;
					 });
				});
		});

		$('.a2').on('click',function(){
			$('#mainQuestionArea').hide();
			$('#resultsPage').show();
			var queryURL = 'https://api.seatgeek.com/2/events?q=comedy&lat='+latitude+"&lon="+longitude;
			$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
				console.log(response);
				var randomNum = Math.floor((Math.random() * response.events.length) +1);
				$('.title').append(response.events[randomNum].title);
				$('.apiResult').append();
				$(".title").attr('id', "couponImage");
        $(".title").on('click',function(){
             window.open(response.events[randomNum].url,'_blank');
           });
						});
		});

		$('.a3').on('click',function(){
			$('.questionAsked').html('<h1>Which Genre?</h1>');
			$('.text1').html('Country');
			$('.text2').html('Hip-hop');
			$('.text3').html('Rock');
			$('.a1').on('click',function(){
				musicGenre = "country";
				$('#mainQuestionArea').hide();
				$('#resultsPage').show();
				ajaxCall();
			});
			$('.a2').on('click',function(){
				musicGenre = "hip-hop";
				$('#mainQuestionArea').hide();
				$('#resultsPage').show();
				ajaxCall();
			});
			$('.a3').on('click',function(){
				musicGenre = "rock";
				$('#mainQuestionArea').hide();
				$('#resultsPage').show();
				ajaxCall();
			});
			function ajaxCall(){
				var queryURL = "https://api.seatgeek.com/2/events?q="+musicGenre+"&lat="+latitude+"&lon="+longitude;
				$.ajax({url: queryURL ,method: 'GET'}).done(function(response){
					console.log(response);
					var randomNum = Math.floor((Math.random() * response.events.length) +1);
					$('.title').append(response.events[randomNum].title);
					$('.apiResult').append();
					$(".title").attr('id', "couponImage");
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
