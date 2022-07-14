const game = require("../model/game");
console.log("Game Controller running!");

let games = [];

let game1 = game.createGame(
    "Spassky-Fischer World Chess Championship", "Reykjavik, Iceland", "07/23/1972",
    "Robert Fischer", "Boris Spassky", "1-0",
    "White", "/images/Fischer-Spassky.JPG", "https://lichess.org/study/1NfvLR0O/Jvt6zMGz#39",
    'Game 6 of the 1972 World Championship match, named "the match of the century", between Soviet GM Boris Spassky and American GM Robert Fischer signals a turning point, as Spassky never recovers from this defeat, marking the end of 24 years of Soviet dominance over the World Championship.'
)
let game2 = game.createGame(
    "Kasparov-Karpov World Chess Championship", "Lyon, France", "12/15/1990",
    "Garry Kasparov", "Anatoly Karpov", "1-0",
    "White", "/images/Kasparov-Karpov.JPG", "https://lichess.org/study/1NfvLR0O/QwZcrfHW#50",
    "Game 20 of the 1990 World Championship match between Soviets GM Anatoly Karpov and GM Garry Kasparov began as the highly postional Zaitsev variation of the Ruy Lopez, a favorite of Karpov. Midway through the game, however, Karpov made an error by overlooking Kasparov's next move in the position, Nxh6, paving the way for Kasparov to win the match to retain his title." 
)
let game3 = game.createGame(
    "IBM Man versus Machine", "New York City, United States", "05/11/1997",
    "IBM's Deep Blue", "Garry Kasparov", "1-0",
    "White", "/images/Blue-Kasparov.JPG", "https://lichess.org/study/1NfvLR0O/n9b71Dpz#14",
    "Game 6 of the second match between IBM's Deep Blue chess supercomputer and World Champion GM Garry Kasparov. After their first match a year prior ended in a 4-2 win in favor of Kasparov, but in 1997, the score was tied 2.5-2.5 by the fifth game, meaning that Kasparov's loss set the record for a computer beating a World Chess Champion in a tournament-regulated match."
)
let game4 = game.createGame(
    "Anand-Carlsen World Chess Championship", "Channai, India", "11/16/2013",
    "Viswanathan Anand", "Magnus Carlsen", "0-1",
    "Black", "/images/Anand-Carlsen.JPG", "https://lichess.org/study/1NfvLR0O/STty8WOI#51",
    "Game 6 of the 2013 World Championship match between Norwegian GM Magnus Carlsen and Indian GM Viswanathan Anand evolved from a solid position, one from the Berlin Defense line of the Ruy Lopez, with Carlsen gaining a slight advantage in the latter half of the middle game. Ultimately, after a long and tantalizing rook endgame, Carlsen capitalized on his positional advantages, causing Anand to resign, allowing for Carlsen's 9 year ongoing reign as World Chess Champion to begin."
)

//pushes games to the games array
games.push(game1);
games.push(game2);
games.push(game3);
games.push(game4);

// sets definitions of method inputs from the request
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