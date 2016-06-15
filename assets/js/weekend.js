
function pageLoad(){
	$("#mainQuestionArea").hide();
	}

///The onClick series that begins when lazy is clicked//
	$(".lazyMood").click(function(){
	  $("#mood").hide();
	  $("#mainQuestionArea").show();
	  var action = 0;
    var drama = 0;
    var comedy = 0;
    var q = 1;
    // $(".a1,.a2,.a3").attr('id', 'netflixAnswers');
    $(".questionAsked").html("What's the best way to<br> say bye to a comrade?");
    $(".questionNumber").html("Question "+q+" of 4");
    $(".text1").html("Hasta La Vista");
    $(".text2").html("Get busy living <br>or get busy dying");
    $(".text3").html("Take care now,<br> bye bye then");

    function question2() {
      // $(".a1,.a2,.a3, #instructions, #question").empty();
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
      // $(".a1,.a2,.a3, #instructions, #question").empty();
      $(".questionAsked").html("What’s your choice of transportation?");
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
      // $(".a1,.a2,.a3, #instructions, #question").empty();
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
      }
      if (drama > 1) {
        genre = "drama";
      }
      if (comedy > 1) {
        genre = "comedy";
      }
      $(".resultsLine").html("We see you like "+genre+" movies.<br> Time for some Netflix and Chill.");
      $(".broughtBy").html("This movie result was brought to you by Netflix Roulette");

    	var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=02109c05d4fdc8f5b547ae1daa004712&with_genres="+18+"&sort_by=popularity.desc&include_adult=true";
      $.ajax({url: queryURL, method: 'GET'})
     	.done(function(response) {
      console.log(response);
      var results = response.data;
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
      // $(".a1,.a2,.a3, #instructions, #question").empty();
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
      // $(".a1,.a2,.a3, #instructions, #question").empty();
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
      // $(".a1,.a2,.a3, #instructions, #question").empty();
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
      }
      if (entertainment > 1) {
        couponPreference = "entertainment";
      }
      if (shopping > 1) {
        couponPreference = "shopping";
      }
      $(".resultsLine").html("We see you like "+couponPreference+".<br> Here are some coupon suggestions to try something new!");
      $(".broughtBy").html("This movie result was brought to you by XXXXX");

     //  var queryURL = "https://api.themoviedb.org/3/movie/550?api_key=02109c05d4fdc8f5b547ae1daa004712/discover/movie/with_genre=action";
     //  $.ajax({url: queryURL, method: 'GET'})
     // .done(function(response) {
     //    console.log(response);
     //     var results = response.data;
     // });
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
		$('.questionAsked').html('<h1>Which is most appealing?</h1>');
    $('.text1').html('Sports, sports, sports');
    $('.text2').html('Show me some standup');
    $('.text3').html('Boom Boom Bass');
		$('.a1').on('click',function(){
			console.log("this click works");
        $('.questionAsked').html('<h1>Which Sport?</h1>');
				$('.text1').html('MLB');
				$('.text2').html('NFL');
				$('.text3').html('NBA');
				$('.a1').on('click',function() {
					 sport = "mlb";
					 $('#mainQuestionArea').empty();
					 $('.questionAsked').html('<h1>Which Team?</h1>');
					 $('#mainQuestionArea').html('<div class = "row"><div class = "col-md-6 col-md-offset-3 a1" style = "text-align: center;"><form><div class ="forum-group"><label for ="">Type a team name</label></div><input id = "team" type = "text" style ="color: black; margin-bottom: 10px;"><br><button type="submit" class="btn btn-primary">Submit</button></div></form></div></div>');

					 $('button').on('click',function() {
						 $('#mainQuestionArea').hide();
						 $('#resultsPage').show();
						 var team = $('#team').val().trim();
						 $('#answers, #question, #instructions').empty();
						 //need to change ajax call
						 var queryURL = 'https://api.seatgeek.com/2/events?venue.state=TX';
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
					 $('#mainQuestionArea').html('<div class = "row"><div class = "col-md-6 col-md-offset-3 a1" style = "text-align: center;"><form><div class ="forum-group"><label for ="">Type a team name</label></div><input id = "team" type = "text" style ="color: black; margin-bottom: 10px;"><br><button type="submit" class="btn btn-primary">Submit</button></div></form></div></div>');

					 $('button').on('click',function() {
						 $('#mainQuestionArea').hide();
						 $('#resultsPage').show();
						 var team = $('#team').val().trim();
						 $('#answers, #question, #instructions').empty();
						 var queryURL = 'https://api.seatgeek.com/2/events?venue.state=TX';
						 $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
							 console.log(response);
						 });
						 return false;
					 });
				});
				$('.a3').on('click',function() {
					 sport = "nfl";
					 $('#mainQuestionArea').empty();
					 $('.questionAsked').html('<h1>Which Team?</h1>');
					 $('#mainQuestionArea').html('<div class = "row"><div class = "col-md-6 col-md-offset-3 a1" style = "text-align: center;"><form><div class ="forum-group"><label for ="">Type a team name</label></div><input id = "team" type = "text" style ="color: black; margin-bottom: 10px;"><br><button type="submit" class="btn btn-primary">Submit</button></div></form></div></div>');

					 $('button').on('click',function() {
						 $('#mainQuestionArea').hide();
						 $('#resultsPage').show();
						 var team = $('#team').val().trim();
						 $('#answers, #question, #instructions').empty();
						 var queryURL = 'https://api.seatgeek.com/2/events?venue.state=TX';
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
		});

		$('.a3').on('click',function(){
			$('.questionAsked').html('<h1>Which Genre?</h1>');
			$('.text1').html('Country');
			$('.text2').html('Hip-hop');
			$('.text3').html('Rock');
			$('.a1').on('click',function(){
				genre = "country";
				$('#mainQuestionArea').hide();
				$('#resultsPage').show();
				//add ajax call here
			});
			$('.a2').on('click',function(){
				genre = "hip-hop";
				$('#mainQuestionArea').hide();
				$('#resultsPage').show();
				//add ajax call here
			});
			$('.a3').on('click',function(){
				genre = "rock";
				$('#mainQuestionArea').hide();
				$('#resultsPage').show();
				//add ajax call here
			});
		});



	  // var restaurants = 0;
    // var entertainment = 0;
    // var shopping = 0;
    // // $(".a1,.a2,.a3").attr('id', 'netflixAnswers');
    // $(".questionAsked").html("What sounds most appealing?");
    // // $(".questionNumber").html("Question "+q+" of 4");
    // $(".text1").html("Sports, Sports, Sports");
    // $(".text2").html("Show Me Some Standup");
    // $(".text3").html("Dat Boom Boom Bass");
		//
    // function sportsInput() {
    //   // $(".a1,.a2,.a3, #instructions, #question").empty();
    //   $(".questionAsked").html("Which league are you most interested in?");
    //   $(".text1").html("NFL");
    // 	$(".text2").html("MLB");
    // 	$(".text3").html("NBA");
    //   // $(".a1").on('click',function(){
    //   //   question3();
    //   // });
    //   // $(".a2").on('click',function(){
    //   //   question3();
    //   // });
    //   // $(".a3").on('click',function(){
    //   //   question3();
    //   // });
    // }
		//
    // function musicInput(){
    //   // $(".a1,.a2,.a3, #instructions, #question").empty();
    //   $(".questionAsked").html("What genre instrests you the most?");
    //   $(".text1").html("Country");
    // 	$(".text2").html("Pop");
    // 	$(".text3").html("Rock");
    //   $(".a1").on('click',function(){
    //     question4();
    //   });
    //   $(".a2").on('click',function(){
    //     question4();
    //   });
    //   $(".a3").on('click',function(){
    //     question4();
    //   });
    // }
		//
    // function results(){
    // 	$("#mood").hide();
	  // 	$("#mainQuestionArea").hide();
	  // 	$("#resultsPage").show();
    //   console.log("User reached the results");
    //   console.log(restaurants);
    //   console.log(entertainment);
    //   console.log(shopping);
		//
    //   var couponPreference = "";
    //   if (restaurants > 1) {
    //     couponPreference = "restaurants";
    //   }
    //   if (entertainment > 1) {
    //     couponPreference = "entertainment";
    //   }
    //   if (shopping > 1) {
    //     couponPreference = "shopping";
    //   }
    //   $(".resultsLine").html("We see you like "+couponPreference+".<br> Here are some coupon suggestions to try something new!");
    //   $(".broughtBy").html("This movie result was brought to you by XXXXX");
		//
    //  //  var queryURL = "https://api.themoviedb.org/3/movie/550?api_key=02109c05d4fdc8f5b547ae1daa004712/discover/movie/with_genre=action";
    //  //  $.ajax({url: queryURL, method: 'GET'})
    //  // .done(function(response) {
    //  //    console.log(response);
    //  //     var results = response.data;
    //  // });
    // }
		//
    // $(".a1").on('click',function(){
    //   sportsInput();
    // });
		//
    // $(".a2").on('click', function(){
    //  	$("#mood").hide();
	  // 	$("#mainQuestionArea").hide();
	  // 	$("#resultsPage").show();
	  // 	$(".resultsLine").html("We see you like some stand up!<br> Here are people coming to your area!");
    //   $(".broughtBy").html("This movie result was brought to you by XXXXX");
    // });
		//
    // $(".a3").on('click',function(){
		// 		musicInput();
    // });
  });


pageLoad();


$(".startOver").on('click',function(){
	  $("#mood").show();
	  $("#mainQuestionArea").hide();
	  $("#resultsPage").hide();
      });
