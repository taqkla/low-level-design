const Square = require('./square');
const Snake = require('./snake');
const Ladder = require('./ladder');

module.exports = class Board {
    constructor(size) {
        this.size = size;
        this.squares = Array.from({ length: size }, (_, i) => new Square(i));
    }

    addSnake(startPosition, endPosition) {
        this.squares[startPosition].snake = new Snake(startPosition, endPosition);
    }

    addLadder(startPosition, endPosition) {
        this.squares[startPosition].ladder = new Ladder(startPosition, endPosition);
    }
}