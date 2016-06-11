$(document).ready(function(){
  $('#a1').on('click',function(){
    var action = 0;
    var drama = 0;
    var comedy = 0;
    var q = 1;
    $("#a1,#a2,#a3, #instructions, #question").empty();
    $("#instructions").html("<h3>Question "+q+" of 4</h3>");
    $("#question").html("<h1>Whats the best way to say bye to a comrade?</h1>");
    $("#a1").html("<h1>Hasta La Vista</h1>");
    $("#a2").html("<h1>Get busy living or get busy dying</h1>");
    $("#a3").html("<h1>Take care now, bye bye then</h1>");

    function question2() {
      $("#a1,#a2,#a3, #instructions, #question").empty();
      $("#instructions").html("<h3>Question "+q+" of 4</h3>");
      $("#question").html("<h1>Zombie apocalypse! Which item would you choose to defend yourself?</h1>");
      $("#a1").html("<h1>Machine gun</h1>");
      $("#a2").html("<h1>An Axe</h1>");
      $("#a3").html("<h1>A Vinyl Record</h1>");

      $("#a1").on('click',function(){
        question3();
      });
      $("#a2").on('click',function(){
        question3();
      });
      $("#a3").on('click',function(){
        question3();
      });
    }

    function question3(){
      $("#a1,#a2,#a3, #instructions, #question").empty();
      $("#instructions").html("<h3>Question "+q+" of 4</h3>");
      $("#question").html("<h1>What’s your choice of transportation?</h1>");
      $("#a1").html("<h1>Batmobile</h1>");
      $("#a2").html("<h1>Horse Drawn Carriage</h1>");
      $("#a3").html("<h1>Inner tube</h1>");
      $("#a1").on('click',function(){
        question4();
      });
      $("#a2").on('click',function(){
        question4();
      });
      $("#a3").on('click',function(){
        question4();
      });
    }

    function question4() {
      $("#a1,#a2,#a3, #instructions, #question").empty();
      $("#instructions").html("<h3>Question "+q+" of 4</h3>");
      $("#question").html("<h1>Where do you want to eat at?</h1>");
      $("#a1").html("<h1>Pizza Planet</h1>");
      $("#a2").html("<h1>Big Kahuna Burger</h1>");
      $("#a3").html("<h1>Bluth’s Banana Stand</h1>");
      $("#a1").on('click',function(){
        console.log(action);
        results();
      });
      $("#a2").on('click',function(){
        results();
      });
      $("#a3").on('click',function(){
        results();
      });
    }

    function results(){
      console.log("User reached the results");
    }

    $("#a1").on('click',function(){
      action++;
      q++;
      question2();
    });

    $("#a2").on('click', function(){
      drama++;
      q++;
      question2();
    });

    $("#a3").on('click',function(){
      comedy++;
      q++;
      question2();
    });

  });
});
