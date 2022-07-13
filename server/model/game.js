function game(event, date, site, whitePlayer, blackPlayer, result, toMove, imageFEN, gameURL, description){
    this.event = event;
    this.date = date;
    this.site = site;
    this.whitePlayer = whitePlayer;
    this.blackPlayer = blackPlayer;
    this.result = result;
    this.toMove = toMove;
    this.imageFEN = imageFEN;
    this.gameURL = gameURL;
    this.description = description;
}

exports.createGame = function(event, date, site, whitePlayer, blackPlayer, result, toMove, imageFEN, gameURL, description){
    return new game(event, date, site, whitePlayer, blackPlayer, result, toMove, imageFEN, gameURL, description);
}
  
console.log("Game Model is running!");