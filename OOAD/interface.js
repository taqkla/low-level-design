// Define a Playable interface
const Playable = {
    rollDice() {
        throw new Error('Subclasses must implement rollDice');
    },
    moveForward() {
        throw new Error('Subclasses must implement moveForward');
    }
};

// Define a class for a Player that implements the Playable interface
class Player {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    moveForward(steps) {
        this.position += steps;
    }
}

// Create a player and simulate their turn
const player = new Player('Alice');
const diceRoll = player.rollDice();
player.moveForward(diceRoll);

console.log(`${player.name} rolled a ${diceRoll} and moved to position ${player.position}`);
