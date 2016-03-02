var kindersjson = require('../public/kinders.json');

exports.view2 = function(req, res){
	res.render('reflection2', {yourkinderact:kindersjson["yourkinders"], otherkinderact:kindersjson["otherkinders"]});
};
