var quotes = [
    "Drink to me. -Pablo Picasso",
    "What the devil do you mean to sing to me, priest? You are out of tune. -Jean-Philippe Rameau (Objecting to a song being sung at his bedside)",
    "I am losing it. -Frank Sinatra",
    "I am about to -- or I am going to -- die; either expression is used. -Dominique Bouhours (French Grammarian)",
    "And now, I am dying beyond my means. -Oscar Wilde (Sipping champagne on his deathbed)",
    "Show my head to the people, it is worth seeing. -Georges Danton (To his executioner)",
    "What is the answer? ... In that case, what is the question? -Getrude Stein",
    "And now I am officially dead. -American politician (removing the oxygen-tube from his mouth)",
    "Don't worry! It's not loaded. -Terry Kath (Rock musician, playing russian roulette)",
    "Waiting are they? Well let'em wait! -General Mad Anthony Wayne (When told by his doctors the angels were waiting for him)",
    "I know you are here to kill me. Shoot, coward, you are only going to kill a man. -Che Guevara (Facing his assassin)",
    ];
    
    var i = 0;
    
    setInterval(function(){
        console.log("hello");
        // $("#textslide").innerHTML=quotes[i];
        document.getElementById("textslide").innerHTML=quotes[i];
          if (i == quotes.length - 1) {
              i = 0;
          }
          else {
              i++;
          }
    }, 5000);