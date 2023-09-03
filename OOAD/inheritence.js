// Define a Playable interface
class Playable {
    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
        // throw new Error('Subclasses must implement rollDice');
    }
    moveForward() {
        throw new Error('Subclasses must implement moveForward');
    }
};

// Define a class for a Player that implements the Playable interface
class Player extends Playable {
    constructor(name) {
        super();
        this.name = name;
        this.position = 0;
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
