const Board = require('./entities/board');
const Player = require('./entities/player');
const DiceService = require('./services/diceservice');

module.exports = class Game {
    constructor(boardSize, numPlayers) {
        this.board = new Board(boardSize);
        this.players = Array.from({ length: numPlayers }, (_, i) => new Player(`Player ${i + 1}`));
        this.currentPlayerIndex = 0;
        this.winner = null;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    playTurn() {
        const currentPlayer = this.players[this.currentPlayerIndex];
        const steps = DiceService.rollDice();
        console.log(`${currentPlayer.name} rolled ${steps}.`);

        const newPosition = currentPlayer.position + steps;
        if (newPosition >= this.board.size) {
            console.log(`${currentPlayer.name} cannot move beyond the board. Skipping this turn.`);
            return;
        }

        currentPlayer.move(steps);
        console.log(`${currentPlayer.name} is now at position ${currentPlayer.position}.`);

        const square = this.board.squares[currentPlayer.position];
        if (square.snake) {
            console.log(`${currentPlayer.name} landed on a snake. Going down to ${square.snake.endPosition}.`);
            currentPlayer.position = square.snake.endPosition;
        } else if (square.ladder) {
            console.log(`${currentPlayer.name} landed on a ladder. Going up to ${square.ladder.endPosition}.`);
            currentPlayer.position = square.ladder.endPosition;
        }

        if (currentPlayer.position === this.board.size - 1) {
            this.winner = currentPlayer;
        }
    }

    start() {
        while (!this.winner) {
            this.playTurn();
            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        }

        console.log(`Congratulations! ${this.winner.name} wins the game!`);
    }
}