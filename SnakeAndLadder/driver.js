const Game = require('./game');

const game = new Game(100, 2);
game.board.addSnake(16, 6);
game.board.addLadder(8, 25);
game.start();