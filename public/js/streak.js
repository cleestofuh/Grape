var friendNumber = 0;

$("#friend1").click(showStreak);
$("#friend2").click(showStreak);
$("#friend3").click(showStreak);
$("#friend4").click(showStreak);

function showStreak(e) {
  e.preventDefault();
  var theID = $(this).attr('id');
  var friendID = "#" + theID;
  $(friendID).find(".fr").toggle();
  console.log(theID);
  //texterino = pickChallenge();
  //appendChallenge(texterino);
}
