$(document).ready(function(){
  $('.a1').on('click',function(){
    var action = 0;
    var drama = 0;
    var comedy = 0;
    var q = 1;
    $(".a1,.a2,.a3, #instructions, #question").empty();
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
});
