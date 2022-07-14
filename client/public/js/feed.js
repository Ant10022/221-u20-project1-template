

// button in header
document.getElementById("portal_button").addEventListener("click", () => goToLocation("https://chess.com"));

// creating an item in the feed
function feedItem(title, story, linkUrl, imageUrl, date){
    this.title = title;
    this.story = story;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
    this.date = date;
}

let story1 = new feedItem(
    "Ian Nepomniachtchi Wins a Historic Victory in the 2022 Candidates!", 
    "Russian Grandmaster Ian Nepomniachtchi wins the Candidates Tournament with a round to spare. He has now won two candidates tournaments in a row with a record setting 9.5/14 points, and he is now projected to face Magnus Carlsen for a second time, for the title of World Chess Champion. Magnus Carlsen is currently in negotiations with FIDE President Arkady Dvorkovich over the format of the World Chess Championship match, which may jeopordize his place in the match, and may cause him to forfeit his seat in the match to Chinese GM Ding Liren.", 
    "https://bit.ly/3OQPqZz", 
    "/images/Nepomniachtchi.jpg", 
    "7/5/2022"
    );

let story2 = new feedItem(
    "Is Firouzja Set to Overtake the #1 Spot?", 
    "Alireza Firouzja, an 18 year old Iranian Grandmaster, now playing for the French Federation, crosses the 2800 rating barrier, placing him in the #2 spot on the world's leaderboard, being the youngest person to do so in history. He did so winning a silver medal in the European Team Championship, securing his placement by defeating Azerbaijani Grandmaster Shakhriyar Mamedyarov in a breakneck game in the final round.", 
    "https://bit.ly/3uwlOsm", 
    "/images/Firouzja.jpeg", 
    "11/21/2021"
    );

let story3 = new feedItem(
    "Garry Kasparov Loses Monumental Game to IBM's Deep Blue, Cementing Machine Over Man on the Chess Board", 
    "After a grueling set of games leading to a tied score, Kasparov, reigning world champion for 12 years, chose to play the Steiniz variation of the Caro-Kann opening, known for its dynamic and volatile positions. Deep Blue was able to find the correct refutation to Kasparov's position by sacrificing its knight. In less than 20 moves since the beginning of the game, Kasparov was in a losing position with no way to recover, forcing him to resign. This resignation had sent shockwaves around the world, as it was the first time a world champion had been defeated by a computer in a tournament-regulated match.", 
    "https://bit.ly/3yrcTt3", 
    "/images/DeepBlue.png", 
    "5/11/1997"
    );

let stories = [story1, story2, story3];

// Displays a bit of the feed
let displayFeedItem = function(feedbit){
    document.getElementById(("newsfeed")).innerHTML += 
    //Inserting HTML and object values
    "<div> <div class = feedTitle>" + feedbit.title + "</div> <img class = feedImg src = '" + feedbit.imageUrl + "'></img> <br/> <p class = feedText>" + feedbit.story + "</p> <a href = " + feedbit.linkUrl + "> Find Out More Now!</a> <br/> <span class = date> Written on: " + feedbit.date + "</span> <hr/> </div>";
}

// on load, loops for all the stories in an array, passing an object as a "feedbit"
window.addEventListener("load", () => {
for(var i = 0; i < stories.length; i++){
    displayFeedItem(stories[i]);
}});

// creating a chess game
function game(event, site, date, playerWhite, playerBlack, result, toMove, imageFEN, gameURL, description){
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

let game1 = new game(
    "Spassky-Fischer World Chess Championship", "Reykjavik, Iceland", "07/23/1972",
    "Robert Fischer", "Boris Spassky", "1-0",
    "White", "/images/Fischer-Spassky.JPG", "https://lichess.org/study/1NfvLR0O/Jvt6zMGz#39",
    'Game 6 of the 1972 World Championship match, named "the match of the century", between Soviet GM Boris Spassky and American GM Robert Fischer signals a turning point, as Spassky never recovers from this defeat, marking the end of 24 years of Soviet dominance over the World Championship.'
)
let game2 = new game(
    "Kasparov-Karpov World Chess Championship", "Lyon, France", "12/15/1990",
    "Garry Kasparov", "Anatoly Karpov", "1-0",
    "White", "/images/Kasparov-Karpov.JPG", "https://lichess.org/study/1NfvLR0O/QwZcrfHW#50",
    "Game 20 of the 1990 World Championship match between Soviets GM Anatoly Karpov and GM Garry Kasparov began as the highly postional Zaitsev variation of the Ruy Lopez, a favorite of Karpov. Midway through the game, however, Karpov made an error by overlooking Kasparov's next move in the position, Nxh6, paving the way for Kasparov to win the match to retain his title." 
)
let game3 = new game(
    "IBM Man versus Machine", "New York City, United States", "05/11/1997",
    "IBM's Deep Blue", "Garry Kasparov", "1-0",
    "White", "/images/Blue-Kasparov.JPG", "https://lichess.org/study/1NfvLR0O/n9b71Dpz#14",
    "Game 6 of the second match between IBM's Deep Blue chess supercomputer and World Champion GM Garry Kasparov. After their first match a year prior ended in a 4-2 win in favor of Kasparov, but in 1997, the score was tied 2.5-2.5 by the fifth game, meaning that Kasparov's loss set the record for a computer beating a World Chess Champion in a tournament-regulated match."
)
let game4 = new game(
    "Anand-Carlsen World Chess Championship", "Channai, India", "11/16/2013",
    "Viswanathan Anand", "Magnus Carlsen", "0-1",
    "Black", "/images/Anand-Carlsen.JPG", "https://lichess.org/study/1NfvLR0O/STty8WOI#51",
    "Game 6 of the 2013 World Championship match between Norwegian GM Magnus Carlsen and Indian GM Viswanathan Anand evolved from a solid position, one from the Berlin Defense line of the Ruy Lopez, with Carlsen gaining a slight advantage in the latter half of the middle game. Ultimately, after a long and tantalizing rook endgame, Carlsen capitalized on his positional advantages, causing Anand to resign, allowing for Carlsen's 9 year ongoing reign as World Chess Champion to begin."
)

let games = [game1, game2, game3, game4];

let displayGameLeft = function(board){
    document.getElementById(("gamesOTWLeft")).innerHTML += 
    //Inserting HTML and object values
    "<div> <div class = event>" + board.event + "</div> <div class = setting>" + board.site + ", " + board.date + "</div> <div class = gameTitle>" + board.playerWhite + " vs. " + board.playerBlack + "</div> <div class = result>" + board.result + "</div> <img class = gameFEN src = '" + board.imageFEN + "'></img> <div class = toMove>" + board.toMove + " to Move</div> <a href = " + board.gameURL + ">See the rest of the game here.</a> <p class = gameText>" + board.description + "</p> <hr/> </div>";
}

let displayGameRight = function(board){
    document.getElementById(("gamesOTWRight")).innerHTML += 
    //Inserting HTML and object values
    "<div> <div class = event>" + board.event + "</div> <div class = setting>" + board.site + ", " + board.date + "</div> <div class = gameTitle>" + board.playerWhite + " vs. " + board.playerBlack + "</div> <div class = result>" + board.result + "</div> <img class = gameFEN src = '" + board.imageFEN + "'></img> <div class = toMove>" + board.toMove + " to Move</div> <a href = " + board.gameURL + ">See the rest of the game here.</a> <p class = gameText>" + board.description + "</p> <hr/> </div>";
}

window.addEventListener("load", () => { 
    for(let i = 0; i < games.length; i++){
        if(i%2 == 0){
            displayGameLeft(games[i]);
        }
        if(i%2 == 1){
            displayGameRight(games[i]);
        }
}});