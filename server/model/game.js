function game(event, site, date, playerWhite, playerBlack, result, imageFEN, toMove, gameURL, description){
    this.event = event;
    this.site = site;
    this.date = date;
    this.playerWhite = playerWhite;
    this.playerBlack = playerBlack;
    this.result = result;
    this.imageFEN = imageFEN;
    this.toMove = toMove;
    this.gameURL = gameURL;
    this.description = description;
}

exports.createGame = function(event, site, date, playerWhite, playerBlack, result, imageFEN, toMove, gameURL, description){
    return new game(event, site, date, playerWhite, playerBlack, result, imageFEN, toMove, gameURL, description);
}
  
console.log("Game Model is running!");