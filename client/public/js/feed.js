// button in header
document.getElementById("portal_button").addEventListener("click", () => goToLocation("https://chess.com"));

// creating an item in the feed
function feedItem(title, body, linkUrl, imageUrl, date){
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
    this.date = date;
}

let story1 = new feedItem(
    "Ian Nepomniachtchi Wins a Historic Victory in the 2022 Candidates!", 
    "Russian Grandmaster Ian Nepomniachtchi wins the Candidates Tournament with a round to spare. He has now won two candidates tournaments in a row with a record setting 9.5/14 points, and he is now projected to face Magnus Carlsen for a second time, for the title of World Chess Champion.", 
    "https://bit.ly/3OQPqZz", 
    "https://bit.ly/3RbzxOV", 
    "7/5/2022"
    );

let story2 = new feedItem(
    "Is Firouzja Set to Overtake the #1 Spot?", 
    "Alireza Firouzja, an 18 year old Iranian Grandmaster, now playing for the French Federation, crosses the 2800 rating barrier, placing him in the #2 spot on the world's leaderboard, being the youngest person to do so in history. He did so winning a silver medal in the European Team Championship, securing his placement by defeating Azerbaijani Grandmaster Shakhriyar Mamedyarov in a breakneck game in the final round.", 
    "https://bit.ly/3uwlOsm", 
    "https://bit.ly/3am9mo5", 
    "11/21/2021"
    );

let story3 = new feedItem(
    "Garry Kasparov Loses Monumental Game to IBM's Deep Blue, Cementing Machine Over Man on the Chess Board", 
    "After a grueling set of games leading to a tied score, Kasparov, reigning world champion for 12 years, chose to play the Steiniz variation of the Caro-Kann opening, known for its dynamic and volatile positions. Deep Blue was able to find the correct refutation to Kasparov's position by sacrificing its knight. In less than 20 moves since the beginning of the game, Kasparov was in a losing position with no way to recover, forcing him to resign. This resignation had sent shockwaves around the world, as it was the first time a world champion had been defeated by a computer in a tournament-regulated match.", 
    "https://bit.ly/3yrcTt3", 
    "https://bit.ly/3ORGnrj", 
    "5/11/1997"
    );

let currentStories = [story1, story2, story3];

// Displays a bit of the feed
let displayItem = function(feedbit){
    document.getElementById(("newsfeed")).innerHTML += 
    //Inserting HTML and object values
    "<div> <h2>" + feedbit.title + "</h2> <img class = feedImg src = " + feedbit.imageUrl + "></img> <br/> <p>" + feedbit.body + "</p> <a href = " + feedbit.linkUrl + "> Find Out More Now!</a> <br/> <span class = date> Written on: " + feedbit.date + "</span> <hr/> </div>";
}

// on load, loops for all the stories in an array, passing an object as a "feedbit"
window.addEventListener("load", () => {
for(var i = 0; i < currentStories.length; i++){
    displayItem(currentStories[i]);
}});

