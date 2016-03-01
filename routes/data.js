//var datajson = require('../public/data.json');
var kindersjson = require('../public/kinders.json')
var i = 5;
var j = 5;
exports.giveData = function(req, res){

/*  var newKinderYou = {
        "datamodal": "ykModal" + i,
        "btn-id": i,
        "act": req.query.whatyoudo,
        "description": req.query.howyoufeel,
        "rating": req.query.rating
    };*/
  var type;
  if(req.query.yourradio == 'on') {
    type = "yours";
  }
  if(req.query.otherradio == 'on') {
    type = "others";
  }
  var newKinderOther = {
        "type": type,
        "datamodal": "okModal" + j,
        "btn-id": j,
        "act": req.query.whatyoudoO,
        "description": req.query.howyoufeelO,
        "rating": req.query.ratingO
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

  kindersjson.yourkinders = kindersjson.yourkinders.map(function (obj) {
      if (obj.datamodal == req.body.id) {
        obj.description = req.body.description;
        obj.rating = req.body.rating;
        obj.act = req.body.title;
      }
      return obj;
  });

  console.log(kindersjson.yourkinders);
  // var projectID = req.params.datamodal;
  // var index = projectID.substr('ykModal'.length);
  // console.log("projectID: " + projectID);
  // console.log("index: " + index);

  // var project = kindersjson["yourkinders"][index];
  // console.log("data.js project: " + kindersjson["yourkinders"][index]["act"]);
  // res.json(project);
};

exports.deleteKinder = function(req, res) {
  var result = [];
  kindersjson.yourkinders.map(function (obj) {
      if (obj.datamodal == req.body.id) {
        return;
      }
      result.push(obj);
  });

  kindersjson.yourkinders = result;
  console.log(kindersjson.yourkidners);
};

