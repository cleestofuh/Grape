var kindersjson = require('../public/kinders.json');

exports.view = function(req, res){
	var random_num = Math.random();
	console.log(random_num);
		if (random_num > 0.25) {
			flag = true;
			res.render('reflection', {yourkinderact:kindersjson["yourkinders"], otherkinderact:kindersjson["otherkinders"]});
		} else {
			flag = false;
			res.redirect('/reflection2');
		}
};
