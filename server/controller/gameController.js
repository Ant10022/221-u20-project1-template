const game = require("../model/game");
console.log("Game Controller running!");

let games = [];

exports.getGames = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(games);
}

exports.saveGame = function(req, res) {
	let newGame = game.createGame(req.body.event, req.body.site, req.body.date, req.body.playerWhite, req.body.playerBlack, req.body.result, req.body.toMove, req.body.imageFEN, req.body.gameURL, req.body.description);
	games.push(newGame);
	res.setHeader('Content-Type', 'application/json');
	res.send(games);
}

exports.getGame = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(games[req.params.Gameid]);
}

exports.deleteGame = function(req, res) {
	games.splice(req.params.Gameid, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(games);
}

exports.fullupdateGame = function(req, res){
	games[req.params.Gameid] = game.createGame(req.body.event, req.body.site, req.body.date, req.body.playerWhite, req.body.playerBlack, req.body.result, req.body.imageFEN, req.body.toMove, req.body.gameURL, req.body.description);
	res.setHeader('Content-Type', 'application/json');
	res.send(games);
}

exports.updateGame = function(req, res) {
	// get the existing game from the array
	var updatedGame = games[req.params.Gameid];

	// check to see what has been passed and update the local copy
	if(req.body.event)
		updatedGame.event = req.body.event;
	if(req.body.site)
		updatedGame.site = req.body.site;
	if(req.body.date)
		updatedGame.date = req.body.date;
	if(req.body.playerWhite)
		updatedGame.playerWhite = req.body.playerWhite;
    if(req.body.playerBlack)
		updatedGame.playerBlack = req.body.playerBlack;
    if(req.body.result)
		updatedGame.result = req.body.result;
	if(req.body.imageFEN)
		updatedGame.imageFEN = req.body.imageFEN;
	if(req.body.toMove)
		updatedGame.toMove = req.body.toMove;
	if(req.body.gameURL)
		updatedGame.gameURL = req.body.gameURL;
    if(req.body.description)
		updatedGame.description = req.body.description;

	// save the local copy of the game back into the array
	games[req.params.Gameid] = updatedGame;

	res.setHeader('Content-Type', 'application/json');
	res.send(games[req.params.Gameid]);
}