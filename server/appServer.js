const express = require('express');
const bodyParser = require('body-parser');
const feedController = require('./controller/feedController');
const gameController = require('./controller/gameController');
const app = express();

app.use(bodyParser.json({type:'application/json'}));
app.use(express.static('client/public'));

// establishes routes for different methods sent to the feed API
app.route('/api/FIs')
	.get((req, res) => {
        feedController.getFIs(req, res);
    })
	.post((req, res) => {
        feedController.saveFI(req, res);
    })
app.route('/api/FIs/:FIid')
	.get((req, res) => {
        feedController.getFI(req, res);
    })
	.delete((req, res) => {
        feedController.deleteFI(req, res);
    })
	.patch((req, res) => {
        feedController.updateFI(req, res);
    })
    .put((req, res) => {
        feedController.fullUpdateFI(req, res);
    })
// establishes routes for different methods sent to the game API
app.route('/api/Games')
	.get((req, res) => {
        gameController.getGames(req, res);
    })
	.post((req, res) => {
        gameController.saveGame(req, res);
    })
app.route('/api/Games/:Gameid')
	.get((req, res) => {
        gameController.getGame(req, res);
    })
	.delete((req, res) => {
        gameController.deleteGame(req, res);
    })
	.patch((req, res) => {
        gameController.updateGame(req, res);
    })
    .put((req, res) => {
        gameController.fullUpdateGame(req, res);
    })

// gives the html files when the route is typed in
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
});
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
});

app.listen(1337, () => console.log('Listening on port 1337.'));
