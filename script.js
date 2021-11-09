/*Add your JavaScript here*/
var tvshowScore=0;//store the tv show score

var movieScore=0;//store the movie score 

var questionCount=0;//store the number of answers clicked on

//store html elements using DOM
var result= document.getElementById("result");

var restart= document.getElementById("restart");

var q1a1= document.getElementById("q1a1");
var q1a2= document.getElementById("q1a2");
var q1a3= document.getElementById("q1a3");
var q1a4= document.getElementById("q1a4");

var q2a1= document.getElementById("q2a1");
var q2a2= document.getElementById("q2a2");
var q2a3= document.getElementById("q2a3");
var q2a4= document.getElementById("q2a4");

var q3a1= document.getElementById("q3a1");
var q3a2= document.getElementById("q3a2");
var q3a3= document.getElementById("q3a3");
var q3a4= document.getElementById("q3a4");

var q4a1= document.getElementById("q4a1");
var q4a2= document.getElementById("q4a2");
var q4a3= document.getElementById("q4a3");
var q4a4= document.getElementById("q4a4");

var q5a1= document.getElementById("q5a1");
var q5a2= document.getElementById("q5a2");
var q5a3= document.getElementById("q5a3");
var q5a4= document.getElementById("q5a4");

//determine which response goes with which outcome
q1a1.addEventListener("click",movie);
q1a2.addEventListener("click",tvshow);
q1a3.addEventListener("click",movie);
q1a4.addEventListener("click",tvshow);

q2a1.addEventListener("click",movie);
q2a2.addEventListener("click",movie);
q2a3.addEventListener("click",tvshow);
q2a4.addEventListener("click",tvshow);

q3a1.addEventListener("click",tvshow);
q3a2.addEventListener("click",movie);
q3a3.addEventListener("click",movie);
q3a4.addEventListener("click",tvshow);

q4a1.addEventListener("click",tvshow);
q4a2.addEventListener("click",movie);
q4a3.addEventListener("click",tvshow);
q4a4.addEventListener("click",movie);

q5a1.addEventListener("click",movie);
q5a2.addEventListener("click",tvshow);
q5a3.addEventListener("click",tvshow);
q5a4.addEventListener("click",movie);

//quiz restart
restart.addEventListener("click", function(){
  tvshowScore = 0;
  movieScore= 0;
  questionCount = 0;

  console.log("questionCount = " + questionCount + " tvshowScore = " + tvshowScore + " movieScore = " + movieScore);

  result.innerHTML= "Congrats! You are a ...";
})

//score tracker
function tvshow() {
  tvshowScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " tvshowScore = " + tvshowScore);

  if (questionCount == 5){
    updateResult();
  }
}

function movie() {
  movieScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " movieScore = " + movieScore);

  if (questionCount == 5){
    console.log("The Quiz is Done!");
    updateResult();
  }
}

//quiz result
function updateResult(){
  if(tvshowScore >= 3){
  result.innerHTML= "Congrats! You are a T.V. show person.";
  console.log("Congrats! You are a T.V. show person.");
}
else if(movieScore >= 3){
  result.innerHTML= "Congrats! You are a movie person.";
  console.log("Congrats! You are a movie person.");
}
}



