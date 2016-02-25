$("#anotherone").click(newChallenge);

function appendChallenge(challenge) {
  $('#challenges').append("<h1 class='animated slideInRight'id='challengetext'>" + challenge + "</h1>");
}

function newChallenge(e) {
  e.preventDefault();
  $("#challengetext").remove();;
  texterino = pickChallenge();
  appendChallenge(texterino);
}

function pickChallenge() {
  var newText = Math.floor((Math.random() * 12));
  var challenger;

  switch(newText) {
      case 0:
          challenger = "GIVE SOMEONE A COMPLIMENT";
          break;
      case 1:
          challenger = "PAY FOR FRIEND'S LUNCH";
          break;
      case 2:
          challenger = "DONATE TO CHARITY";
          break;
      case 3:
          challenger = "HOLD THE DOOR FOR SOMEONE";
          break;
      case 4:
          challenger = "PAY FOR PARKING FOR SOMEONE";
          break;
      case 5:
          challenger = "DONATE BLOOD";
          break;
      case 6:
          challenger = "SHARE YOUR LUNCH";
          break;
      case 7:
          challenger = "WALK FRIEND TO CLASS";
          break;
      case 8:
          challenger = "SAY HI TO SOMEONE NEW";
          break;
      case 9:
          challenger = "SIT WITH SOMEONE SITTING ALONE";
          break;
      case 10:
          challenger = "BAKE NEIGHBOR COOKIES";
          break;
      case 11:
          challenger = "GIVE SOMEONE A HUG";
          break;
      default:
          challenger = "GIVE SOMEONE A COMPLIMENT";
          break;
  }
  return challenger;
}
