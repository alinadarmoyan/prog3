LivingCreature = require('./LivingCreature');

module.exports = class Grass extends LivingCreature{
    constructor(x, y, multiplay) {
        super(x, y, multiplay)
    }

    mul() {
        this.multiply++;
        if (this.multiply >= 3) {
            let emptyCells = super.chooseCell(0)
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            if (this.multiply >= 5 && newCell) {
                let x = newCell[0]
                let y = newCell[1]
                var gr = new Grass(x, y)
                grassArr.push(gr)
                this.multiply = 0;
            }
        }
    }
}
