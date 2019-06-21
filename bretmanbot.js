
var Twit = require('twit');
var T = new Twit(require('./config.js'));
var bret = {q: "#BretmanRock", count: 20, result_type: "recent"}; 

function retweet() {
	T.get('search/tweets', bret, function (error, data) {
	  console.log(error, data);
	  if (!error) {
		var retweetId = data.statuses[0].id_str;
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Go off!')
			}
			if (error) {
				console.log('Girl...', error);
			}
		})
	  }
	  else {
	  	console.log('There was an error... o whateva', error);
	  }
	});
}
retweet();
setInterval(retweet, 60000);