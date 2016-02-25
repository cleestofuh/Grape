var datajson = require('../public/data.json');

exports.giveChart = function(req, res){
	res.render('chart_info', {kinderact:datajson["kinders"]});
};
