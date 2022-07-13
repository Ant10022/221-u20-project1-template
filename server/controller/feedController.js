const feedItem = require("../model/feedItem");
console.log("Feed Controller running!");

let stories = [];

let story1 = feedItem.createFI(
    "Ian Nepomniachtchi Wins a Historic Victory in the 2022 Candidates!", 
    "Russian Grandmaster Ian Nepomniachtchi wins the Candidates Tournament with a round to spare. He has now won two candidates tournaments in a row with a record setting 9.5/14 points, and he is now projected to face Magnus Carlsen for a second time, for the title of World Chess Champion.", 
    "https://bit.ly/3OQPqZz", 
    "https://bit.ly/3RbzxOV", 
    "7/5/2022"
);
let story2 = feedItem.createFI(
    "Is Firouzja Set to Overtake the #1 Spot?", 
    "Alireza Firouzja, an 18 year old Iranian Grandmaster, now playing for the French Federation, crosses the 2800 rating barrier, placing him in the #2 spot on the world's leaderboard, being the youngest person to do so in history. He did so winning a silver medal in the European Team Championship, securing his placement by defeating Azerbaijani Grandmaster Shakhriyar Mamedyarov in a breakneck game in the final round.", 
    "https://bit.ly/3uwlOsm", 
    "https://bit.ly/3am9mo5", 
    "11/21/2021"
);
let story3 = feedItem.createFI(
    "Garry Kasparov Loses Monumental Game to IBM's Deep Blue, Cementing Machine Over Man on the Chess Board", 
    "After a grueling set of games leading to a tied score, Kasparov, reigning world champion for 12 years, chose to play the Steiniz variation of the Caro-Kann opening, known for its dynamic and volatile positions. Deep Blue was able to find the correct refutation to Kasparov's position by sacrificing its knight. In less than 20 moves since the beginning of the game, Kasparov was in a losing position with no way to recover, forcing him to resign. This resignation had sent shockwaves around the world, as it was the first time a world champion had been defeated by a computer in a tournament-regulated match.", 
    "https://bit.ly/3yrcTt3", 
    "https://bit.ly/3ORGnrj", 
    "5/11/1997"
);

stories.push(story1);
stories.push(story2);
stories.push(story3);

exports.getFIs = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(stories);
}

exports.saveFI = function(req, res) {
	let newFI = feedItem.createFI(req.body.title, req.body.story, req.body.linkUrl, req.body.imageUrl, req.body.date);
	stories.push(newFI);
	res.setHeader('Content-Type', 'application/json');
	res.send(stories);
}

exports.getFI = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(stories[req.params.FIid]);
}

exports.deleteFI = function(req, res) {
	stories.splice(req.params.FIid, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(stories);
}

exports.fullupdateFI = function(req, res){
	stories[req.params.FIid] = feedItem.createFI(req.body.title, req.body.story, req.body.linkUrl, req.body.imageUrl, req.body.date);
	res.setHeader('Content-Type', 'application/json');
	res.send(stories);
}

exports.updateFI = function(req, res) {
	// get the existing FI from the array
	var updatedFI = stories[req.params.FIid];

	// check to see what has been passed and update the local copy
	if(req.body.title)
		updatedFI.title = req.body.title;
	if(req.body.story)
		updatedFI.story = req.body.story;
	if(req.body.linkUrl)
		updatedFI.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedFI.imageUrl = req.body.imageUrl;
    if(req.body.date)
		updatedFI.imageUrl = req.body.date;
	// save the local copy of the FI back into the array
	stories[req.params.FIid] = updatedFI;

	res.setHeader('Content-Type', 'application/json');
	res.send(stories[req.params.FIid]);
}