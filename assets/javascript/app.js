$(document).ready(function(){

  $('.a1').on('click',function(){
    var action = 0;
    var drama = 0;
    var comedy = 0;
    var q = 1;
    $("#answers, #instructions, #question").empty();
    $('#answers').html('<div class = "col-md-2 col-md-offset-2 a1"></div><div class = "col-md-2 col-md-offset-1 a2"></div><div class = "col-md-2 col-md-offset-1 a3"></div>');
    $(".a1,.a2,.a3").attr('id', 'netflixAnswers');
    $(".footer").attr('id', 'netflixFooter');
    $("#instructions").html("<h3>Question "+q+" of 4</h3>");
    $("#question").html("<h1>Whats the best way to say bye to a comrade?</h1>");
    $(".a1").html("<h2>Hasta La Vista</h2>");
    $(".a2").html("<h2>Get busy living or get busy dying</h2>");
    $(".a3").html("<h2>Take care now, bye bye then</h2>");

    function question2() {
      $(".a1,.a2,.a3, #instructions, #question").empty();
      $("#instructions").html("<h3>Question "+q+" of 4</h3>");
      $("#question").html("<h1>Zombie apocalypse! Which item would you choose to defend yourself?</h1>");
      $(".a1").html("<h2>Machine gun</h2>");
      $(".a2").html("<h2>An Axe</h2>");
      $(".a3").html("<h2>A Vinyl Record</h2>");
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
      $(".a1,.a2,.a3, #instructions, #question").empty();
      $("#instructions").html("<h3>Question "+q+" of 4</h3>");
      $("#question").html("<h1>What’s your choice of transportation?</h1>");
      $(".a1").html("<h2>Batmobile</h2>");
      $(".a2").html("<h2>Horse Drawn Carriage</h2>");
      $(".a3").html("<h2>Inner tube</h2>");
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
      $(".a1,.a2,.a3, #instructions, #question").empty();
      $("#instructions").html("<h3>Question "+q+" of 4</h3>");
      $("#question").html("<h1>Where do you want to eat at?</h1>");
      $(".a1").html("<h2>Pizza Planet</h2>");
      $(".a2").html("<h2>Big Kahuna Burger</h2>");
      $(".a3").html("<h2>Bluth’s Banana Stand</h2>");
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
      console.log("User reached the results");
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

      var queryURL = "https://api.themoviedb.org/3/movie/550?api_key=02109c05d4fdc8f5b547ae1daa004712/discover/movie/with_genre=action";
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

  $(".a3").on('click',function(){
    $('.footer').attr('id', 'seatGeekFooter');
    $('#answers, #question, #instructions').empty();
    $('#question').html('<h1>What is most appealing?</h1>');
    $('#answers').html('<div class = "col-md-2 col-md-offset-2 a1" id = "seatGeekAnswers"><h1>Sports, sports, sports</h1></div><div class = "col-md-2 col-md-offset-1 a2" id = "seatGeekAnswers"><h1>Show me some standup</h1></div><div class = "col-md-2 col-md-offset-1 a3" id = "seatGeekAnswers"><h1>Boom Boom Bass</h1></div>');

    $('.a1').on('click',function(){
      var sport = "";
      $('#answers, #question, #instructions').empty();
      $('#answers').html('<div class = "col-md-2 col-md-offset-2 a1" id = "seatGeekAnswers"></div><div class = "col-md-2 col-md-offset-1 a2" id ="seatGeekAnswers"></div><div class = "col-md-2 col-md-offset-1 a3" id = "seatGeekAnswers"></div>');
      $('#question').html('<h1>Which Sport?</h1>');
      $('.a1').html('<h1>MLB</h1>');
      $('.a2').html('<h1>NFL</h1>');
      $('.a3').html('<h1>NBA</h1>');
      $('.a1').on('click',function(){
        sport = "mlb";
        $('#answers, #question, #instructions').empty();
        $('#instructions').html('<h1>Which Team?</h1>');
        $('#answers').html('<div class = "col-md-6 col-md-offset-3 a1"><form><div class ="forum-group"><label for ="">Type a team name</label></div><input id = "team" type = "text" style ="color: black; margin-bottom: 10px;"><br><button type="submit" class="btn btn-primary">Submit</button></div></form></div>');

        $('button').on('click',function() {
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
        console.log('a2 click');
        $('#answers, #question, #instructions').empty();
        queryURL =
        'https://api.seatgeek.com/2/performers?taxonomies.name=comedy';
        $.ajax({url: queryURL, method: 'GET'}).done(function(response){
          console.log(response);
      });
    });
    $('.a3').on('click',function(){
      $('#answers, #question, #instructions').empty();
    });
});
///start here//
  $('.a2').on('click',function(){
    var restaurant = 0;
    var entertainment = 0;
    var shopping = 0;
    var q = 1;
    $("#answers, #instructions, #question").empty();
    $('#answers').html('<div class = "col-md-2 col-md-offset-2 a1"></div><div class = "col-md-2 col-md-offset-1 a2"></div><div class = "col-md-2 col-md-offset-1 a3"></div>');
    $(".a1,.a2,.a3").attr('id', 'couponAnswers');
    $(".footer").attr('id', 'couponFooter');
    $("#instructions").html("<h3>Question "+q+" of 4</h3>");
    $("#question").html("<h1>What sounds most appealing?</h1>");
    $(".a1").html("<h2>A fine dining experience</h2>");
    $(".a2").html("<h2>Theatre or painting</h2>");
    $(".a3").html("<h2>Shopping spree</h2>");

    function question2() {
      $(".a1,.a2,.a3, #instructions, #question").empty();
      $("#instructions").html("<h3>Question "+q+" of 4</h3>");
      $("#question").html("<h1>You are granted a lifetime supply of one of the items below. Which would it be?</h1>");
      $(".a1").html("<h2>Steak dinners</h2>");
      $(".a2").html("<h2>Art lessons</h2>");
      $(".a3").html("<h2>Video games</h2>");
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
      $(".a1,.a2,.a3, #instructions, #question").empty();
      $("#instructions").html("<h3>Question "+q+" of 4</h3>");
      $("#question").html("<h1>What best suits your personality?</h1>");
      $(".a1").html("<h2>Being catered to</h2>");
      $(".a2").html("<h2>Finding great bargains</h2>");
      $(".a3").html("<h2>Creating something from scratch</h2>");
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
      $(".a1,.a2,.a3, #instructions, #question").empty();
      $("#instructions").html("<h3>Question "+q+" of 4</h3>");
      $("#question").html("<h1>If you could sum up your daily thoughts in one word, what would it be?</h1>");
      $(".a1").html("<h2>Hungry</h2>");
      $(".a2").html("<h2>Indulgent</h2>");
      $(".a3").html("<h2>Imaginative</h2>");
      $(".a1").on('click',function(){
        console.log(restaurant);
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
      console.log("User reached the results");
      var couponPreference = "";
      if (restaurant > 1) {
        couponPreference = "categoryid=1";
      }
      if (entertainment > 1) {
        couponPreference = "categoryid=2";
      }
      if (shopping > 1) {
        couponPreference = "categoryid=6";
      }

      var queryURL = "http://api.8coupons.com/v1/getrealtimelocaldeals?key=XYZ&"+couponPreference;
      $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
        console.log(response);
         var results = response.data;
     });
    }

    $(".a1").on('click',function(){
      restaurant++;
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
});
