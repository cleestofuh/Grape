var datajson = require('../public/data.json');
var kindersjson = require('../public/kinders.json');
var i = 5;
var j = 5;

exports.giveData = function(req, res){

  var type;
  if(req.query.radiochoice == 'yourself') {
    type = "yours";
  }
  if(req.query.radiochoice == 'others') {
    type = "others";
  }
  var newKinderOther = {
        "type": type,
        "datamodal": "okModal" + j,
        "btn-id": j,
        "act": req.query.whatyoudoO,
        "description": req.query.howyoufeelO,
        "rating": req.query.ratingO,
        "category": req.query.category
    };


  if(req.query.yourradio == 'on') {
    kindersjson["yourkinders"].unshift(newKinderOther);
    i++;
  }

  if(req.query.otherradio == 'on') {
    kindersjson["otherkinders"].unshift(newKinderOther);
    j++;
  }

	res.render('data', {yourkinderact:kindersjson["yourkinders"], otherkinderact:kindersjson["otherkinders"]});
};

exports.projectInfo = function (req, res) {
  var projectID = req.params.datamodal;
  var index = projectID.substr('ykModal'.length);
  //console.log(projectID);
  //console.log("hello");

  var project = datajson[index];
  //console.log(datajson[1]);
  res.json(project);
}
