module.exports = class DiceService {
    static rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
}