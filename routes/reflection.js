var kindersjson = require('../public/kinders.json');

exports.view = function(req, res){
	res.render('reflection', {yourkinderact:kindersjson["yourkinders"], otherkinderact:kindersjson["otherkinders"]});
};
